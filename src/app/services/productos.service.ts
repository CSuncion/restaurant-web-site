import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Producto } from '../models/producto.interface';

const baseUrl = environment.base_url;

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  listarProductos(): Observable<Producto> {
    return this.http.get<Producto>(`${baseUrl}/Producto/GetProductos`)
      .pipe(tap(resp => {
        resp;
      }));
  }
}
