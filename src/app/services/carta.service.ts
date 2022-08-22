import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Carta } from '../models/carta.interface';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CartaService {

  constructor(private http: HttpClient) { }

  listarCarta(codCategoriaCarta: number, codGrupoCarta: number): Observable<Carta> {
    return this.http.get<Carta>(`${baseUrl}/Carta/GetCarta/${codCategoriaCarta}/${codGrupoCarta}`)
      .pipe(tap(resp => {
        resp;
      }));
  }
}
