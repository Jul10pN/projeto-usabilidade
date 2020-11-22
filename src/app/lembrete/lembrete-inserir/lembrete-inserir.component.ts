import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Lembrete } from '../lembrete.model';
import { LembreteService } from '../lembrete.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-lembrete-inserir',
  templateUrl: './lembrete-inserir.component.html',
  styleUrls: ['./lembrete-inserir.component.css']
})
export class LembreteInserirComponent implements OnInit {

  private modo: String = "cadastro";
  private idLembrete: String;
  public lembrete: Lembrete;

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if(paramMap.has("idLembrete")) {
        this.modo = "editar";
        this.idLembrete = paramMap.get("idLembrete");
        this.lembrete = this.lembreteService.getLembrete(this.idLembrete);
      }else {
        this.modo = "cadastro";
        this.idLembrete = null;
      }
    }
    );
  }

  constructor(
    public lembreteService: LembreteService,
    public route: ActivatedRoute
    ){
  }

  onSalvarLembrete(form: NgForm) {
    if(form.invalid) return;
    if(this.modo === "criar") {
      this.lembreteService.adicionarLembrete(
        form.value.cadastro,
        form.value.realizacao,
        form.value.descricao
    );
    }else{
      this.lembreteService.atualizarLembrete(
        this.idLembrete,
        form.value.cadastro,
        form.value.realizacao,
        form.value.descricao
    );
    }
    form.resetForm();




  }
}


