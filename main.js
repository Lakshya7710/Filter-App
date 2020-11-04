nose_x=0;
nose_y=0;

function preload(){
    clown_nose=loadImage("https://i.postimg.cc/66krfwr4/Clown-nose.png");
}

function setup(){
    canvas=createCanvas(450,450);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(450,450);
     video.hide();
     posenet=ml5.poseNet(video,modelLoaded);
     posenet.on("pose",gotPoses);
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        console.log("nose x ="+results[0].pose.nose.x);
        console.log("nose y ="+results[0].pose.nose.y);
        nose_x=results[0].pose.nose.x-45;
        nose_y=results[0].pose.nose.y-45;

    }
}

function modelLoaded(){
    console.log("Posnet is Initialized");
}

function draw(){
    image(video,0,0,450,450);
    image(clown_nose,nose_x,nose_y,90,90);
}

function take_snapshot(){
    save("My_filtered_image.png");
}
