import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EditarContactosService {
  private apiUrl = 'http://contactosmvc.local/contactos';

  constructor(private http: HttpClient) { }

  getContacto(contactoId: number): Observable<any> {
    console.log("TONTOPOLLas get contacto");
    
    const url = `${this.apiUrl}/${contactoId}`;
    console.log(url);
    
    return this.http.get(url);
  }

  actualizarContacto(contactoActualizado: any): Observable<any> {
    const url = `${this.apiUrl}/${contactoActualizado.id}`;
    return this.http.put(url, contactoActualizado);
    
  }
}
