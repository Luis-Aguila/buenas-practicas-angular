import { Component, WritableSignal } from '@angular/core';
import { sumaSignal } from '@signals/signal.store';

@Component({
  selector: 'app-nieto-signal',
  templateUrl: './nieto-signal.component.html',
  styleUrls: ['./nieto-signal.component.scss']
})
export class NietoSignalComponent {

  nuevoValorSuma: number = 0;





  get signalSuma(): WritableSignal<number>{
    return sumaSignal;
  }

  asignarNuevoValorSignal(){
    // sumaSignal.set(this.nuevoValorSuma);
    /* sumaSignal.mutate(value => {
      value = this.nuevoValorSuma;
    }); */
    sumaSignal.update(() => this.nuevoValorSuma);

  }


  inicializarNuevoValorSignal(){
    sumaSignal.set(0);
  }

}
