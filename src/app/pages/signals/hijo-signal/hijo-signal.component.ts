import { Component, WritableSignal } from '@angular/core';
import { sumaSignal } from '@signals/signal.store';

@Component({
  selector: 'app-hijo-signal',
  templateUrl: './hijo-signal.component.html',
  styleUrls: ['./hijo-signal.component.scss']
})
export class HijoSignalComponent {

  multiplicarPor: number = 0;
  producto: number = 0;


  constructor(){}

  realizarMultiplicacion(){
    this.producto = 3 * this.multiplicarPor;
  }


  get signalSuma(): WritableSignal<number>{
    return sumaSignal;
  }

}
