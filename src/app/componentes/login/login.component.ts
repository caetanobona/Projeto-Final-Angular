import { Component } from '@angular/core';
import { AutenticacaoService } from '../../services/autenticacao.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private autenticacaoService : AutenticacaoService, private serviceRouter : Router) {

  }

  submit(form : any) {
    this.autenticacaoService.logar(form.nome, form.senha) //chama o metodo do servico passando os parametros do form
    this.serviceRouter.navigate(['/home']) //envia para o path do app-routing.module, onde é puxado o guarda
  }
}
