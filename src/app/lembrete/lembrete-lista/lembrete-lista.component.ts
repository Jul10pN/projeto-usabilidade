import { Component, OnInit, Input } from '@angular/core';
import { Lembrete } from '../lembrete.model';
import { LembreteService } from '../lembrete.service';


@Component({
  selector: 'app-lembrete-lista',
  templateUrl: './lembrete-lista.component.html',
  styleUrls: ['./lembrete-lista.component.css']
})
export class LembreteListaComponent implements OnInit {

  lembretes: Lembrete[] = []

  constructor(public lembreteService: LembreteService) {

  }

  ngOnInit(): void {
    this.lembretes = this.lembreteService.getLembretes();
  }

}
