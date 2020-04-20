import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Exam } from '../dto/exam';
 
@Injectable({
  providedIn: 'root'
})
export class ExamService {
  _url = '';
  constructor(private http: HttpClient) { }

  saveExam(exam: Exam): Observable<string>{
    return this.http.post<string>(this._url,exam);
  }
}
