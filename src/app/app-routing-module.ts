import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LembreteInserirComponent } from './lembrete/lembrete-inserir/lembrete-inserir.component';
import { LembreteListaComponent } from './lembrete/lembrete-lista/lembrete-lista.component';
import { MenuComponent } from './menu/menu.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
  { path: 'lista', component: LembreteListaComponent},
  { path:  'cadastro', component: LembreteInserirComponent},
  { path: 'menu', component: MenuComponent},
  { path: 'editar/:idLembrete', component: LembreteInserirComponent },
  { path:  '', component:TelaLoginComponent}
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]

})

export class AppRoutingModule {

}
