import { Component } from '@angular/core';
import { CreateContactos } from '../create-contactos.service';

@Component({
  selector: 'app-create-contactos',
  templateUrl: './create-contactos.component.html',
  styleUrls: ['./create-contactos.component.css']
})
export class CreateContactosComponent {
  contactoData: any = {};

  constructor(private contacto: CreateContactos) {}

  onSubmit() {
    this.contacto.crearContacto(this.contactoData).subscribe(
      response => {
        console.log('Contacto creado con éxito:', response);
        window.location.reload();
      },
      error => {
        console.error('Error al crear el contacto:', error);
      }
    );
  }
  
}