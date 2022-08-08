// 3-Escribe una clase que permita crear distintos objetos “rectángulos”, con las propiedades de alto y ancho, mas los métodos necesarios para modificar y mostrar sus propiedades, calcular el perímetro y el área

class Rectangulo {
    constructor(alto,ancho){
        this.alto=alto;
        this.ancho=ancho;
    }
    //metodos
    set cambiarAlto( alto=0 ) {
        this.alto = alto;
      }
    
      set cambiarAncho ( ancho = 0 ) {
        this.ancho = ancho;
      }
    
      get area() {
        return this.alto * this.ancho;
      }
}
    
    let obj = new Rectangulo();

    obj.cambiarAlto = 10;
    obj.cambiarAncho = 20;
    obj.area;
    
    console.log(obj.area)
