import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from 'src/app/autenticação/autenticacao.service';

import Usuario from 'src/app/interface/usuario.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [AutenticacaoService],
})
export class LoginComponent implements OnInit {
  @Output() Registrar = new EventEmitter<boolean>();
  public login!: FormGroup;
  constructor(private autenticacaoService: AutenticacaoService) {}
  ngOnInit(): void {
    this.login = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      senha: new FormControl(null, Validators.required),
    });
  }
  registrar(): void {
    this.Registrar.emit(true);
  }

  submitLogin() {
    const usuario: Usuario = {
      email: this.login.controls['email'].value,
      senha: this.login.controls['senha'].value,
    };
    this.autenticacaoService.loginUsuario(usuario);
  }
}
