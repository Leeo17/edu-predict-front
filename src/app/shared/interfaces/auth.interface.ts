export interface User {
  data_cadastro: Date;
  email: string;
  email_verificado: boolean;
  nome_completo: string;
  usuario_ativo: boolean;
}

export interface LoginResponse {
  access_token: string;
  user: User;
}
