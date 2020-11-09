import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LembreteInserirComponent } from './lembrete/lembrete-inserir/lembrete-inserir.component';
import { LembreteListaComponent } from './lembrete/lembrete-lista/lembrete-lista.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';




@NgModule({
  declarations: [
    AppComponent,
    LembreteInserirComponent,
    LembreteListaComponent,
    CabecalhoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
