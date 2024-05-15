function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("white");
fill("black")
  textSize(64);
  textAlign(CENTER, CENTER);

  let maximo = width;
let minimo = 0;
let palavra = "Caminhante";
let quantidade = map(mouseX, 0, width, 0, palavra.length);
let parcial = palavra.substring(0,quantidade);

  text(parcial, 200, 200)
  
}
