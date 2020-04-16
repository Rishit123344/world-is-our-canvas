var drawing= [];
var database;
var Canvas;
var x,y

function setup() {
  createCanvas(1000,1000);
  background(51);
  database = firebase.database();
}
var database_drawing = [];
  
 
function mouseDragged(){
    var point = {
      x : mouseX,
      y : mouseY
    }

drawing.push(point);
var drawingRef = database.ref('drawing')
drawingRef.set({
    "d": drawing
})
}
  function draw() {
  readData();
  beginShape();
  stroke(255);
  strokeWeight(4);
  noFill();

  for (var i =0; i <database_drawing.length; i++){
vertex (database_drawing [i].x ,database_drawing [i].y )
endShape();
  }
}
  
  function readData(){
    database.ref('drawing/').on('value', (data) => {
      database_drawing = data.val().d
  })
  }








