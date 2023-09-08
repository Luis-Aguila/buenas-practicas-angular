import { NgModule } from '@angular/core';
import { PadreComponent } from './padre/padre.component';
import { SignalsRoutingModule } from '@pages/signals/signals-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HijoComponent } from './hijo/hijo.component';
import { NietoComponent } from './nieto/nieto.component';
import { HijoSignalComponent } from './hijo-signal/hijo-signal.component';
import { NietoSignalComponent } from './nieto-signal/nieto-signal.component';



@NgModule({
  declarations: [
    PadreComponent,
    HijoComponent,
    NietoComponent,
    HijoSignalComponent,
    NietoSignalComponent
  ],
  imports: [
    SignalsRoutingModule,
    SharedModule
  ]
})
export class SignalsModule { }
