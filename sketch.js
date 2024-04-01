var hypnoticBall, database;
var position;
function setup() {
  createCanvas(400,400);
  hypnoticBall = createSprite(200, 200, 20, 20);
  hypnoticBall.shapeColor = "green"
}

function draw() {
  database = firebase.database()

  var hypnoticBallPosition = database.ref('ball/position')
  hypnoticBall.on("value", readPosition, showError)
  background("lightblue");
  
  if(keyDown("w")){
    writePosition(0,-5)
  }
  if(keyDown("s")){
    writePosition(0,5)
  }
  if(keyDown("a")){
    writePosition(-5,0)
  }
  if(keyDown("d")){
    writePosition(5,0)
  }

  drawSprites();
}

function readPosition(data){
  position = data.val()
  hypnoticBall.x = position.x
  hypnoticBall.y = position.y
}

function writePosition(x,y){
  database.ref(ball/position).set({
    'x': position.x + x,
    'y': position.y + y
  })
}