import { NgModule } from '@angular/core';
import { TopbarComponent } from '@pages/layout/topbar/topbar.component';
import { LayoutComponent } from '@pages/layout/layout/layout.component';
import { FooterComponent } from '@pages/layout/footer/footer.component';
import { SidebarComponent } from '@pages/layout/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MenuComponent } from './menu/menu.component';
import { ItemComponent } from './item/item.component';
import { ConfigModule } from './config/config.module';



@NgModule({
  declarations: [
    TopbarComponent,
    LayoutComponent,
    FooterComponent,
    SidebarComponent,
    MenuComponent,
    ItemComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    ConfigModule
  ]
})
export class LayoutModule { }
