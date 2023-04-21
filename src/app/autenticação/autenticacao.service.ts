import { Injectable } from '@angular/core';
import Usuario from '../interface/usuario.interface';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  constructor() {}
  cadastroUsuario(usuario: Usuario): void {
    console.log(usuario);

  }
  loginUsuario(usuario: Usuario): void {
    console.log(usuario);
  }
}
