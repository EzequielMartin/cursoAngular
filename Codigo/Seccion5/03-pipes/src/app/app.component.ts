import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'pipes';
  nombre = 'Ezequiel Martín';
  nombre2 = 'ezEQuIeL MarTIN';
  arreglo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  PI: number = Math.PI;
  porcentaje = 0.234;
  salario = 1234.5;
  heroe = {
    nombre: 'Logan',
    clave: 'Wolverine',
    edad: 500,
    direccion: {
      calle: 'Primera',
      casa: 20
    },
  };
  valorPromesa = new Promise<string>( (resolve) => {
    setTimeout(() => {
    resolve('Llego la data');
    }, 4500);
  });
  fecha: Date = new Date();
  idioma = 'es';
  videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ';
  password = 'contraseña';
  mostrar = true;
}
