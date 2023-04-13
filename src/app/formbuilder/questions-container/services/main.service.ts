import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MainService {
  public formData: any[] = [];
  public questionId: any = 1;
  constructor() {}

  addFormData(
    question: string,
    questionId: Number,
    options: string[],
    indicator: string
  ) {
    this.formData.push({ question, questionId, options, indicator });
  }
  insertFormData(
    question: string,
    questionId: any,
    options: string[],
    indicator: string
  ) {
    this.formData.splice(questionId - 1, 1, {
      question,
      questionId,
      options,
      indicator,
    });
  }
  getFormData() {
    return this.formData;
  }
}
