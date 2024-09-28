//setup: funcion de configuración incial se ejecuta una sola vez al principio
function setup() {
  createCanvas(windowWidth, windowHeight); //crear el lienzo
  frameRate(60);
  rectMode(CENTER);
}

// draw: función central del sketch (escena) y se ejecuta en relacion del framerate
// intento de rick de la serie de rick and morty by mykezg
function draw() {
  // Lienzo
  background("#86D293");

  // Ojo Izquierdo xd
  fill(0, 0, 0);
  circle(mouseX - 60, mouseY - 16, 20);
  // Ojo exterior xddd
  strokeWeight(3);
  fill(255, 255, 255, 10);
  // arc(x, y, w, h, start, stop, [mode|], [detail]); sítaxis del P5 reference
  // lo logre xddd estuvo dificil entender esto profe como hacer un ojo aunque en el reference dice radianes puse numeros enteros

  // Ojo alrededor
  arc(mouseX - 60, mouseY, 100, 100, -1, 4.1);
  // tarso o parpado nose como llamarle
  arc(mouseX - 60, mouseY, 100, 50, 3.1, 0);

  // Ojo Derecho xd
  // fill("#ffffff");
  arc(mouseX + 60, mouseY, 100, 100, -0.1, (3.1).OPEN);

  // Ojo alrededor
  // fill(255, 255, 255);
  arc(mouseX + 60, mouseY, 100, 100, -1, 4.1);
  // tarso o parpado nose como llamarle

  // fill(255, 255, 255);
  arc(mouseX + 60, mouseY, 100, 50, 3.1, 0);

  fill(0, 0, 0);
  circle(mouseX + 60, mouseY - 16, 20);
  // Ojo exterior xddd
  strokeWeight(3);
  fill(255, 255, 255, 10);

  // arc(x, y, w, h, start, stop, [mode|], [detail]); sítaxis del P5 reference
  // lo logre xddd estuvo dificil entender esto profe como hacer un ojo aunque en el reference dice radianes puse numeros enteros

  // nariz
  // tambien se puede agregar en ves de radianes en angulos y en PI para citar el numero en este caso se aplico el pi para generar el arco perfecto de la U
  arc(mouseX, mouseY + 100, 30, 30, 0, PI, CLOSE);
  // line(x1, y1, x2, y2, x1, y1, z1, x2, y2, z2); sítaxis del P5 reference
  // en este caso debo entender que la linea sigue el movimiento en un punto estatico y trazo con cordenadas las lineas verticales xddd despues de 10 minutos entendi
  // lineas
  line(mouseX - 15, mouseY + 100, mouseX - 15, mouseY + 50);
  line(mouseX + 15, mouseY + 100, mouseX + 15, mouseY + 50);
  // sonrisa
  line(mouseX - 50, mouseY + 150, mouseX + 50, mouseY + 150);
}
