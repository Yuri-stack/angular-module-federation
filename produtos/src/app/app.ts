import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Produtos {
  nome: string;
  valor: number;
  imagem: string;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  produtos: Produtos[] = [
    { nome: "Camiseta", valor: 79.90, imagem: "" },
    { nome: "Caneca", valor: 79.90, imagem: "" },
    { nome: "Mouse", valor: 79.90, imagem: "" },
  ]
}
