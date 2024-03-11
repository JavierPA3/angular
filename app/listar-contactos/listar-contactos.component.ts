// listar-contactos.component.ts
import { Component, OnInit } from '@angular/core';
import { ContactosService } from '../contactos.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router'; // Añadir la importación de Router


@Component({
  selector: 'app-listar-contactos',
  templateUrl: './listar-contactos.component.html',
  styleUrls: ['./listar-contactos.component.css']
})
export class ListarContactosComponent implements OnInit {
  contactos: any;
  contactosFiltrados: any[] | undefined;
  nombreABuscar: string = '';


  constructor(
    private contactosService: ContactosService,
    private http: HttpClient,
    private router: Router // Inyectar el servicio Router
  ) {}

  ngOnInit(): void {
    this.getContactos();
  }

  getContactos(): void {
    this.contactosService.getContactos().subscribe(
      (result: any[]) => {
        this.contactos = result;
        this.contactosFiltrados = this.contactos;
        console.log(this.contactos);
      }
    );
  }
  
  eliminarContacto(contactoId: number): void {
    const confirmation = window.confirm('¿Seguro que deseas eliminar este contacto?');
  
    if (confirmation) {
      console.log('Eliminando contacto', contactoId);
  
      this.contactosService.eliminarContacto(contactoId).subscribe(
        () => {
          console.log('Contacto eliminado con éxito');
          this.getContactos();
        },
        (error: any) => {
          console.error('Error al eliminar contacto', error);
        }
      );
    } else {
      console.log('Eliminación cancelada por el usuario');
    }
  }

  editarContacto(contactoId: number): void {
    console.log("EditarContacto");
    
    this.router.navigate(['/editar', contactoId]);
  }
  buscarPorNombre(): void {
    if (this.nombreABuscar.trim() !== '') {
      this.contactosFiltrados = this.contactos.filter((contacto: any) =>
        this.esNombreSimilar(contacto.name.toLowerCase(), this.nombreABuscar.toLowerCase())
      );
    } else {
      this.contactosFiltrados = this.contactos;
    }
  }

  esNombreSimilar(nombre: string, busqueda: string): boolean {
    return nombre.includes(busqueda);
  }
  
}  