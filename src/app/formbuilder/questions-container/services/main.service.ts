import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class MainService {
  public formData: any[] = [];
  public heading = { head: 'Untitled form', desc: 'Description' };
  stringified = localStorage.getItem('formData');

  public questionId: any = 1;
  constructor() {
    this.formData = this.stringified ? JSON.parse(this.stringified) : [];
    this.questionId = this.formData.length + 1;
  }
  addHeadingData(title: string, description: string) {
    this.heading = { head: title, desc: description };
  }
  addFormData(
    question: string,
    questionId: Number,
    options: string[],
    indicator: string,
    selectedLevel: number,
    selectedSymbol: string
  ) {
    this.formData.push({
      question,
      questionId,
      options,
      indicator,
      selectedLevel,
      selectedSymbol,
    });
  }
  insertFormData(
    question: string,
    questionId: any,
    options: string[],
    indicator: string,
    selectedLevel: number,
    selectedSymbol: string
  ) {
    this.formData.splice(questionId - 1, 1, {
      question,
      questionId,
      options,
      indicator,
      selectedLevel,
      selectedSymbol,
    });
  }
  getFormData() {
    return this.formData;
  }
}
