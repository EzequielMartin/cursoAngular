import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, mostrar: boolean): string {

    if ( mostrar === true ){
      return value;
    }else{
      return '*'.repeat(value.length);
    }
  }
}
