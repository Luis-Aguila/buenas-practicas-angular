import { Component, WritableSignal, effect } from '@angular/core';
import { sumaSignal } from '@signals/signal.store';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.scss']
})
export class PadreComponent {

  // Variables utilizadas para los Output e Input
  numeroUno: number = 0;
  numeroDos: number = 0;
  suma: number = 0;
  edad: number = 0;

  // Variables utilizadas para signal
  numeroUnoS: number = 0;
  numeroDosS: number = 0;

  constructor(){
    effect(() => {
      if(sumaSignal() == 0){
        this.numeroUnoS = 0;
        this.numeroDosS = 0;
      }
      console.log('el signal a cambiado!');
    });
  }

  realizarSuma(): void{
    this.suma = this.numeroUno + this.numeroDos;
  }

  get signalSuma(): WritableSignal<number>{
    return sumaSignal;
  }

  realizarSumaSignal(){
    const suma = this.numeroUnoS + this.numeroDosS;
    sumaSignal.set(suma);
  }


}
