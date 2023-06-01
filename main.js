
function setup()
{
    canvas= createCanvas(280,280);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}




function modelLoaded() {
    console.log('PoseNet Is Initialized');
}


function gotPoses(results)


{
if(results.length > 0)
console.log(results);
noseX = results[0].pose.nose.x;
nosey = results[0].pose.nose.y;
console.log("noseX = "+ noseX +"noseY = " + noseY);
leftWristX = results[0].pose.leftWrist.x;
rightWristX = results[0].pose.rightWrist.x;
diffrence = floor(leftWristX - rightWristX);

console.log("leftWristX =" + leftWristX + " rightwristX="+ rightWristX + "difference=" + difference);
}
}
