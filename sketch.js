var ball;

var mydatabase;
var position;

function setup(){
    createCanvas(500,500);

    mydatabase = firebase.database();

    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    //ball -position - x : , y: 
    var myBallPositionRef = mydatabase.ref('ball/position');
    myBallPositionRef.on("value", readPosition, showError);//listen
}
//database - store information
function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        writePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        writePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        writePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        writePosition(0,+1);
    }
    drawSprites();
}

function writePosition(x,y){
    mydatabase.ref('ball/position').set(
        {x : ball.x + x ,
         y:  ball.y + y  })

}
function readPosition(balldata) {
    position = balldata.val();
    console.log(position);

    ball.x = position.x;
    ball.y = position.y;

} 
function showError() {
    console.log("error");
}