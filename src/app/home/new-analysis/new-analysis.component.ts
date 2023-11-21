import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, startWith, switchMap } from 'rxjs';
import { Course } from '../../shared/interfaces';
import { ApiService } from '../../shared/services/api.service';
import {
  ATIVIDADE_REMUNERADA_OPTIONS,
  COR_RACA_OPTIONS,
  COTA_SISU_OPTIONS,
  ESTUDOS_OPTIONS,
  FATORES_OPTIONS,
  LINGUA_ESTRANGEIRA_OPTIONS,
  SIM_NAO_OPTIONS,
  TIPO_ENSINO_MEDIO_OPTIONS,
  TRABALHO_OPTIONS,
  TURNO_ENSINO_MEDIO_OPTIONS,
} from '../consts';

@Component({
  selector: 'app-new-analysis',
  templateUrl: './new-analysis.component.html',
  styleUrls: ['./new-analysis.component.scss'],
})
export class NewAnalysisComponent implements OnInit {
  dadosAcademicosForm!: FormGroup;
  isLoading = false;
  cursos: Observable<Course[]> | undefined;
  corRacaOptions = COR_RACA_OPTIONS;
  cotaSisuOptions = COTA_SISU_OPTIONS;
  atividadeRemuneradaOptions = ATIVIDADE_REMUNERADA_OPTIONS;
  estudosOptions = ESTUDOS_OPTIONS;
  linguaEstrangeiraOptions = LINGUA_ESTRANGEIRA_OPTIONS;
  fatoresOptions = FATORES_OPTIONS;
  trabalhoOptions = TRABALHO_OPTIONS;
  turnoEnsinoMedioOptions = TURNO_ENSINO_MEDIO_OPTIONS;
  tipoEnsinoMedioOptions = TIPO_ENSINO_MEDIO_OPTIONS;
  simNaoOptions = SIM_NAO_OPTIONS;

  constructor(private formBuilder: FormBuilder, private apiService: ApiService) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.dadosAcademicosForm = this.formBuilder.group({
      dataIngresso: [null],
      dataConclusao: [null],
      curso: [null],
      cursoContagemDisciplinas: [null],
      cursoContagemHoras: [null],
      contagemDisciplinas: [null],
      contagemHoras: [null],
      contagemReprovacoes: [null],
    });

    this.cursos = this.dadosAcademicosForm.get('curso')?.valueChanges.pipe(
      startWith(''),
      switchMap((value) => {
        const name = typeof value === 'string' ? value : value?.name;
        return this.apiService.getCourses(name);
      })
    );
  }

  displayFn(curso: Course): string {
    return curso && curso.nome ? curso.nome : '';
  }

  analisar() {
    console.log(this.dadosAcademicosForm.getRawValue());
  }
}
