// La función setup() se ejecuta UNA sola vez al iniciar el programa
function setup() {
  createCanvas(400, 400);
  
}


// La función draw() se ejecuta MUCHAS veces por segundo (bucle automático)
function draw() {
  background(255);        // pinta el fondo blanco en cada frame
  // aquí irán las órdenes para dibujar tus figuras
  background(220);       // gris claro
  line(50, 50, 350, 50); // línea horizontal
  ellipse(200, 200, 100, 100); // círculo en el centro
  console("hola");
}
