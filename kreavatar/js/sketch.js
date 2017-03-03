  //MISE EN PAGE OPTIMISÉ POUR GOOGLE CHROME
//Cyriac JANNEL (15-01-2016)
//Musique: A$AP Rocky - Pesos



var f = 0



function setup() {
  //GÉNÉRALITÉS
  createCanvas(600, 600);
  frameRate(5);
  title=createElement('h1','KRÉAVATAR');
  title.position(648, 0);
  title=createElement('h2','Générateur de pseudo et d’avatar');
  title.position(660, 50);



  //COULEUR DES FORMES
  s=createP('CERCLES');
  s.position(645, 140);
  s=createP('rouge');
  s.position(645, 170);
  rShape = createSlider(0, 255, 10);
  rShape.position(640, 200);
  s=createP('vert');
  s.position(645, 215)
  gShape = createSlider(0, 255, 50);
  gShape.position(640, 245);
  s=createP('bleu');
  s.position(645, 260)
  bShape = createSlider(0, 255, 140);
  bShape.position(640, 290);
  s=createP('opacité');
  s.position(645, 305)
  oShape = createSlider(5, 255, 20);
  oShape.position(640, 335);

  //TYPE DE FORMES
  s=createP('type');
  s.position(645, 350)
  typeshape = createSlider(0, 1, 0);
  typeshape.position(640, 380);
  s=createP('quantité');
  s.position(645, 395)
  nShape = createSlider(0, 1000, 750);
  nShape.position(640, 425);
  s=createP('taille');
  s.position(645, 440)
  sShape = createSlider(0, 80, 70);
  sShape.position(640, 470);



  //TEXTE
  t=createP('TEXTE');
  t.position(825, 140);
  t=createP('gris');
  t.position(825, 170);
  wText = createSlider(0, 255, 250);
  wText.position(820, 200);
  trb=createP('opacité');
  trb.position(825, 215);
  oText = createSlider(5, 255, 255);
  oText.position(820, 245);
  t=createP('police');
  t.position(825, 260);
  fText = createSlider(0, 1, 0);
  fText.position(820, 290);
  t=createP('taille');
  t.position(825, 305);
  sText = createSlider(60, 110, 80);
  sText.position(820, 335);



  //ARRIÈRE-PLAN
  b=createP('ARRIÈRE-PLAN');
  b.position(825, 405);
  b=createP('rouge');
  b.position(825, 440);
  rBackground = createSlider(0, 255, 230);
  rBackground.position(820, 470);
  b=createP('vert');
  b.position(825, 485)
  gBackground = createSlider(0, 255, 150);
  gBackground.position(820, 515);
  b=createP('bleu');
  b.position(825, 530)
  bBackground = createSlider(0, 255, 150);
  bBackground.position(820, 560);



  //BOUTON CRÉER
  btnCreate = createButton('kréer');
  btnCreate.position(640, 560);
  btnCreate.mousePressed(draw);



  //BOUTON SAUVEGARDER
  btnSave = createButton('sauvegarder');
  btnSave.position(690, 560);
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