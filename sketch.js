// Intento de Rick de la serie de Rick and Morty by mykezg
function setup() {
  // setup: funcion de configuración incial se ejecuta una sola vez al principio
  // createCanvas: define las carateristicas del lienzo
  createCanvas(windowWidth, windowHeight); //crear el lienzo
  frameRate(60);
  rectMode(CENTER);
}

function draw() {
  // draw: función central del sketch (escena) y se ejecuta en relacion del framerate

  // Lienzo
  background("#ffffff");

  // Cabello
  // me tomó unos 5 mintuos entender las cordenadas y encima esbribir e ir entendido las coordenadas me voló la mentexddd aproximadamente me tomo 1 hora
  // line(x1, y1, x2, y2, x1, y1, z1, x2, y2, z2); sítaxis del P5 reference
  line(mouseX - 110, mouseY + 145, mouseX - 140, mouseY + 160); // Línea 1
  line(mouseX - 140, mouseY + 120, mouseX - 140, mouseY + 160); // Línea 2
  line(mouseX - 140, mouseY + 120, mouseX - 170, mouseY + 130); // Línea 3
  line(mouseX - 160, mouseY + 95, mouseX - 170, mouseY + 130); // Línea 4
  line(mouseX - 160, mouseY + 95, mouseX - 200, mouseY + 70); // Línea 5
  line(mouseX - 160, mouseY + 30, mouseX - 200, mouseY + 70); // Línea 6
  line(mouseX - 160, mouseY + 30, mouseX - 220, mouseY - 40); // Línea 7
  line(mouseX - 160, mouseY - 60, mouseX - 220, mouseY - 40); // Línea 8
  line(mouseX - 160, mouseY - 60, mouseX - 220, mouseY - 190); // Línea 9
  line(mouseX - 110, mouseY - 180, mouseX - 220, mouseY - 190); // Línea 10
  line(mouseX - 110, mouseY - 180, mouseX - 120, mouseY - 360); // Línea 11
  line(mouseX - 20, mouseY - 220, mouseX - 120, mouseY - 360); // Línea 12
  line(mouseX - 20, mouseY - 220, mouseX + 40, mouseY - 380); // Línea 13
  line(mouseX + 40, mouseY - 380, mouseX + 90, mouseY - 190); // Línea 14
  line(mouseX + 230, mouseY - 230, mouseX + 90, mouseY - 190); // Línea 15
  line(mouseX + 230, mouseY - 230, mouseX + 170, mouseY - 90); // Línea 16
  line(mouseX + 260, mouseY - 50, mouseX + 170, mouseY - 90); // Línea 17
  line(mouseX + 260, mouseY - 50, mouseX + 180, mouseY); // Línea 18
  line(mouseX + 180, mouseY, mouseX + 240, mouseY + 40); // Línea 19
  line(mouseX + 170, mouseY + 60, mouseX + 240, mouseY + 40); // Línea 20
  line(mouseX + 170, mouseY + 60, mouseX + 200, mouseY + 120); // Línea 21
  line(mouseX + 140, mouseY + 130, mouseX + 200, mouseY + 120); // Línea 22
  line(mouseX + 140, mouseY + 130, mouseX + 150, mouseY + 170); // Línea 23
  line(mouseX + 100, mouseY + 160, mouseX + 150, mouseY + 170); // Línea 24

  // Orejas
  arc(mouseX + 123, mouseY + 70, 50, 50, -1.5, 1.5); // Oreja Derecha
  arc(mouseX - 127, mouseY + 70, 50, 50, 1.5, -1.5); // Oreja Izquierda

  // Rostro
  noFill();
  rect(mouseX, mouseY + 10, 250, 400, 170); // Cara
  arc(mouseX, mouseY - 130, 300, 50, 0.4, 2.8); // Linea de expresión 1
  arc(mouseX, mouseY - 150, 300, 50, 0.5, 2.7); // Linea de expresión 2
  rect(mouseX, mouseY - 80, 200, 20, 20); // Ceja

  // Ojo Izquierdo xd
  fill(0, 0, 0); // Color de la pupila
  circle(mouseX - 60, mouseY - 16, 20); // Pupila
  // tarso o parpado nose como llamarle
  noFill();
  arc(mouseX - 60, mouseY, 100, 50, 3.1, 0);

  // Ojo Derecho xd
  fill("#000000");
  circle(mouseX + 60, mouseY - 16, 20);

  // Ojo exterior xddd
  strokeWeight(3);
  fill(255, 255, 255, 0);

  // Ojo alrededor
  // arc(x, y, w, h, start, stop, [mode|], [detail]); sítaxis del P5 reference
  // lo logre xddd estuvo dificil entender esto profe como hacer un ojo aunque en el reference dice radianes puse numeros enteros
  arc(mouseX - 60, mouseY, 100, 100, -1, 4.1);

  noFill();
  arc(mouseX - 60, mouseY + 40, 100, 50, 0.6, 2.7);
  arc(mouseX + 65, mouseY + 40, 100, 50, 0.4, 2.6);

  arc(mouseX + 60, mouseY, 100, 100, -0.1, (3.1).OPEN);

  // Ojo alrededor
  // fill(255, 255, 255);
  arc(mouseX + 60, mouseY, 100, 100, -1, 4.1);
  // tarso o parpado nose como llamarle

  // fill(255, 255, 255);
  arc(mouseX + 60, mouseY, 100, 50, 3.1, 0);

  fill(0, 0, 0);
  // Ojo exterior xddd
  strokeWeight(3);
  fill(255, 255, 255, 0);

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
  arc(mouseX - 25, mouseY + 190, 100, 100, -2, -1.2); //mueca
  line(mouseX - 9, mouseY + 143, mouseX + 40, mouseY + 156); //labio
  arc(mouseX - 15, mouseY + 150, 100, 50, 2.9, -2.9); //marca izquierda
  arc(mouseX + 10, mouseY + 150, 100, 50, -0.25, 0.3); //marca derecha
}
