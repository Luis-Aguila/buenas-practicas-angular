import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataPruebaService } from '@services/data-prueba.service';
import { DataResultInterface } from '@interfaces/services/pokemon.interface';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.scss']
})
export class DataFormComponent implements OnInit, OnDestroy {

  public dataResult: DataResultInterface;

  private ngUnsubscribe$ = new Subject();

  constructor(private ds: DataPruebaService){
    this.dataResult = {
      count: 0,
      next: null,
      previous: null,
      results: []
    }
  }

  //#region Ciclo vida Component

  ngOnInit(): void {
    this.getDataCategorias();
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe$.next(void 0);
    this.ngUnsubscribe$.complete();
  }

  //#endregion

  getDataCategorias(): void{
    this.ds.cargaDataUno()
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe( (data)=>{
        this.dataResult = data;
      });
  }

  verInfoPokemon(pokemon: string): void{
    this.ds.cargaPokemon(pokemon)
      .pipe(takeUntil(this.ngUnsubscribe$))
      .subscribe( (data)=>{
        console.log('data: ', data);
        
      });
    
  }
  

}
