import { Component, OnInit } from '@angular/core';
import { LayoutService } from '@services/layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  model: any[] = [];

  constructor(public layoutService: LayoutService) { }

  ngOnInit() {
    this.model = [
      {
        label: 'Home',
        items: [
          { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: [''] }
        ]
      },
      {
        label: 'Buenas prácticas',
        items: [
          { label: 'Formularios', icon: 'pi pi-fw pi-id-card', routerLink: ['/forms/ingreso'] },
          { label: 'Servicios', icon: 'pi pi-fw pi-check-square', routerLink: ['/services/data'] },
          { label: 'Signals', icon: 'pi pi-fw pi-bookmark', routerLink: ['/signals/padre'] }
        ]
      }
    ];
  }


}
