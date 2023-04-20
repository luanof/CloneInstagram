import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  @Output() Registrar = new EventEmitter<boolean>();
  registrar(): void {
    this.Registrar.emit(true);
  }
}
