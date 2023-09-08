import { Component, ElementRef, Renderer2, ViewChild , OnInit, AfterViewInit } from '@angular/core';
import { FuncionesService } from '@services/funciones.service';
import { HighlightService } from '@services/highlight.service';
import { MenuItem, MessageService  } from 'primeng/api';
import { TerminalService } from 'primeng/terminal';
import { Subscription, interval  } from 'rxjs';


export interface colorInterface {
  id: number,
  name: string,
  paletaColor: string[]
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit  {

  public readonly saludoBienvenida: string  = "Luis Aguila";
  public rutUser: string = "17034147-3";

  public formApi: colorInterface;


  menubarItems: any[] | undefined;
  dockItems: MenuItem[] | undefined;
  displayFinder: boolean = false;
  displayTerminal: boolean = false;
  displayGalleria: boolean = false;
  nodes: any[] | undefined;
  images: any[] = [];
  responsiveOptions: any[] | undefined;
  subscription: Subscription | undefined;

  horaLocal: Date = new Date();
  itemMenuVisible: number = 0;

  constructor(public fs: FuncionesService, 
              private messageService: MessageService, 
              private hs: HighlightService){
    this.formApi = {
      id: 1,
      name: 'la ultima cena',
      paletaColor: ['red', 'yellow', 'black', 'blue', 'orange', 'green']
    }
  }

  ngOnInit(): void {
    interval(1000).subscribe(() => {
      this.horaLocal = new Date();
    });
    this.menubarItems = [
      {
          label: 'SEIS',
          styleClass: 'menubar-root',
          command: () => {
            this.visualizarSeccion(0);
          }
      },
      {
          label: 'Angular',
          items: [
              {
                  label: 'Definición',
                  icon: 'pi pi-fw pi-trash',
                  command: () => {
                    this.visualizarSeccion(1);
                  }
              },
              {
                  label: 'Ciclo de vida',
                  icon: 'pi pi-fw pi-external-link',
                  command: () => {
                    this.visualizarSeccion(2);
                  }
              },
              {
                label: 'Directivas',
                icon: 'pi pi-fw pi-external-link',
                command: () => {
                  this.visualizarSeccion(3);
                }
              },
              {
                label: 'Decoradores',
                icon: 'pi pi-fw pi-external-link',
                command: () => {
                  this.visualizarSeccion(4);
                }
              },
              {
                label: 'Archivos Principales',
                icon: 'pi pi-fw pi-external-link',
                command: () => {
                  this.visualizarSeccion(5);
                }
              },
              {
                label: 'ng generate',
                icon: 'pi pi-fw pi-align-left',
                command: () => {
                  this.visualizarSeccion(6);
                }
              }
          ]
      },
      {
          label: 'Buenas Prácticas',
          items: [
              {
                  label: 'Estructuras de carpetas',
                  icon: 'pi pi-fw pi-user-plus',
                  command: () => {
                    this.visualizarSeccion(7);
                  }
              },
              {
                  label: 'Funciones y Variables',
                  icon: 'pi pi-fw pi-user-minus',
                  command: () => {
                    this.visualizarSeccion(8);
                  }
              },
              {
                  label: 'Configuración de Rutas',
                  icon: 'pi pi-fw pi-user-minus',
                  command: () => {
                    this.visualizarSeccion(9);
                  }
              },
              {
                  label: 'Refactorización',
                  icon: 'pi pi-fw pi-user-minus',
                  command: () => {
                    this.visualizarSeccion(10);
                  }
              }
          ]
      },
      {
          label: 'Formularios',
          items: [
            {
              label: 'Template Forms vs Reactive Forms',
              icon: 'pi pi-fw pi-pencil',
              command: () => {
                this.visualizarSeccion(11);
              }
          },
              {
                  label: 'Template Forms',
                  icon: 'pi pi-fw pi-pencil',
                  command: () => {
                    this.visualizarSeccion(12);
                  }
              },
              {
                  label: 'Reactive Forms',
                  icon: 'pi pi-fw pi-calendar-times',
                  command: () => {
                    this.visualizarSeccion(13);
                  }
              }
          ]
      },
      {
        label: 'Comunicación',
        items: [
            {
                label: '@Input y @Output',
                icon: 'pi pi-fw pi-pencil',
                command: () => {
                  this.visualizarSeccion(14);
                }
            },
            {
                label: 'Signals',
                icon: 'pi pi-fw pi-calendar-times',
                command: () => {
                  this.visualizarSeccion(15);
                }
            }
        ]
      },
      {
          label: 'Quit',
          command: () => {
            this.visualizarSeccion(0);
          }
      }
    ];
    
  }

  ngAfterViewInit(): void {
    this.hs.highlightAll();
  }

  visualizarSeccion(item: number){
    // this.hs.highlightAll();
    this.itemMenuVisible = item;
  }

}