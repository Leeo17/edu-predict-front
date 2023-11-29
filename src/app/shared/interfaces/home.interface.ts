export interface Course {
  id: number;
  nome: string;
}

export interface NewAnalysis {
  data_ingresso: string;
  data_conclusao: string;
  curso: number;
  curso_contagem_disciplinas: number;
  curso_contagem_horas: number;
  contagem_disciplinas_cursadas: number;
  contagem_horas_cursadas: number;
  contagem_reprovacoes: number;
  renda_mensal: string;
  cor_raca: string;
  cota_sisu: string;
  atividade_remunerada: string;
  idade_atividade_remunerada: string;
  estudos: string;
  lingua_estrangeira: string;
  principal_fator: string;
  trabalhar_curso: string;
  ano_conclusao_ensino_medio: number;
  turno_ensino_medio: string;
  tipo_ensino_medio: string;
  comunidade_quilombola: string;
  tempo_cursinho: string;
  ocupacao_mae: string;
  ocupacao_pai: string;
  situacao_moradia: string;
  estado_nascimento: string;
  local_residencia: string;
  motivo_curso: string;
  instrucao_mae: string;
  instrucao_pai: string;
  estado_civil: string;
  sexo: string;
  participacao_economica: string;
  contribuintes_renda_familiar: number;
  sustentadas_renda_familiar: number;
  escolha_curso: string;
  recursos_escolha_curso: string;
  influencias_escolha_curso: string;
  razao_novo_processo_seletivo: string;
  etnia_indigena: string;
  necessidade_especial: string;
  tipo_necessidade_especial: string;
  vestibular_outros_anos: string;
  iniciou_curso_superior: string;
}
