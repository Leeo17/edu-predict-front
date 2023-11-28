import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable, startWith, switchMap } from 'rxjs';
import { Course, NewAnalysis } from '../../shared/interfaces';
import { ApiService } from '../../shared/services/api.service';
import {
  ATIVIDADE_REMUNERADA_OPTIONS,
  COR_RACA_OPTIONS,
  COTA_SISU_OPTIONS,
  CURSINHO_OPTIONS,
  ESCOLHA_CURSO_OPTIONS,
  ESTADO_CIVIL_OPTIONS,
  ESTADO_NASCIMENTO_OPTIONS,
  ESTUDOS_OPTIONS,
  FATORES_OPTIONS,
  IDADE_ATIVIDADE_REMUNERADA_OPTIONS,
  INDIGENA_OPTIONS,
  INFLUENCIA_ESCOLHA_CURSO_OPTIONS,
  INICIO_CURSO_SUPERIOR_OPTIONS,
  LINGUA_ESTRANGEIRA_OPTIONS,
  LOCAL_RESIDENCIA_OPTIONS,
  MOTIVO_CURSO_OPTIONS,
  NECESSIDADE_ESPECIAL_OPTIONS,
  NIVEL_INSTRUCAO_OPTIONS,
  NOVO_PROCESSO_SELETIVO_OPTIONS,
  OCUPACAO_MAE_OPTIONS,
  OCUPACAO_PAI_OPTIONS,
  PARTICIPACAO_FAMILIAR_OPTIONS,
  RECURSOS_ESCOLHA_CURSO_OPTIONS,
  RENDA_FAMILIAR_OPTIONS,
  SEXO_OPTIONS,
  SIM_NAO_OPTIONS,
  SITUACAO_MORADIA_OPTIONS,
  TIPO_ENSINO_MEDIO_OPTIONS,
  TIPO_NECESSIDADE_ESPECIAL_OPTIONS,
  TRABALHO_OPTIONS,
  TURNO_ENSINO_MEDIO_OPTIONS,
  VESTIBULAR_OUTROS_ANOS_OPTIONS,
} from '../consts';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-new-analysis',
  templateUrl: './new-analysis.component.html',
  styleUrls: ['./new-analysis.component.scss'],
})
export class NewAnalysisComponent implements OnInit {
  dadosAcademicosForm!: FormGroup;
  dadosSocioeconomicosForm!: FormGroup;

  isLoading = false;
  cursos: Observable<Course[]> | undefined;
  rendaFamiliarOptions = RENDA_FAMILIAR_OPTIONS;
  corRacaOptions = COR_RACA_OPTIONS;
  cotaSisuOptions = COTA_SISU_OPTIONS;
  atividadeRemuneradaOptions = ATIVIDADE_REMUNERADA_OPTIONS;
  idadeAtividadeRemuneradaOptions = IDADE_ATIVIDADE_REMUNERADA_OPTIONS;
  estudosOptions = ESTUDOS_OPTIONS;
  linguaEstrangeiraOptions = LINGUA_ESTRANGEIRA_OPTIONS;
  fatoresOptions = FATORES_OPTIONS;
  trabalhoOptions = TRABALHO_OPTIONS;
  turnoEnsinoMedioOptions = TURNO_ENSINO_MEDIO_OPTIONS;
  tipoEnsinoMedioOptions = TIPO_ENSINO_MEDIO_OPTIONS;
  simNaoOptions = SIM_NAO_OPTIONS;
  cursinhoOptions = CURSINHO_OPTIONS;
  ocupacaoMaeOptions = OCUPACAO_MAE_OPTIONS;
  ocupacaoPaiOptions = OCUPACAO_PAI_OPTIONS;
  situacaoMoradiaOptions = SITUACAO_MORADIA_OPTIONS;
  estadoNascimentoOptions = ESTADO_NASCIMENTO_OPTIONS;
  localResidenciaOptions = LOCAL_RESIDENCIA_OPTIONS;
  motivoCursoOptions = MOTIVO_CURSO_OPTIONS;
  nivelInstrucaoOptions = NIVEL_INSTRUCAO_OPTIONS;
  estadoCivilOptions = ESTADO_CIVIL_OPTIONS;
  sexoOptions = SEXO_OPTIONS;
  participacaoFamiliar = PARTICIPACAO_FAMILIAR_OPTIONS;
  escolhaCursoOptions = ESCOLHA_CURSO_OPTIONS;
  recursosEscolhaCursoOptions = RECURSOS_ESCOLHA_CURSO_OPTIONS;
  influenciaEscolhaCursoOptions = INFLUENCIA_ESCOLHA_CURSO_OPTIONS;
  novoProcessoSeletivo = NOVO_PROCESSO_SELETIVO_OPTIONS;
  indigenaOptions = INDIGENA_OPTIONS;
  necessidadeEspecialOptions = NECESSIDADE_ESPECIAL_OPTIONS;
  tipoNecessidadeEspecialOptions = TIPO_NECESSIDADE_ESPECIAL_OPTIONS;
  vestibularOutrosAnosOptions = VESTIBULAR_OUTROS_ANOS_OPTIONS;
  inicioCursoSuperiorOptions = INICIO_CURSO_SUPERIOR_OPTIONS;

