function setup() {
  createCanvas(400, 400); // Crea un lienzo de 400x400 píxeles
  background(255);        // Fondo blanco

  // Lado superior: morado, grosor 7
  stroke(198, 55, 230);      // Color morado
  strokeWeight(7);        // Grosor de línea 7
  line(100, 100, 300, 100);

  // Lado derecho: verde fosforito semitransparente, grosor 3
  stroke(68, 255, 31, 120); // Verde fosforito con transparencia
  strokeWeight(3);        // Grosor de línea 3
  line(300, 100, 300, 300);

  // Lado inferior:rojo, grosor 13
  stroke(242, 64, 44);      // Azul
  strokeWeight(13);        // Grosor de línea 13
  line(300, 300, 100, 300);

  // Lado izquierdo: azul, grosor 20
  stroke(35, 128, 251,50);            // azul semitransparente
  strokeWeight(20);        // Grosor de línea 20
  line(100, 300, 100, 100);
}
