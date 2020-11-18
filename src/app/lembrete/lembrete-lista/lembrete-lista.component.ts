import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lembrete-lista',
  templateUrl: './lembrete-lista.component.html',
  styleUrls: ['./lembrete-lista.component.css']
})
export class LembreteListaComponent implements OnInit {

  lembretes = [
    {
    cadastro: '17/10/2020',
  realizacao: '20/10/2020',
  descricao: 'preciso lavar o carro'
  },
  {
    cadastro: '04/04/2001',
    realizacao: '17/10/2020',
    descricao: 'tu nasceu ze mane e tem 19 anos'
  }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
