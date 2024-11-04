import { Component } from '@angular/core';

@Component({
  selector: 'app-teste-binding',
  templateUrl: './teste-binding.component.html',
  styleUrl: './teste-binding.component.scss',
})
export class TesteBindingComponent {
  ativadoOuDesativado = true;

  ativar() {
    this.ativadoOuDesativado = false;
  }

  desativar() {
    this.ativadoOuDesativado = true;
  }
}
