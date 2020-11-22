import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Lembrete} from './lembrete.model';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LembreteService {

  constructor( private httpClient: HttpClient) {


  }

  removerLembrete(id: String): void {
    this.httpClient.delete(`http://localhost:3000/api/lembretes/${id}`)
    .subscribe(() => {
      console.log ("Removido com Sucesso")
      this.lembretes = this.lembretes.filter((lem) =>{
        return lem.id !== id
      })
      this.listaLembretesAtualizada.next([...this.lembretes]);
    });
  }

  private lembretes: Lembrete [] = [];

  private listaLembretesAtualizada = new Subject<Lembrete[]>();

  getLembretes(): void {
    this.httpClient.get<{mensagem: string, lembretes: any}>(
      'http://localhost:3000/api/lembretes'
    )
    .pipe(map((dados) => {
      return dados.lembretes.map(lem =>{
        return{
          id: lem._id,
          cadastro: lem.cadastro,
          realizacao: lem.realizacao,
          descricao: lem.descricao
        }
      })
    }))
    .subscribe((lembretes) => {
      this.lembretes = lembretes
      this.listaLembretesAtualizada.next([...this.lembretes])
    })
  }

  adicionarLembrete(cadastro: string, realizacao: string, descricao: string): void {
    const lembrete : Lembrete = {
      id: null,
      cadastro: cadastro,
      realizacao: realizacao,
      descricao: descricao
    };
    this.httpClient.post<{mensagem: string, id: String}>(
      'http://localhost:3000/api/lembretes',
      lembrete
    ).subscribe((dados)=>{
      console.log(dados.mensagem)
      lembrete.id = dados.id;
      this.lembretes.push(lembrete);
      this.listaLembretesAtualizada.next([...this.lembretes]);
    })
  }

    getListaLembretesAtualizadaObservable(){
      return this.listaLembretesAtualizada.asObservable();
    }
    
}
