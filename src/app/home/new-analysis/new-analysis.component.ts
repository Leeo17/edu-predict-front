import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, startWith, switchMap } from 'rxjs';
import { Course } from '../../shared/interfaces';
import { ApiService } from '../../shared/services/api.service';

@Component({
  selector: 'app-new-analysis',
  templateUrl: './new-analysis.component.html',
  styleUrls: ['./new-analysis.component.scss'],
})
export class NewAnalysisComponent implements OnInit {
  dadosAcademicosForm!: FormGroup;
  isLoading = false;
  cursos: Observable<Course[]> | undefined;

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
