import { NgModule } from '@angular/core';
import { DataFormComponent } from '@pages/services/data-form/data-form.component';
import { SharedModule } from '@shared/shared.module';
import { ServicesRoutingModule } from '@pages/services/services-routing.module';



@NgModule({
  declarations: [
    DataFormComponent
  ],
  imports: [
    ServicesRoutingModule,
    SharedModule
  ]
})
export class ServicesModule { }
