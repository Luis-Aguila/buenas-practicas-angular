import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngresoUsuarioComponent } from '@pages/forms/ingreso-usuario/ingreso-usuario.component';

const routes: Routes = [
  {
    path: "ingreso",
    component: IngresoUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class FormsRoutingModule { }
