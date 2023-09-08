// Angular
import { NgModule } from '@angular/core';
import { AngularModule } from "@shared/modules/angular.module";
import { PrimengModule } from "@shared/modules/primeng.module";
import { ExternosModule } from "@shared/modules/externos.module";

// pipe, componentes Compartidos
import { RutPipe } from '@pipes/rut.pipe'



@NgModule({
  declarations: [
    RutPipe
  ],
  imports: [
    AngularModule,
    PrimengModule,
    ExternosModule
  ],
  exports: [
    AngularModule,
    PrimengModule,
    ExternosModule,
    RutPipe
  ]
})
export class SharedModule { }
