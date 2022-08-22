import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Sistema } from '../models/sistema.interface';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class SistemaService {

  constructor(private http: HttpClient) { }

  listarSistemasPorNroTabla(nroTabla: string): Observable<Sistema> {
    return this.http.get<Sistema>(`${baseUrl}/Sistema/GetSistemasPorNroTabla/${nroTabla}`)
      .pipe(tap(resp => {
        resp;
      }));
  }
}
