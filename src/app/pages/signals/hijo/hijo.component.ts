import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.scss']
})
export class HijoComponent {

  @Input() sumaInput: number = 0;
  @Output() sumaOutput: EventEmitter<number> = new EventEmitter();

  multiplicarPor: number = 0;
  producto: number = 0;

  @Input() edadHijoInput: number = 0;
  @Output() edadHijoOutput: EventEmitter<number> = new EventEmitter();
  

  constructor(){}

  realizarMultiplicacion(){
    this.producto = this.sumaInput * this.multiplicarPor;
  }

  actualizarValorPadre(){
    if(this.sumaInput > 0){
      this.sumaOutput.emit(this.sumaInput);
    }
  }

  eventoOutputNietoEdad(edad: number){
    this.edadHijoInput = edad;
    this.edadHijoOutput.emit(this.edadHijoInput);
  }

}
