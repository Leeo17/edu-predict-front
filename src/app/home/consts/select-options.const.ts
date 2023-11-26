// A renda total mensal de sua família se situa na faixa:
export const RENDA_FAMILIAR_OPTIONS = [
  'Até R$ 760,00',
  'De R$ 760,01 até R$ 1090,00',
  'De 1090,01 até R$ 1141,00',
  'De 1141,01 até 1448,00',
  'De R$ 1448,01 até R$ 1634,00',
  'De R$ 1634,01 até R$ 1850,00',
  'De R$ 1850,01 até R$ 1862,00',
  'De R$ 1862,01 até R$ 1874,00',
  'De R$ 1874,01 até R$ 2172,00',
  'De R$ 2172,01 até R$ 2725,00',
  'De R$ 2725,01 até R$ 2811,00',
  'De R$ 2811,01 até R$ 3620,00',
  'De R$ 3620,01 até R$ 4354,00',
  'De R$ 4354,01 até R$ 4685,00',
  'De R$ 4685,01 até R$ 4972,00',
  'De R$ 4972,01 até R$ 5068,00',
  'De R$ 5068,01 até R$ 6220,00',
  'De R$ 6220,01 até R$ 6559,00',
  'De R$ 6559,01 até R$ 7240,00',
  'De R$ 7240,01 até R$ 7630,00',
  'De R$ 7630,01 até R$ 8708,00',
  'De R$ 8708,01 até R$ 9370,00',
  'De R$ 9370,01 até R$ 10136,00',
  'De R$ 10136,01 até R$ 11196,00',
  'De R$ 11196,01 até R$ 12941,00',
  'De R$ 12941,01 até R$ 13032,00',
  'De R$ 13032,01 até R$ 13118,00',
  'De R$ 13118,01 até R$ 14981,00',
  'De R$ 14981,01 até R$ 16866,00',
];

// A sua cor ou raça é?
export const COR_RACA_OPTIONS = ['Branca', 'Parda', 'Amarela', 'Preta', 'Indígena', 'Desconhecido'];

// Concorrência do SISU
export const COTA_SISU_OPTIONS = [
  'Não informado',
  'Concorrência Geral',
  'Independente da renda + ensino médio',
  'Renda familiar =< 1,5 + ensino médio',
  'Pretos, pardos ou indígenas + ens.médio',
  'Pretos, pardos ou indígenas =< 1,5 + ens',
  'Portador de Deficiência',
  'Defic. renda =< 1,5 + ensino médio',
  'Pretos,pardos ou indígenas + ens.medio p',
  'Defic. independ. da renda + ensino médio',
  'Defic,pretos,pardos ou indígenas =< 1,5',
];

// Você trabalha atualmente em atividade remunerada?
export const ATIVIDADE_REMUNERADA_OPTIONS = ['Não', 'Sim - meio período', 'Sim - período integral'];

// Com que idade você começou a exercer atividade remunerada?
export const IDADE_ATIVIDADE_REMUNERADA_OPTIONS = ['Antes dos 16', 'Depois dos 16', 'Nunca trabalhei'];

// Como fez seus estudos do ensino fundamental e ensino médio?
export const ESTUDOS_OPTIONS = [
  'Integralmente em escola pública',
  'Maior parte em escola pública',
  'Integralmente em escola particular',
  'Maior parte em escola particular',
  'Em escolas comunitárias/CNEC ou outro',
];

// Qual sua capacidade de leitura em Língua Estrangeira?
export const LINGUA_ESTRANGEIRA_OPTIONS = [
  'Não leio em nenhuma Língua Estrangeira',
  'Leio apenas em Inglês',
  'Leio apenas em Espanhol',
  'Leio apenas em Frânces',
  'Leio apenas uma outra Língua Estrangeira',
  'Leio duas ou mais línguas estrangeiras',
];

// Qual o principal desafio que você prevê durante o curso?
export const FATORES_OPTIONS = [
  'Conciliar estudos com vida pessoal e familiar',
  'Persistência e hábitos de estudo',
  'Habilidades específicas exigidas pelo curso',
  'Informações da profissão',
  'Relacionamentos',
  'Não se enquadra nas alternativas anteriores',
];

// Durante o curso, você terá que trabalhar?
export const TRABALHO_OPTIONS = [
  'Sim, desde o primeiro ano, em tempo parcial',
  'Sim, desde o primeiro ano, em tempo integral',
  'Sim, mas apenas nos últimos anos',
  'Não',
  'Não sei',
];

