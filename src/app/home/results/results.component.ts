import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Chart } from 'chart.js/auto';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  form!: FormGroup;
  public chart: any;
  public indiceEvasao: number = 75;
  public analises: any[] = [];

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      analise: ['', null],
    });
    this.createChart();
  }

  createChart() {
    this.chart = new Chart('chart', {
      type: 'doughnut',
      data: {
        // values on X-Axis
        labels: ['Índice de Potencial Evasão', 'Índice de Potencial Retenção'],
        datasets: [
          {
            data: [100 - this.indiceEvasao, this.indiceEvasao],
            backgroundColor: ['#ff6384', '#4bc0c0'],
          },
        ],
      },
      options: {
        aspectRatio: 2.5,
      },
    });
  }
}
