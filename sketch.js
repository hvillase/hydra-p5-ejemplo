// javascript
// hydra 


// puntillismo 

var hc;
var pg; 

var hydra = new Hydra({ canvas: document.getElementById("myCanvas") })

/////////////////////////

voronoi(10).color(2,3,4).out(); 
// hush(); 

/////////////////////////

function setup() {
  createCanvas(400, 400);
  console.log("hola mundo")
  hc = select("#myCanvas")
  hc.hide()
  pg = createGraphics(width, height);

}

function draw() {
  // background(220);
  pg.image(hc, 0, 0);
  noStroke(); 
  
  // pg es una imagen desde Hydra 
  
  // pixeles 
  
  for(let i = 0; i < 200; i++){
  
  let posX = random(width);
  let posY = random(height);
  
  // console.log(pg.get(10, 10)); // RGB+A

  fill(pg.get(posX, posY)); 
  ellipse(posX, posY, 10, 10);
  }
  
  
}