// Em que turno você fez (ou faz) o curso de ensino médio?
export const TURNO_ENSINO_MEDIO_OPTIONS = [
  'Todo diurno',
  'Todo noturno',
  'Maior parte diurno',
  'Maior parte noturno',
  'Outro',
];

// No ensino médio, você fez (ou faz)
export const TIPO_ENSINO_MEDIO_OPTIONS = [
  'Ensino médio regular',
  'Ensino médio com terceirão ou cursinho',
  'Curso profissionalizante',
  'Curso de magistério',
  'Outro',
];

// Pertence a uma comunidade quilombola?
export const SIM_NAO_OPTIONS = ['Sim', 'Não', 'Sem Resposta'];

// Por quanto tempo você fez cursinho?
export const CURSINHO_OPTIONS = [
  'Por menos de um semestre',
  'Por um semestre',
  'Por um ano',
  'Por mais de um ano',
  'Não fiz cursinho',
];

// Qual a principal ocupação da sua mãe?
export const OCUPACAO_MAE_OPTIONS = [
  'Empregada de empresa',
  'Funcionária pública do governo Federal, Estadual ou Municipal',
  'Trabalho remunerado por conta própria, com auxílio de parentes e/ou de familiares',
  'Trabalha em casa e/ou não tem atividade remunerada',
  'Sócia ou proprietária de empresa',
  'Artista (pintora, escritora, música, cantora, atriz, etc.)',
  'Trabalho remunerado por conta própria, com empregados',
  'Trabalha em entidade, organização ou instituição não governamental de cunho filantrópico, assistencial, religioso, de lazer ou outro',
  'Parlamentar ou cargo eleitoral, diplomata, militar',
  'Atleta profissional',
  'Outros',
  'Não trabalha',
];

// Qual a principal ocupação do seu pai?
export const OCUPACAO_PAI_OPTIONS = [
  'Empregado de empresa',
  'Funcionário público do governo Federal, Estadual ou Municipal',
  'Trabalho remunerado por conta própria, com auxílio de parentes e/ou de familiares',
  'Trabalha em casa e/ou não tem atividade remunerada',
  'Sócio ou proprietário de empresa',
  'Artista (pintor, escritor, músico, cantor, ator, etc.)',
  'Trabalho remunerado por conta própria, com empregados',
  'Trabalha em entidade, organização ou instituição não governamental de cunho filantrópico, assistencial, religioso, de lazer ou outro',
  'Parlamentar ou cargo eleitoral, diplomata, militar',
  'Atleta profissional',
  'Outros',
  'Não trabalha',
];

// Qual a sua situação quanto à moradia?
export const SITUACAO_MORADIA_OPTIONS = [
  'Mora em casa de parentes ou amigos',
  'Mora em casa própria, quitada ou financiada',
  'Mora em casa dos pais, alugada',
  'Mora em casa dos pais, quitada ou financia',
  'Mora em casa alugada, paga por você',
  'Mora em república, casa de estudante, pensão ou pensionato',
  'Mora em casa dos pais, quitada ou financiada',
  'Mora em casa alugada para você, paga por seus pais',
  'Outros',
];

// Qual o Estado em que nasceu?
export const ESTADO_NASCIMENTO_OPTIONS = [
  'Paraná',
  'Rio Grande do Sul',
  'Santa Catarina',
  'São Paulo',
  'Mato Grosso do Sul',
  'Outro',
];

// Qual o local de sua residência?
export const LOCAL_RESIDENCIA_OPTIONS = [
  'Curitiba',
  'Demais municípios da Região Metropolitana',
  'Matinhos',
  'Pontal do Paraná',
  'Paranaguá',
  'Interior do Paraná',
  'Rio Grande do Sul',
  'Santa Catarina',
  'São Paulo',
  'Mato Grosso do Sul',
  'Outro',
];

// Qual o motivo que o levou a escolher seu curso?
export const MOTIVO_CURSO_OPTIONS = [
  'Possibilidade de cursar algo de que gosta',
  'Permite conciliar aula e trabalho',
  'Possibilidade de contribuir para a sociedade',
  'Mercado de trabalho e possibilidades salariais',
  'Por ter habilidades relacionadas ao curso',
  'Outro motivo',
  'Gosto pelas matérias do curso',
  'Baixa concorrência pelas vagas',
];

