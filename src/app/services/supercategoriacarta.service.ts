import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { SuperCategoriaCarta } from '../models/supercategoriacarta.interface';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class SuperCategoriaCartaService {

  constructor(private http: HttpClient) { }

  listarSuperCategoriaCarta(): Observable<SuperCategoriaCarta> {
    return this.http.get<SuperCategoriaCarta>(`${baseUrl}/SuperCategoriaCarta/GetSuperCategoriaCarta`)
      .pipe(tap(resp => {
        resp;
      }));
  }
}
