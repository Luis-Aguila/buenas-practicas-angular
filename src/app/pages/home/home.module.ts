import { NgModule } from '@angular/core';
import { HomeComponent } from '@pages/home/home/home.component';
import { HomeRoutingModule } from '@pages/home/home-routing.module';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    HomeRoutingModule,
    SharedModule
  ]
})
export class HomeModule { }
