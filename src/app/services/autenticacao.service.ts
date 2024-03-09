import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticacaoService {
  constructor() { }

  logar(pLogin : string, pSenha : string){
    console.log(`login ${pLogin}`)
    console.log(`senha ${pSenha}`)

    localStorage.setItem('login', pLogin )
    localStorage.setItem('senha', pSenha)
  }

  deslogar() {
    localStorage.clear();
  }

  validaUsuarioLogado() {
    return !!localStorage.getItem('login')
  }
}
