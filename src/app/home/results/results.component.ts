import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  form!: FormGroup;
  public chart: Chart<'doughnut', number[], string> | null = null;
  public chartImage: string | undefined;
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
    Chart.register(ChartDataLabels);
    const mychart = new Chart('chart', {
      type: 'doughnut',
      data: {
        // values on X-Axis
        labels: ['Índice de Potencial Evasão', 'Índice de Potencial Retenção'],
        datasets: [
          {
            data: [100 - this.indiceEvasao, this.indiceEvasao],
            backgroundColor: ['#ff6384', '#4bc0c0'],
            datalabels: {
              color: '#FFFFFF',
              font: {
                size: 16,
              },
            },
          },
        ],
      },
      options: {
        aspectRatio: 3.5,
        animation: {
          onComplete: () => {
            this.chartImage = mychart.toBase64Image('image/png', 1);
          },
        },
      },
    });
  }

  exportChart() {
    if (!this.chartImage) {
      return;
    }

    const link = document.createElement('a');
    link.href = this.chartImage;
    link.download = 'chart.png';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
}
