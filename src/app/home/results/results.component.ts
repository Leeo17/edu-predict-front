import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Chart } from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { switchMap } from 'rxjs';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { Analysis } from '../../shared/interfaces';
import { ApiService } from '../../shared/services/api.service';
import { MessageService } from '../../shared/services/message.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  form!: FormGroup;
  public chart: Chart<'doughnut', number[], string> | null = null;
  public chartImage: string | undefined;
  public analyses: Analysis[] = [];
  public selectedAnalysis: Analysis | null = null;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private messageService: MessageService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.getAnalyses();
    this.form = this.formBuilder.group({
      analise: ['', null],
    });

    this.form.controls['analise'].valueChanges.subscribe((analysisId) => {
      this.selectedAnalysis = this.analyses.find((analysis) => analysis.id === analysisId) || null;
      this.chart?.destroy();
      this.createChart();
    });
  }

  getAnalyses() {
    this.apiService.getAllUserAnalyses().subscribe({
      next: (res) => {
        if (!res || res.length === 0) {
          this.analyses = [];
          this.selectedAnalysis = null;
          this.form.reset();
          this.form.disable();
          return;
        }

        this.analyses = res;
        this.selectedAnalysis = this.analyses[0];
        this.form.controls['analise'].setValue(this.selectedAnalysis.id);
      },
      error: (err) => this.messageService.showNotification(err.error.detail),
    });
  }

  createChart() {
    if (!this.selectedAnalysis) return;

    Chart.register(ChartDataLabels);
    const mychart = new Chart('chart', {
      type: 'doughnut',
      data: {
        // values on X-Axis
        labels: ['Índice de Potencial Evasão', 'Índice de Potencial Retenção'],
        datasets: [
          {
            data: [
              1 - this.selectedAnalysis.indice_potencial_evasao,
              this.selectedAnalysis.indice_potencial_evasao,
            ],
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
        aspectRatio: 3,
        animation: {
          onComplete: () => {
            this.chartImage = mychart.toBase64Image('image/png', 1);
          },
        },
      },
    });
    this.chart = mychart;
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

  deleteAnalysis() {
    this.dialog
      .open(ConfirmDialogComponent, {
        width: '400px',
      })
      .afterClosed()
      .pipe(switchMap((res) => (res ? this.apiService.deleteAnalysis(this.selectedAnalysis!.id) : [])))
      .subscribe({
        next: () => {
          this.messageService.showNotification('Análise excluída com sucesso.');
          this.getAnalyses();
        },
        error: (err) => this.messageService.showNotification(err.error.detail),
      });
  }
}
