import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-nieto',
  templateUrl: './nieto.component.html',
  styleUrls: ['./nieto.component.scss']
})
export class NietoComponent {

  @Input() productoInput: number = 0;
  @Output() productoOutput: EventEmitter<number> = new EventEmitter();
  

  dividirPor: number = 0;
  cociente: number = 0;

  @Input() edadNietoInput: number = 0;
  @Output() edadNietoOutput: EventEmitter<number> = new EventEmitter();

  constructor(){}

  realizarDivision(){
    this.cociente = this.productoInput / this.dividirPor;
  }

  actualizarValorHijo(){
    if(this.productoInput > 0){
      this.productoOutput.emit(this.productoInput);
    }
  }

  actualizarValorEdad(){
    if(this.edadNietoInput > 0){
      this.edadNietoOutput.emit(this.edadNietoInput);
    }
  }

}
