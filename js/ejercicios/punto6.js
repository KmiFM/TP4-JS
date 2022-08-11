// 6- Crear una clase Libro que contenga al menos las siguientes propiedades:
// ISBN
// Título
// Autor
// Número de páginas

// Crear sus respectivos métodos get y set correspondientes para cada propiedad. Crear el método mostrarLibro() para mostrar la información relativa al libro con el siguiente formato:

// “El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”

// Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
// Por último, indicar cuál de los 2 objetos “libros” tiene más páginas.
class Libro {
  constructor(titulo, isbn, autor, ndepag) {
    this.titulo = titulo;
    this.isbn = isbn;
    this.autor = autor;
    this.ndepag = ndepag; //numero de paginas
  }
  mostrarDatos() {
    document.write(
      `<br>El libro ${this.titulo} con ISBN ${this.isbn} creado por el autor ${this.autor} tiene páginas ${this.ndepag}`
    );
  }

  set modificarTitulo(nuevoTitulo) {
    this.titulo = nuevoTitulo;
  }
  get mostrarTitulo() {
    return this.titulo;
  }
  set modificarISBN(nuevoisbn) {
    this.isbn = nuevoisbn;
  }
  get mostrarISBN() {
    return this.isbn;
  }
  set modificarAutor(nuevoAutor) {
    this.autor = nuevoAutor;
  }
  get mostrarAutor() {
    return this.autor;
  }
  set modificarNdepag(nuevoNdepag) {
    this.ndepag = nuevoNdepag;
  }
  get mostrarNdepag() {
    return this.ndepag;
  }
}

let It = new Libro("It", '3254', "Stephen King", '1000');
It.mostrarDatos()

let elResplandor = new Libro("El Resplandor", '3254', "Stephen King", '100');
elResplandor.mostrarDatos()

if(It.ndepag > elResplandor.ndepag){
  document.write('<br> El libro It tiene más páginas que El resplandor')
}else{
  document.write('<br> El libro El Resplandor tiene más páginas que IT')
}