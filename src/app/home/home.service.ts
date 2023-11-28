import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs';
import { NewAnalysis, UserInput } from '../shared/interfaces';
import { ApiService } from '../shared/services/api.service';
import { MessageService } from '../shared/services/message.service';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  constructor(private apiService: ApiService, private messageService: MessageService) {}

  createUser(input: UserInput) {
    return this.apiService.createUser(input).pipe(
      tap((res) => {
        if (res) {
          this.messageService.showNotification(
            'Usuário criado com sucesso. É necessário verificar o e-mail para ativar a conta e definir a senha.'
          );
        }
      }),
      catchError((err) => {
        this.messageService.showNotification(err.error.detail);
        throw err;
      })
    );
  }

  newAnalysis(input: NewAnalysis) {
    return this.apiService.newAnalysis(input).pipe(
      tap((res) => {
        if (res) {
          this.messageService.showNotification('Análise realizada com sucesso!');
        }
      }),
      catchError((err) => {
        this.messageService.showNotification(err.error.detail);
        throw err;
      })
    );
  }
}
