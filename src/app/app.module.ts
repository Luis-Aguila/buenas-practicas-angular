import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { LayoutModule } from '@pages/layout/layout.module';
import { SharedModule } from '@shared/shared.module';
import { LoginComponent } from '@pages/auth/login/login.component';
import { NotFoundComponent } from '@pages/auth/not-found/not-found.component';


import { ConfirmationService, MessageService } from 'primeng/api';
import { TerminalModule } from 'primeng/terminal';
import { HighlightService } from '@services/highlight.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LayoutModule,
    SharedModule
  ],
  providers: [
    MessageService,
    ConfirmationService,
    TerminalModule,
    HighlightService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
