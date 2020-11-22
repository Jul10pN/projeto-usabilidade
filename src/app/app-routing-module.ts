import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LembreteInserirComponent } from './lembrete/lembrete-inserir/lembrete-inserir.component';
import { LembreteListaComponent } from './lembrete/lembrete-lista/lembrete-lista.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  { path: 'lista', component: LembreteListaComponent},
  { path:  'cadastro', component: LembreteInserirComponent},
  { path: '', component: MenuComponent}
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
