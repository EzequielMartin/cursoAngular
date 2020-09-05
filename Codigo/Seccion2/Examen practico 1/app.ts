(()=>{

  // Uso de Let y Const
  const nombre = 'Ricardo Tapia';
  const edad = 23;

  const PERSONAJE = {
    nombre: nombre,
    edad: edad
  };

  //Tambien se puede hacer const PERSONAJE = { nombre, edad } ya que el nombre y el valor de los campos son iguales

  // Cree una interfaz que sirva para validar el siguiente objeto

  interface Batman{
    nombre: string;
    artesMarciales: string[]
  }
  const batman: Batman = {
    nombre: 'Bruno Díaz',
    artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
  }

  // Convertir esta funcion a una funcion de flecha
  // function resultadoDoble( a, b ){
  //   return (a + b) * 2
  // }

  const resultadoDoble = ( a, b ) => ( a + b ) * 2;

  // Función con parametros obligatorios, opcionales y por defecto
  // donde NOMBRE = obligatorio
  //       PODER  = opcional
  //       ARMA   = por defecto = 'arco'
  function getAvenger( nombre: string, poder?: string, arma: string = 'arco' ){
    let mensaje;
    if( poder ){
      mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    }else{
      mensaje = nombre + ' tiene un ' + poder
    }
  };

  // Cree una clase que permita manejar la siguiente estructura
  // La clase se debe de llamar rectangulo,
  // debe de tener dos propiedades:
  //   * base
  //   * altura
  // También un método que calcule el área  =  base * altura,
  // ese método debe de retornar un numero.

  class Rectangulo{
    constructor( public base: number,
                 public altura: number ){}

    calcularArea = ():number => this.base * this.altura   
  }

  const rec = new Rectangulo(2,3);
  console.log(rec.calcularArea);

})();