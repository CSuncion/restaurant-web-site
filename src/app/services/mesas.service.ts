import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Mesa } from '../models/mesa.interface';


const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})

export class MesasService {

  constructor(private http: HttpClient) { }

  listarMesas(): Observable<Mesa> {
    return this.http.get<Mesa>(`${baseUrl}/Mesa/GetMesas`)
      .pipe(tap(resp => {
        resp;
      }));
  }
  listarMesasPorTipo(tipo: string): Observable<Mesa> {
    return this.http.get<Mesa>(`${baseUrl}/Mesa/GetMesasPorTipo/${tipo}`)
      .pipe(tap(resp => {
        resp;
      }));
  }
}
