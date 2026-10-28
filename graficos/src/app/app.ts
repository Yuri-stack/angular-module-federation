import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App implements OnInit {

  ngOnInit(): void {
    const dados = [
      { categoria: 'Eletronicos', valor: 10 },
      { categoria: 'Roupas', valor: 15 },
      { categoria: 'Decoração', valor: 12 },
      { categoria: 'Ferramentas', valor: 20 },
      { categoria: 'Acessórios', valor: 7 },
    ]

    const labels = dados.map(v => v.categoria)
    const valores = dados.map(v => v.valor)

    new Chart('barchart', {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{ label: "Categorias Mais Vendidas", data: valores, backgroundColor: 'rbga(31,82,146,0.6)' }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
}
