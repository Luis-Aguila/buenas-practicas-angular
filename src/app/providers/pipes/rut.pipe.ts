import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rut'
})
export class RutPipe implements PipeTransform {

  

  transform(rut: string): string {
    const rutRetorno: string = this.darFormatoARut(rut);
    return rutRetorno;
  }

  darFormatoARut(rut:String){
    // dejar solo números y letras 'k'
   const rutLimpio = rut.replace(/[^0-9kK]/g, '');
   // asilar el cuerpo del dígito verificador
   const cuerpo = rutLimpio.slice(0, -1);
   const dv = rutLimpio.slice(-1).toUpperCase();

   if (rutLimpio.length < 2) return rutLimpio;

   // colocar los separadores de miles al cuerpo
   let cuerpoFormatoMiles = cuerpo
     .toString()
     .split('')
     .reverse()
     .join('')
     .replace(/(?=\d*.?)(\d{3})/g, '$1.');

   cuerpoFormatoMiles = cuerpoFormatoMiles
     .split('')
     .reverse()
     .join('')
     .replace(/^[.]/, '');

   return cuerpoFormatoMiles + '-' + dv;
 }

}