  constructor(
    private formBuilder: FormBuilder,
    private apiService: ApiService,
    private homeService: HomeService,
    private router: Router
  ) {}

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
      contagemDisciplinasCursadas: [null],
      contagemHorasCursadas: [null],
      contagemReprovacoes: [null],
    });

    this.dadosSocioeconomicosForm = this.formBuilder.group({
      rendaMensal: [null],
      corRaca: [null],
      cotaSisu: [null],
      atividadeRemunerada: [null],
      idadeAtividadeRemunerada: [null],
      estudos: [null],
      linguaEstrangeira: [null],
      principalFator: [null],
      trabalharCurso: [null],
      anoConclusaoEnsinoMedio: [null],
      turnoEnsinoMedio: [null],
      tipoEnsinoMedio: [null],
      comunidadeQuilombola: [null],
      tempoCursinho: [null],
      ocupacaoMae: [null],
      ocupacaoPai: [null],
      situacaoMoradia: [null],
      estadoNascimento: [null],
      localResidencia: [null],
      motivoCurso: [null],
      instrucaoMae: [null],
      instrucaoPai: [null],
      estadoCivil: [null],
      sexo: [null],
      participacaoEconomica: [null],
      contribuintesRendaFamiliar: [null],
      sustentadasRendaFamiliar: [null],
      escolhaCurso: [null],
      recursosEscolhaCurso: [null],
      influenciasEscolhaCurso: [null],
      razaoNovoProcessoSeletivo: [null],
      etniaIndigena: [null],
      necessidadeEspecial: [null],
      tipoNecessidadeEspecial: [null],
      vestibularOutrosAnos: [null],
      iniciouCursoSuperior: [null],
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
    const dadosAcademicosValues = this.dadosAcademicosForm.getRawValue();
    const dadosSocioeconomicos = this.dadosSocioeconomicosForm.getRawValue();

    if (dadosSocioeconomicos.anoConclusaoEnsinoMedio < 1999) {
      dadosSocioeconomicos.anoConclusaoEnsinoMedio = 1989;
    }

    if (dadosSocioeconomicos.anoConclusaoEnsinoMedio > 2018) {
      dadosSocioeconomicos.anoConclusaoEnsinoMedio = 2019;
    }

    const newAnalysis: NewAnalysis = {
      dataIngresso: dadosAcademicosValues.dataIngresso ?? '',
      dataConclusao: dadosAcademicosValues.dataConclusao ?? '',
      curso: typeof dadosAcademicosValues.curso === 'string' ? 0 : dadosAcademicosValues.curso?.id ?? 0,
      cursoContagemDisciplinas: dadosAcademicosValues.cursoContagemDisciplinas ?? 0,
      cursoContagemHoras: dadosAcademicosValues.cursoContagemHoras ?? 0,
      contagemDisciplinasCursadas: dadosAcademicosValues.contagemDisciplinasCursadas ?? 0,
      contagemHorasCursadas: dadosAcademicosValues.contagemHorasCursadas ?? 0,
      contagemReprovacoes: dadosAcademicosValues.contagemReprovacoes ?? 0,
      rendaMensal: dadosSocioeconomicos.rendaMensal ?? '',
      corRaca: dadosSocioeconomicos.corRaca ?? '',
      cotaSisu: dadosSocioeconomicos.cotaSisu ?? '',
      atividadeRemunerada: dadosSocioeconomicos.atividadeRemunerada ?? '',
      idadeAtividadeRemunerada: dadosSocioeconomicos.idadeAtividadeRemunerada ?? '',
      estudos: dadosSocioeconomicos.estudos ?? '',
      linguaEstrangeira: dadosSocioeconomicos.linguaEstrangeira ?? '',
      principalFator: dadosSocioeconomicos.principalFator ?? '',
      trabalharCurso: dadosSocioeconomicos.trabalharCurso ?? '',
      anoConclusaoEnsinoMedio: dadosSocioeconomicos.anoConclusaoEnsinoMedio ?? 0,
      turnoEnsinoMedio: dadosSocioeconomicos.turnoEnsinoMedio ?? '',
      tipoEnsinoMedio: dadosSocioeconomicos.tipoEnsinoMedio ?? '',
      comunidadeQuilombola: dadosSocioeconomicos.comunidadeQuilombola ?? '',
      tempoCursinho: dadosSocioeconomicos.tempoCursinho ?? '',
      ocupacaoMae: dadosSocioeconomicos.ocupacaoMae ?? '',
      ocupacaoPai: dadosSocioeconomicos.ocupacaoPai ?? '',
      situacaoMoradia: dadosSocioeconomicos.situacaoMoradia ?? '',
      estadoNascimento: dadosSocioeconomicos.estadoNascimento ?? '',
      localResidencia: dadosSocioeconomicos.localResidencia ?? '',
      motivoCurso: dadosSocioeconomicos.motivoCurso ?? '',
      instrucaoMae: dadosSocioeconomicos.instrucaoMae ?? '',
      instrucaoPai: dadosSocioeconomicos.instrucaoPai ?? '',
      estadoCivil: dadosSocioeconomicos.estadoCivil ?? '',
      sexo: dadosSocioeconomicos.sexo ?? '',
      participacaoEconomica: dadosSocioeconomicos.participacaoEconomica ?? '',
      contribuintesRendaFamiliar: dadosSocioeconomicos.contribuintesRendaFamiliar ?? 0,
      sustentadasRendaFamiliar: dadosSocioeconomicos.sustentadasRendaFamiliar ?? 0,
      escolhaCurso: dadosSocioeconomicos.escolhaCurso ?? '',
      recursosEscolhaCurso: dadosSocioeconomicos.recursosEscolhaCurso ?? '',
      influenciasEscolhaCurso: dadosSocioeconomicos.influenciasEscolhaCurso ?? '',
      razaoNovoProcessoSeletivo: dadosSocioeconomicos.razaoNovoProcessoSeletivo ?? '',
      etniaIndigena: dadosSocioeconomicos.etniaIndigena ?? '',
      necessidadeEspecial: dadosSocioeconomicos.necessidadeEspecial ?? '',
      tipoNecessidadeEspecial: dadosSocioeconomicos.tipoNecessidadeEspecial ?? '',
      vestibularOutrosAnos: dadosSocioeconomicos.vestibularOutrosAnos ?? '',
      iniciouCursoSuperior: dadosSocioeconomicos.iniciouCursoSuperior ?? '',
    };

    this.homeService.newAnalysis(newAnalysis).subscribe({
      next: () => this.router.navigate(['/home/results']),
    });
  }
}
