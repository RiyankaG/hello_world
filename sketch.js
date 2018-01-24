function setup(){
    createCanvas(800, 800);
}

function draw(){
    background(0);
    fill(1);
    x += speed; 
    if(x > width){
    x = 0; 
    }
    fill(210, 30, 140);
    ellipse(x,y,50,50);
    fill(255,200,200);
    rect(400, 400, 200, 200);}
function setup(){
    createCanvas(800, 200);
    }
    function draw(){
    fill(random(0, 255), random(0, 255), random(0, 255));
    ellipse(mouseX,mouseY,50,50);
    }
    var x = 100.0; 
    var y = 100; 
    var speed = 2.5; 
    function setup(){
    createCanvas(800, 200);
    }
    