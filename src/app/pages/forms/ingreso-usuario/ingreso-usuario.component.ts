import { Component } from '@angular/core';
import { UsuarioNgInterface, 
        UsuarioReactivoInterface, 
        UsuarioReactivoFormInterface } from '@interfaces/forms/usuariong.interface';
import { FormBuilder, Validators, FormControl } from '@angular/forms';
import { FuncionesService } from '@services/funciones.service';



@Component({
  selector: 'app-ingreso-usuario',
  templateUrl: './ingreso-usuario.component.html',
  styleUrls: ['./ingreso-usuario.component.scss']
})
export class IngresoUsuarioComponent {

  usuariotemp: UsuarioNgInterface = {nombre:"",apellido:""};
  usuarioReactivo: UsuarioReactivoInterface;

  usuarioReactivoForm = this.fb.group({
    nombre: [<string>'', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    apellido: [<string>'', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
    direccion: [<string>'', [Validators.maxLength(20)]],
    edad: <number>0,
    poseefecha: <boolean>false,
    fechainicio: [<string>'', [Validators.required]],
    fechafin: [<string>'', [Validators.required]]
  });

  rutUser: string = "17034147-3";

  constructor(private fb: FormBuilder, public fs: FuncionesService){
    this.usuarioReactivo = {
      nombre:"",
      apellido:"",
      direccion:"",
      edad: 0
    };
  }


  verFormTemp(){
    console.log('usuarioNg: ', this.usuariotemp);
  }

  verUsuarioReactivo(){
    console.log('usuarioReactivo: ', this.usuarioReactivo);
  }

  verUsuarioReactivoBuil(data: any){
    const miData: UsuarioReactivoFormInterface = data;
    console.log('usuarioReactivoForm: ', this.usuarioReactivoForm);
    console.log('status: ', this.usuarioReactivoForm.status);
    console.log('errors: ', this.usuarioReactivoForm.errors);
    console.log('data: ', data);
  }

}
