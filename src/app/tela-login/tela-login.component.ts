import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login/auth.service';
import { Usuario} from '../usuario';
@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  private usuario: Usuario = new Usuario();

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  fazerLogin() {
    //console.log(this.usuario);
    this.authService.fazerLogin(this.usuario);
  }


}
