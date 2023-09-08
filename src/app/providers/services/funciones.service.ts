import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FuncionesService {

  constructor() { }


  validarRut(rut: string): boolean {
    rut = rut.replace(/\./g, '');
    rut = rut.replace(/\-/g, '');
    let rutAux = rut.substring(0, rut.length - 1);
    let dv = rut.substring(rut.length - 1, rut.length);
    let suma = 0;
    let multiplo = 2;
    for (let i = rutAux.length - 1; i >= 0; i--) {
        suma = suma + (parseInt(rutAux.charAt(i)) * multiplo);
        if (multiplo == 7) {
            multiplo = 2;
        } else {
            multiplo++;
        }
    }
    let dvEsperado: any = 11 - (suma % 11);
    if (dvEsperado == 11) {
        dvEsperado = 0;
    } else if (dvEsperado == 10) {
        dvEsperado = 'K';
    }
    if (dvEsperado == dv.toUpperCase()) {
        return true;
    } else {
        return false;
    }
  }
}
