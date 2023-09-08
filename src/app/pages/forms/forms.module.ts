import { NgModule } from '@angular/core';
import { IngresoUsuarioComponent } from '@pages/forms/ingreso-usuario/ingreso-usuario.component';
import { SharedModule } from '@shared/shared.module';
import { FormsRoutingModule } from '@pages/forms/forms-routing.module';



@NgModule({
  declarations: [
    IngresoUsuarioComponent
  ],
  imports: [
    FormsRoutingModule,
    SharedModule
  ]
})
export class FormsModule { }
