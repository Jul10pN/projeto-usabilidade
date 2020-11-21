import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Lembrete} from './lembrete.model';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor( private httpClient: HttpClient) {


  }

  private lembretes: Lembrete [] = [];

  private listaLembretesAtualizada = new Subject<Lembrete[]>();

  getLembretes(): void {
    this.httpClient.get<{mensagem: string, lembretes: Lembrete[]}>(
      'http://localhost:3000/api/lembretes'
    ).subscribe((dados) => {
      this.lembretes = dados.lembretes
      this.listaLembretesAtualizada.next([...this.lembretes])
    })
  }

  adicionarLembrete(cadastro: string, realizacao: string, descricao: string): void {
    const lembrete : Lembrete = {
      cadastro: cadastro,
      realizacao: realizacao,
      descricao: descricao
    };
    this.httpClient.post<{mensagem: string}>(
      'http://localhost:3000/api/lembretes',
      lembrete
    ).subscribe((dados)=>{
      console.log(dados.mensagem)
      this.lembretes.push(lembrete);
      this.listaLembretesAtualizada.next([...this.lembretes]);
    })
  }

    getListaLembretesAtualizadaObservable(){
      return this.listaLembretesAtualizada.asObservable();
    }

}
