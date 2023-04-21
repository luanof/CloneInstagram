import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AutenticacaoService } from 'src/app/autenticação/autenticacao.service';
import Usuario from 'src/app/interface/usuario.interface';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss'],
  providers: [AutenticacaoService],
})
export class RegistrarComponent implements OnInit {
  @Output() Registrar = new EventEmitter<boolean>();
  registro!: FormGroup;
  constructor(private autenticacaoService: AutenticacaoService) {}

  ngOnInit(): void {
    this.registro = new FormGroup({
      email: new FormControl(null, Validators.required),
      nomeCompleto: new FormControl(null, Validators.required),
      nomeUsuario: new FormControl(null, Validators.required),
      senha: new FormControl(null, Validators.required),
    });
  }
  registrar(): void {
    this.Registrar.emit(false);
  }

  submitRegister() {
    const usuario: Usuario = {
      email: this.registro.controls['email'].value,
      nomeCompleto: this.registro.controls['email'].value,
      nomeUsuario: this.registro.controls['email'].value,
      senha: this.registro.controls['senha'].value,
    };
    this.autenticacaoService.cadastroUsuario(usuario);
  }
}