// Qual o nível de instrução da sua mãe?
// Qual o nível de instrução do seu pai?
export const NIVEL_INSTRUCAO_OPTIONS = [
  'Ensino fundamental incompleto',
  'Ensino fundamental completo',
  'Ensino médio incompleto',
  'Ensino médio completo',
  'Superior incompleto',
  'Superior completo',
  'Sem escolaridade',
  'Não sei informar',
];

// Qual o seu estado civil?
export const ESTADO_CIVIL_OPTIONS = ['Solteiro(a)', 'Casado(a)', 'Outro'];

// Qual o seu sexo?
export const SEXO_OPTIONS = ['Masculino', 'Feminino'];

// Qual é a sua participação na vida econômica de seu grupo familiar?
export const PARTICIPACAO_FAMILIAR_OPTIONS = [
  'Trabalho unicamente para cobrir minhas despesas',
  'Trabalho e sou o principal responsável pelo sustento da família',
  'Não tenho trabalho nem contribuo para o sustento da família',
  'Trabalho e contribuo em parte para o sustento da família',
];

// Quanto à sua escolha por este curso, você se considera
export const ESCOLHA_CURSO_OPTIONS = [
  'Indeciso (entre a opção que fez e uma outra)',
  'Muito indeciso (entre a opção que fez e várias outras)',
  'Decidido',
  'Muito decidido',
  'Absolutamente decidido',
  'Sem resposta',
];

// Que recursos você utilizou para fazer sua escolha de curso?
export const RECURSOS_ESCOLHA_CURSO_OPTIONS = [
  'Conversas com profissionais que atuam na área',
  'Conversas com familiares',
  'Conversas com professores',
  'Consulta a material informativo sobre cursos e profissões (guias de profissões, revistas, livros etc)',
  'Orientação profissional',
  'Nenhum em especial',
];

// Quem ou o que mais influenciou na escolha do curso?
export const INFLUENCIA_ESCOLHA_CURSO_OPTIONS = [
  'A família',
  'Colegas e amigos',
  'Teste vocacional',
  'Trabalho atual',
  'Professor ou escola',
  'Profissionais da área',
  'Imprensa e televisão',
  'Outros',
];

// Se já iniciou um curso universitário, qual sua razão para participar de um novo Processo Seletivo?
export const NOVO_PROCESSO_SELETIVO_OPTIONS = [
  'Por não ter gostado',
  'Por estar mais decidido e preparado',
  'Por ter maior disponibilidade para fazer este curso',
  'Por desejar outra formação',
  'Porque este curso complementa os estudos já feitos',
  'Não me enquadro nesta situação',
];

// Se você é indígena, qual é a sua etnia?
export const INDIGENA_OPTIONS = [
  'Não sou indígena',
  'Kaigang',
  'Outra Etnia',
  'Chipirá',
  'Tupi Guarani',
  'Bakairi',
  'Ava Guarani',
  'Xerente',
  'Potiguara',
  'Outra',
  'Candidato não se autoidentifica como indígena',
];

// Você apresenta alguma necessidade educacional especial?
export const NECESSIDADE_ESPECIAL_OPTIONS = ['Não', 'Sim', 'Não dispõe da informação', 'Sem Resposta'];

// Tipo de necessidade educacional especial
export const TIPO_NECESSIDADE_ESPECIAL_OPTIONS = [
  'TDHA',
  'Transtorno do Espectro do Autismo',
  'Deficiência Auditiva',
  'Dislexia, dislalia, disgrafia, discalculia',
  'Altas Habilidades/Superdotação',
  'Deficiência Intelectual',
  'Visão subnormal ou baixa visão',
  'Cegueira',
  'Surdez',
  'Deficiência Neuromotora',
  'Não se enquadra nas alternativas anteriores',
  'Sem resposta',
];

// Você já fez o vestibular em outros anos? (desconsidere treineiro)
export const VESTIBULAR_OUTROS_ANOS_OPTIONS = [
  'Não, este é o primeiro ano em que faço vestibular',
  'Sim, este é o segundo ano que faço vestibular',
  'Sim, este é o terceiro ano que faço vestibular',
  'Sim, este é o quarto ano que faço vestibular',
  'Sim, faço vestibular há mais de quatro anos',
];

// Você já iniciou algum curso superior?
export const INICIO_CURSO_SUPERIOR_OPTIONS = [
  'Não',
  'Sim, estou cursando',
  'Sim, mas não concluí',
  'Sim, mas já concluí',
];
