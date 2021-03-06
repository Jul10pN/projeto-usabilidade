import { Component } from '@angular/core';
import { Lembrete } from './lembrete/lembrete.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-usabilidade';

  lembretes: Lembrete[] = []

  onLembreteAdicionado(lembrete) {
    this.lembretes = [ ...this.lembretes, lembrete ]
  }
}
