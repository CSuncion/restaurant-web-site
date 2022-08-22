import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GrupoCarta } from '../models/grupocarta.interface';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class GrupoCartaService {

  constructor(private http: HttpClient) { }

  listarGrupoCarta(codCategoriaCarta: number): Observable<GrupoCarta> {
    return this.http.get<GrupoCarta>(`${baseUrl}/GrupoCarta/GetGrupoCarta/${codCategoriaCarta}`)
      .pipe(tap(resp => {
        resp;
      }));
  }
}
