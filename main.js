img="";

status = "";
objects = [];

function preload(){
   img= loadImage('lamps.jfif',);
  
}

function setup(){
    canvas= createCanvas(640,420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function draw() 
{
    image(img,0,0,640,420);

    if(status != "")
    {
        
    }
   
}

function modelLoaded()
{
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img, gotResult);
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
    window.location="kicthen.html";
 }
