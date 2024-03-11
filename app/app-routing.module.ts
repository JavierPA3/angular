import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarContactosComponent } from './editar-contactos/editar-contactos.component'; // Import the missing component
import { ListarContactosComponent } from './listar-contactos/listar-contactos.component';

const routes: Routes = [
  { path: 'editar/:id', component: EditarContactosComponent },
  { path: 'http://localhost:4200/', component: ListarContactosComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
