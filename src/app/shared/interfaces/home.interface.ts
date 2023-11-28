export interface Course {
  id: number;
  nome: string;
}

export interface NewAnalysys {
  dataIngresso: string;
  dataConclusao: string;
  curso: string;
  cursoContagemDisciplinas: number;
  cursoContagemHoras: number;
  contagemDisciplinasCursadas: number;
  contagemHorasCursadas: number;
  contagemReprovacoes: number;
  rendaMensal: string;
  corRaca: string;
  cotaSisu: string;
  atividadeRemunerada: string;
  idadeAtividadeRemunerada: string;
  estudos: string;
  linguaEstrangeira: string;
  principalFator: string;
  trabalharCurso: string;
  anoConclusaoEnsinoMedio: number;
  turnoEnsinoMedio: string;
  tipoEnsinoMedio: string;
  comunidadeQuilombola: string;
  tempoCursinho: string;
  ocupacaoMae: string;
  ocupacaoPai: string;
  situacaoMoradia: string;
  estadoNascimento: string;
  localResidencia: string;
  motivoCurso: string;
  instrucaoMae: string;
  instrucaoPai: string;
  estadoCivil: string;
  sexo: string;
  participacaoEconomica: string;
  contribuintesRendaFamiliar: number;
  sustentadasRendaFamiliar: number;
  escolhaCurso: string;
  recursosEscolhaCurso: string;
  influenciasEscolhaCurso: string;
  razaoNovoProcessoSeletivo: string;
  etniaIndigena: string;
  necessidadeEspecial: string;
  tipoNecessidadeEspecial: string;
  vestibularOutrosAnos: string;
  iniciouCursoSuperior: string;
}
