
var canvas;
var database;
var form;
var updater;
var voterCount;
var takeSurvay;



function setup() {
  createCanvas(
    window.innerWidth,
    window.innerHeight
  );

  database = firebase.database();

  form = new Form();

  update = new Updater();

  takeSurvay = createButton('Take Survay');

  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);

  takeSurvay.position(window.innerWidth/2 - 40,window.innerHeight/2 - 2);

  takeSurvay.mousePressed(()=>{
    form.start();
    form.display();
    takeSurvay.hide();
  })
}

