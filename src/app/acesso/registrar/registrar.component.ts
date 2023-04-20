import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.scss']
})
export class RegistrarComponent {
  @Output() Registrar = new EventEmitter<boolean>();
  registrar(): void {
    this.Registrar.emit(false);
  }
}
