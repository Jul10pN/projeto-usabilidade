import { Component, OnDestroy, OnInit } from '@angular/core';
import { Lembrete } from '../lembrete.model';
import { LembreteService } from '../lembrete.service';
import { Observable, Subscription } from 'rxjs';


@Component({
  selector: 'app-lembrete-lista',
  templateUrl: './lembrete-lista.component.html',
  styleUrls: ['./lembrete-lista.component.css']
})
export class LembreteListaComponent implements OnInit, OnDestroy {

  lembretes: Lembrete[] = []
  private  lembretesSubscription: Subscription;
  constructor(public lembreteService: LembreteService) {

  }

  ngOnInit(): void {
    this.lembreteService.getLembretes();
    this.lembretesSubscription = this.lembreteService
    .getListaLembretesAtualizadaObservable()
    .subscribe((lembretes: Lembrete[]) =>{
      this.lembretes = lembretes;
    });
  }

  onDelete(id: String) {
    this.lembreteService.removerLembrete(id);
  }


  ngOnDestroy(): void {
    this.lembretesSubscription.unsubscribe();
  }

}
