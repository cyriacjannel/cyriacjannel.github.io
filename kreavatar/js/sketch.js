//Cyriac JANNEL (15-01-2016)



var f = 0



function setup() {
  //GÉNÉRALITÉS
  var canvas = createCanvas(600, 600);
  frameRate(5);
  canvas.parent('sketch-holder');
  title=createElement('h1','KRÉAVATAR');
  title.parent('title-holder');
  title=createElement('h2','Générateur de pseudo et d’avatar');
  title.parent('title-holder');



  //COULEUR DES FORMES
  title=createElement('h3','CERCLES');
  title.parent('leftup-holder');
  s=createP('rouge');
  s.parent('leftup-holder');
  rShape = createSlider(0, 255, 10);
  rShape.parent('leftup-holder');
  s=createP('vert');
  s.parent('leftup-holder');
  gShape = createSlider(0, 255, 50);
  gShape.parent('leftup-holder');
  s=createP('bleu');
  s.parent('leftup-holder');
  bShape = createSlider(0, 255, 140);
  bShape.parent('leftup-holder');
  s=createP('opacité');
  s.parent('leftup-holder');
  oShape = createSlider(5, 255, 20);
  oShape.parent('leftup-holder');

  //TYPE DE FORMES
  s=createP('type');
  s.parent('leftup-holder');
  typeshape = createSlider(0, 1, 0);
  typeshape.parent('leftup-holder');
  s=createP('quantité');
  s.parent('leftup-holder');
  nShape = createSlider(0, 1000, 750);
  nShape.parent('leftup-holder');
  s=createP('taille');
  s.parent('leftup-holder');
  sShape = createSlider(0, 80, 70);
  sShape.parent('leftup-holder');



  //TEXTE
  title=createElement('h3','TEXTE');
  title.parent('rightup-holder');
  t=createP('gris');
  t.parent('rightup-holder');
  wText = createSlider(0, 255, 250);
  wText.parent('rightup-holder');
  trb=createP('opacité');
  trb.parent('rightup-holder');
  oText = createSlider(5, 255, 255);
  oText.parent('rightup-holder');
  t=createP('police');
  t.parent('rightup-holder');
  fText = createSlider(0, 1, 0);
  fText.parent('rightup-holder');
  t=createP('taille');
  t.parent('rightup-holder');
  sText = createSlider(60, 110, 80);
  sText.parent('rightup-holder');



  //ARRIÈRE-PLAN
  title=createElement('h3','ARRIÈRE-PLAN');
  title.parent('rightbot-holder');
  b=createP('rouge');
  b.parent('rightbot-holder');
  rBackground = createSlider(0, 255, 230);
  rBackground.parent('rightbot-holder');
  b=createP('vert');
  b.parent('rightbot-holder');
  gBackground = createSlider(0, 255, 150);
  gBackground.parent('rightbot-holder');
  b=createP('bleu');
  b.parent('rightbot-holder');
  bBackground = createSlider(0, 255, 150);
  bBackground.parent('rightbot-holder');



  //BOUTON CRÉER
  btnCreate = createButton('kréer');
  btnCreate.parent('leftbot-holder');
  btnCreate.mousePressed(draw);



  //BOUTON SAUVEGARDER
  btnSave = createButton('sauvegarder');
  btnSave.parent('leftbot-holder');
  btnSave.mousePressed(screenshot);
  


  noLoop();
}



function draw() {
  //ARRIÈRE-PLAN
  background(rBackground.value(), gBackground.value(), bBackground.value());



  //FORMES
  for (var n = 0; n < nShape.value(); n++) {
    push();
    noStroke();
    fill(rShape.value(), gShape.value(), bShape.value(), oShape.value());
    translate(random(width), random(height));
    var s = typeshape.value();
    if (s == 0){
    ellipse(0, 0, sShape.value(), sShape.value());      
  } else {
    rect(0, 0, sShape.value(), sShape.value());
  };
    pop();
  }



  //TEXTE ALÉATOIRE
  var letter1 = [ "B", "C", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z" ];
  var letter2 = [ "A", "E", "I", "O", "U" ];
  var letter3 = [ "B", "C", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z" ];
  var letter4 = [ "A", "E", "I", "O", "U" ];
  var letter5 = [ "B", "C", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Z" ];

  var index1 = floor(random(letter1.length));
  var index2 = floor(random(letter2.length));
  var index3 = floor(random(letter3.length));
  var index4 = floor(random(letter4.length));
  var index5 = floor(random(letter5.length));
 
  fill(wText.value(), wText.value(), wText.value(), oText.value());
  noStroke();
  textSize(sText.value());
  textAlign(CENTER);
  var f = fText.value();
  if (f == 0){
    textFont("serif");
  } else {
    textFont("sans-serif");
  };

  text(letter1[index1] + " " + letter2[index2] + " " + letter3[index3] + " " + letter4[index4] + " " + letter5[index5], 300, 300);



  //BARRE
  rectMode(CENTER);
  fill(wText.value(), wText.value(), wText.value(), oText.value());
  rect(300, sText.value()+265, sText.value()*3.8, 5)



  //BORDURE
  fill(0, 0, 0, 0);
  strokeWeight(5);
  stroke(wText.value(), wText.value(), wText.value(), oText.value());
  rect(300, 300, 570, 570);



}
//FULLSCREEN
function keyPressed() {
  if (keyCode === ENTER) {
    var fs = fullScreen();
    fullScreen(!fs);
  }
}



//SCREENSHOT
function screenshot() {
  f ++
  saveCanvas('img' + f, 'png');
}