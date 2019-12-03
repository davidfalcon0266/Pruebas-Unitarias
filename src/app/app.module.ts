import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VotesComponent } from './votes/votes.component';
import { LibreriaComponent } from './ejercicios/libreria/libreria.component';
import { HttpClientModule } from '@angular/common/http';
import { LibraryService } from './services/library.service';
import { FormsComponent } from './ejercicios/forms/forms.component';
import { CalculadoraComponent } from './ejercicios/calculadora/calculadora.component';
import { CambioMonedaComponent } from './ejercicios/cambio-moneda/cambio-moneda.component';

@NgModule({
  declarations: [
    AppComponent,
    VotesComponent,
    LibreriaComponent,
    FormsComponent,
    CalculadoraComponent,
    CambioMonedaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
