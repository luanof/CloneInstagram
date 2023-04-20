import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-acesso',
  templateUrl: './acesso.component.html',
  styleUrls: ['./acesso.component.scss'],
  animations: [
    trigger('animation-login', [
      state(
        'criado',
        style({
          opacity: 1,
        })
      ),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(200px,0)' }),
        animate('500ms 0s'),
      ]),
    ]),
    trigger('animation-banner', [
      state(
        'criado',
        style({
          opacity: 1,
        })
      ),
      transition('void => criado', [
        style({ opacity: 0, transform: 'translate(-200px,0)' }),
        animate('500ms 0s'),
      ]),
    ]),
  ],
})
export class AcessoComponent {
  estadoBanner: string = 'criado';
  estadoLogin: string = 'criado';

  cadastro: boolean = false;

  setRegistrar(event: boolean) {
    this.cadastro = event;
  }
}
