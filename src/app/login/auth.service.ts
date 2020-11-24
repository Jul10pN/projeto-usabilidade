import { Route } from '@angular/compiler/src/core';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from '../usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
    if(usuario.email === 'rmilos123@gmail.com' && usuario.senha ==='123456') {

      this.usuarioAutenticado = true;

      this.router.navigate(['/menu']);
    } else {
      this.usuarioAutenticado = false;

      alert("Login ou Senha inválidos!");
    }
  }

}
