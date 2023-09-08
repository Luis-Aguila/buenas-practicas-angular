import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFormComponent } from '@pages/services/data-form/data-form.component';



const routes: Routes = [
  {
    path: "data",
    component: DataFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ServicesRoutingModule { }
