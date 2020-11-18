import { Component, OnInit, Input } from '@angular/core';
import { Lembrete } from '../lembrete.model';


@Component({
  selector: 'app-lembrete-lista',
  templateUrl: './lembrete-lista.component.html',
  styleUrls: ['./lembrete-lista.component.css']
})
export class LembreteListaComponent implements OnInit {

  @Input() lembretes: Lembrete[] = []

  constructor() { }

  ngOnInit(): void {
  }

}
