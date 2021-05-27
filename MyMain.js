video = "";

function preload() {

}

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded() {
    console.log("Posenet Loaded Successfully!")
}

function draw() {
    image(video, 0, 0, 480, 380);
}

function gotPoses(result, error) {
    if (error) {
        console.error(error)
    } else {
        
    }
}
