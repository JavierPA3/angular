import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EditarContactosService } from '../editar-contactos.service';
import { Router } from '@angular/router'; // Añadir la importación de Router


@Component({
  selector: 'app-editar-contactos',
  templateUrl: './editar-contactos.component.html',
  styleUrls: ['./editar-contactos.component.css']
})
export class EditarContactosComponent implements OnInit {
  contactoId!: number;  // <-- inicialización con "!"
  nombre: string = '';
  telefono: string = '';
  email: string = '';

  constructor(
    private route: ActivatedRoute,
    private editarContactosService: EditarContactosService,
    private router: Router // Inyectar el servicio Router

  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.contactoId = +params['id']; // <-- inicialización en ngOnInit

      this.editarContactosService.getContacto(this.contactoId).subscribe(
        (contacto: any) => {
          this.nombre = contacto.nombre;
          this.telefono = contacto.telefono;
          this.email = contacto.email;
        },
        error => {
          console.error('Error al obtener detalles del contacto', error);
        }
      );
    });
  }
  guardarCambios(): void {
    // Crear un objeto con los datos actualizados del contacto
    const contactoActualizado = {
      id: this.contactoId,
      nombre: this.nombre,
      telefono: this.telefono,
      email: this.email
    };
    console.log("Contacto guardarCambios");
    
    // Llamar al servicio para realizar la actualización (PUT) del contacto
    this.editarContactosService.actualizarContacto(contactoActualizado).subscribe(
      () => {
        
        console.log('Contacto actualizado con éxito');
      },
      error => {
        console.error('Error al actualizar el contacto', error);
      }
    );
  }
}
