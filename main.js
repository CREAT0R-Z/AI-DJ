song="";
song1status= "";
song2status="";
scoreleftwrist = 0;
scorerightwrist = 0;
leftWristx = 0;
leftWristy = 0;
rightWristx = 0;
rightWristy = 0;
function setup(){
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    posenet = poseNet(video, modelloaded);
    posenet.on("pose", gotresults);
}

function draw(){
    image(video, 0, 0, 600, 500);
    stroke("yellow");
    fill("yellow");
    song1status = song1.isPlaying();
    song2status = song2.isPlaying();
    if(scoreleftwrist > 0.2 ){
        circle(leftWristx, leftWristy, 20);
        song2.stop();
        document.getElementById("song").innerHTML;
        if(song1status == false){
            song1.play();
        }

    }
    if(scorerightwrist>0.2){
        circle(rightWristx, rightWristy, 20);
        song1.stop();
        document.getElementById("song").innerHTML;
        if(song2status == false){
            song2.play();
        }
    }

}

function preload(){
    song1 = loadSound("believer.mp3");
    song2 = loadSound("bones.mp3");
}

function start(){
   
}
function modelloaded(){
    console.log("Model is loaded");
}

function gotresults(results){
    if(results.length>0){
        leftWristx = results[0].pose.leftWrist.x;
        leftWristy = results[0].pose.leftWrist.y;
        rightWristx = results[0].pose.rightWrist.x;
        rightWristy = results[0].pose.rightWrist.y;
         scoreleftwrist = results[0].pose.keypoints[9].score;
         scorerightwrist = results[0].pose.keypoints[10].score;
    }

}