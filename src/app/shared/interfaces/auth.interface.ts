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
  senha: string;
  confirmar_senha: string;
}

export interface LoginResponse {
  access_token: string;
  user: User;
}
