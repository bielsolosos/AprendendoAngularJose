import { Component, inject, OnInit } from '@angular/core';
import { JoseTeste } from '../../Services/ze';
import { ZeComponentService } from '../../Services/ze-component.service';

@Component({
  selector: 'app-ze',
  templateUrl: './ze.component.html',
  styleUrl: './ze.component.scss',
})
export class ZeComponent implements OnInit {
  service = inject(ZeComponentService);

  taFunfando = false;

  dados: Array<JoseTeste> = [];

  ngOnInit(): void {
    this.service.listAll().subscribe({
      next: (data: JoseTeste[]) => {
        this.dados = data; // Agora você está atribuindo os dados reais
        console.log(this.dados);
      },
      error: (err) => {
        console.error('Erro ao carregar os dados:', err);
      },
    });
  }

  trocar(): any {
    this.taFunfando = !this.taFunfando;
  }

  mostrarJoses() {
    this.service.listAll().subscribe({
      next: (data: JoseTeste[]) => {
        this.dados = data; // Agora você está atribuindo os dados reais
        console.log(this.dados);
      },
      error: (err) => {
        console.error('Erro ao carregar os dados:', err);
      },
    });
  }
}
