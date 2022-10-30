
img1="";

status = "";
objects = [];

function preload(){
  
   img1= loadImage('kicthen.jpg',);
 
}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() 
{
    image(img1,0,0,640,420);

    if(status != "")
    {
        
    }
   
}

function modelLoaded()
{
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img1, gotResult);
}

function gotResult(error,results){
    if (error) {
        console.log(error);
    }else 
    {
       console.log(results);
       objects =results;
    }
}

function next()
{
    window.location="tdevices.html";
 }

 function back()
 {
    window.location="index.html";
 }