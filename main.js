song=""
leftWristx = 0
leftWristy = 0
rightWristx = 0
rightWristy = 0
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
    }
}