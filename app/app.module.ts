import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpErrorHandler } from './http-error-handler.service';
import { HttpClientModule } from '@angular/common/http';
import { CreateContactosComponent } from './create-contactos/create-contactos.component';
import { FormsModule } from '@angular/forms';
import { ListarContactosComponent } from './listar-contactos/listar-contactos.component';
import { ContactosComponent } from './contactos/contactos.component'; // AsegÃºrate de importar FormsModule
import { ContactosService } from './contactos.service';
import { EditarContactosComponent } from './editar-contactos/editar-contactos.component';
import { AutoritationComponent } from './autoritation/autoritation.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarContactosComponent,
    CreateContactosComponent,
    ContactosComponent,
    EditarContactosComponent,
    AutoritationComponent,
    SearchBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    HttpErrorHandler,
    ContactosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }