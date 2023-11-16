export interface User {
  data_cadastro: Date;
  email: string;
  email_verificado: boolean;
  nome: string;
  sobrenome: string;
  usuario_ativo: boolean;
}

export interface UserInput {
  email: string;
  nome: string;
  sobrenome: string;
}

export interface UserPassInput {
  senha: string;
  confirmar_senha: string;
  codigo_verificacao: string;
}

export interface LoginResponse {
  access_token: string;
  user: User;
}
