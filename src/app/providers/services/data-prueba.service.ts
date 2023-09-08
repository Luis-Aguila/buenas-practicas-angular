import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { DataResultInterface } from '@interfaces/services/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class DataPruebaService {
  private readonly apiUrlUno: string = "https://pokeapi.co/api/v2/pokemon";

  constructor(private http: HttpClient) { }


  cargaDataUno(): Observable<any>{
    return this.http.get(this.apiUrlUno+'?limit=100000&offset=0');
  }


  cargaPokemon(pokenon: string): Observable<any>{
    return this.http.get(this.apiUrlUno+'/'+pokenon);
  }
}
