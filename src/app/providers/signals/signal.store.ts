import { signal, WritableSignal } from '@angular/core';

//Señales grabables
const sumaSignal: WritableSignal<number> = signal<number>(0);
const edadSignal = signal<number>(0);

export {
  sumaSignal
}