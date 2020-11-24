import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing-module';
import { MenuComponent } from './menu/menu.component';

import { AppComponent } from './app.component';
import { LembreteInserirComponent } from './lembrete/lembrete-inserir/lembrete-inserir.component';
import { LembreteListaComponent } from './lembrete/lembrete-lista/lembrete-lista.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/** imports do Angular Material */

import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatMenuModule } from '@angular/material/menu';
import { TelaLoginComponent } from './tela-login/tela-login.component';
import { MatTabsModule} from '@angular/material/tabs';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule} from '@angular/material/icon';
import { AuthService } from './login/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    LembreteInserirComponent,
    LembreteListaComponent,
    CabecalhoComponent,
    MenuComponent,
    TelaLoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatTabsModule,
    MatCheckboxModule,
    MatIconModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    MatDatepickerModule,
    HttpClientModule,
    MatMenuModule

  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
