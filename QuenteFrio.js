let x, y;
let encontrado = false;

function setup() {
  createCanvas(400, 400);
  x = int(random(width));
  y = int(random(height));
  textAlign(CENTER, CENTER);
  textSize(24);
  noCursor();
}

function draw() {
  background("#FFF3E0");

  // Círculo que aumenta com a proximidade
  let d = dist(mouseX, mouseY, x, y);
  noStroke();
  fill(255, 140, 0, 100); // laranja com transparência
  circle(mouseX, mouseY, d * 2);

  // Se encontrou o ponto
  if (d < 5 && !encontrado) {
    encontrado = true;
    noLoop();
    drawFoundMessage();
  }

  // Pontinho fixo aparece como recompensa depois de encontrar
  if (encontrado) {
    fill("#4CAF50");
    noStroke();
    circle(x, y, 10);
  }
}

function drawFoundMessage() {
  fill(60, 60, 60, 200);
  rectMode(CENTER);
  rect(width / 2, height / 2, 220, 60, 12);
  fill(255);
  text("🎉 Encontrei!", width / 2, height / 2);
}
