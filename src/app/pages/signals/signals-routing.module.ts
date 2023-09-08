import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PadreComponent } from '@pages/signals/padre/padre.component';


const routes: Routes = [
  {
    path: "padre",
    component: PadreComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SignalsRoutingModule { }
