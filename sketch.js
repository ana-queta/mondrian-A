function setup() {
  createCanvas(800 , 784);

}

function draw() {
  background(237, 241, 237); 
    noStroke();

  // red
    fill(238, 37, 0);
    rect(0, 0, 360, 308.51);
  //yellow
    fill(253, 220, 0);
    rect(0, 518, 87, 268.68);
  //blue
    fill(38, 34, 116);
    rect(371.7, 517.64 , 238.1, 741-514); 
  
  addGradient();

 // black lines
  
    fill(0);
    rect(360,0, 13.34, 784);

    fill(0);
    rect(0,308.51, 800, 19.84);
    rect(0,501.59, 800, 16.05);
    rect(360 ,741.55, 258.92, 12.99);
  
//verticals
    fill(0);
    rect(609.75 ,517.61, 13.34, 282.17);
    rect(77.04 ,518, 9.92, 281.52);
  
  addTexture();
  noLoop();
}

function addGradient() {
   for (let y = 0; y < height; y++) {
    let alpha = map(y, 0, height, 0, 80);

    stroke(20, 15, 10, alpha);
    strokeWeight(1);
    line(0, y, width, y);
  }
}
  
function addTexture() {
  for (let i = 0; i < 500; i++) {
    stroke(0, 0, 0, 8);
    strokeWeight(1);
    point(random(width), random(height));
  }
}
    
