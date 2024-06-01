import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Para las peticiones http
import { HttpClientModule } from '@angular/common/http';
//Para los formularios
import { FormsModule } from '@angular/forms';

import { CargarScriptsService } from './services/cargar-scripts.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { NotasFormComponent } from './componentes/notas-form/notas-form.component';
import { NotasListComponent } from './componentes/notas-list/notas-list.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NoteService} from './services/note.service';
import { FilterPipe } from './pipes/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    NavegacionComponent,
    NotasFormComponent,
    NotasListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [
    NoteService,
    CargarScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
