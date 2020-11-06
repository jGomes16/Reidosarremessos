var tela= 1;
var largura= 200;
var altura= 50;
var xMenu= 250;
var yMenu1= 180;
var yMenu2=235;
var yMenu3=290;
var yMenu4=365;
var img;
var img2;

function preload() {
  img = loadImage('Projeto_jogo-background.jpg.png');
  img2 = loadImage("imagem embaçada da quadra.png")
  fonteB = loadFont("Basketball.otf")
}

function setup() {
  createCanvas(700, 450);
}

function draw() {
  //Tela de menu
  if (tela == 1);{
    background(220);
    image(img, 0, 0)
    //Menu com três opções
    //Titulo
    textFont(fonteB)
    textSize(60);
    fill(255,150,0);
    noStroke();
    text("Rei dos", 350, 70);
    text("arremessos", 350, 120);


  //Inicio de Jogo
  textAlign(CENTER);
  textSize(26);
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu1 && mouseY < yMenu1 + altura){

    stroke(200);
    fill(255,150,0);
    rect(xMenu, yMenu1, largura, altura, 15);
   if (mouseIsPressed){
      tela = 2;
  }

  }
    fill(240);
    noStroke();
    text("Jogar", 350, 215);

//Tutorial
if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu2 && mouseY < yMenu2 + altura){ 
  stroke(200);
  fill(255,150,0);
  rect(xMenu, yMenu2, largura, altura, 15);
  if (mouseIsPressed){
      tela = 3;
  }
}
  fill(240);
  noStroke();
  text("Tutorial", 350, 270);

    //Créditos
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu3 && mouseY < yMenu3 + altura){
  stroke(200);
  fill(255,150,0);
  rect(xMenu, yMenu3, largura, altura, 15);
    if (mouseIsPressed){
      tela = 4;
  }
  }
  fill(240);
  noStroke();
  text("Creditos", 350, 325);

  } 
  //Jogo em ação
  if(tela == 2){
    background(220);
    image(img, 10, 0)
//Informação do jogo    
    textSize(60);
    fill(245);
    noStroke();
    text("Jogo em ", 350, 70);
    text("acao", 350, 110);
    //Botão de voltar
    if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){
      stroke(200);
  fill(255,150,0);
  rect(xMenu, yMenu4, largura, altura, 15);
    if (mouseIsPressed){
      tela = 1;
  }
  }
  textSize(28);
    fill(240);
  noStroke();
  text("Voltar", 350, 400 ); 
}
  //tutorial
  if(tela == 3){
    background(220);
    image(img2, 0, 0)
//Regras do jogo
  textFont("Georgia")  
    textAlign(CENTER)  
  textSize(20);
    fill(245);
    noStroke();
    text("Público alvo: ensino fundamental, 4º ano. ", 50, 35, 600, 300 );
    text("Consiste em resolver cálculos simples, usando adição e subtração para achar o resultado.", 50, 80, 600, 300);
//Botão de voltar    
   if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){
  stroke(200);
  fill(255,150,0);
  rect(xMenu, yMenu4, largura, altura, 15);
    if (mouseIsPressed){
      tela = 1;
  }
  }
  fill(240);
  noStroke();
  text("Voltar", 350, 400 ); 
}
//Créditos
  if(tela == 4){
  background(220);
  image(img2, 0, 0)
//Informações do creditos
  textFont("Georgia")
  textAlign(CENTER)  
  textSize(20);
  fill(245);
  noStroke();
  text("(EF04MA03) Resolver e elaborar problemas com números naturais envolvendo adição e subtração, utilizando estratégias diversas, como cálculo, cálculo mental e algoritmos, além de fazer estimativas do resultado. ", 50, 35, 600, 300 );
  text("Desenvolvido por João Victor Gomes Silveira - Lop/ECT",  50, 250, 600, 400)
//Botão de voltar    
  if (mouseX > xMenu && mouseX < xMenu + largura && mouseY > yMenu4 && mouseY < yMenu4 + altura){
  stroke(200);
  fill(255,150,0);
  rect(xMenu, yMenu4, largura, altura, 15);
    if (mouseIsPressed){
      tela = 1;
  }
  }
  fill(240);
  noStroke();
  text("Voltar", 350, 400 ); 
}  
}