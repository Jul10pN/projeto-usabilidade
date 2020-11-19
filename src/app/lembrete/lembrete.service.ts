import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Lembrete} from './lembrete.model';
@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor() { }

  private lembretes: Lembrete [] = [];

  private listaLembretesAtualizada = new Subject<Lembrete[]>();

  getLembretes(): Lembrete []{
    return [...this.lembretes];
  }

  adicionarLembrete(cadastro: string, realizacao: string, descricao: string): void {
    const lembrete : Lembrete = {
      cadastro: cadastro,
      realizacao: realizacao,
      descricao: descricao
    };
    this.lembretes.push(lembrete);

    this.listaLembretesAtualizada.next([...this.lembretes]);
  }

    getListaLembretesAtualizadaObservable(){
      return this.listaLembretesAtualizada.asObservable();
    }

}
