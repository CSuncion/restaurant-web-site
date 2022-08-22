import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { CategoriaCarta } from '../models/categoriacarta.interface';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class CategoriaCartaService {

  constructor(private http: HttpClient) { }

  listarCategoriaCarta(codSuperCategoriaCarta: number): Observable<CategoriaCarta> {
    return this.http.get<CategoriaCarta>(`${baseUrl}/CategoriaCarta/GetCategoriaCarta/${codSuperCategoriaCarta}`)
      .pipe(tap(resp => {
        resp;
      }));
  }
}
