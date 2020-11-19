import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class InfoPaginaService {

  usuario: any[] = [];

  constructor( private http: HttpClient) {
    this.cargarInfo();
  }

  private cargarInfo(){
    this.http.get('https://angular-conexion-ef135.firebaseio.com/usuario.json')
    .subscribe((resp: any[]) => {

      this.usuario = resp;
      console.log(resp);
    });
  }
}
