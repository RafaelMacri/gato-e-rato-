var gato1,gato2,gato3,gato;
var rato1,rato2,rato3,rato
var bg 

function preload() {

gato1 = loadAnimation ("cat1.png")
gato2 = loadAnimation ("cat2.png" ,"cat3.png")
gato3 = loadAnimation ("cat4.png")

rato1 = loadAnimation ("mouse1.png")
rato2 = loadAnimation ("mouse2.png","mouse3.png")
rato3 = loadAnimation ("mouse4.png")

bg = loadImage ("garden.png")

}

function setup(){
    createCanvas(1000,800);
  gato = createSprite (870,600)
  gato.addAnimation("deitado",gato1)
 gato.scale = 0.2

 rato = createSprite (200,600)
 rato.addAnimation("parado",rato1)
 rato.scale = 0.2


}

function draw() {

    background(bg);
  
   if (gato.x - rato.x <(gato.width - rato.width) /2){
    gato.velocityX = 0
    gato.addAnimation("sentado",gato3)
    gato.scale = 0.2
    gato.changeAnimation ("sentado")
    gato.x = 300
    rato.addAnimation("lupa",rato3)
    rato.scale = 0.2
    rato. changeAnimation("lupa")
   }

    drawSprites();
}


function keyPressed(){

 if(keyCode === LEFT_ARROW) {
 gato.velocityX = -5
 gato.addAnimation("andando", gato2 )
 gato.changeAnimation("andando")

 rato.addAnimation("provocando", rato2 )
 rato.changeAnimation("provocando")
 rato.frameDelay = 25
}
}
