import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MainService {
  public formData: any[] = [];
  public heading = { head: '', desc: '' };
  stringified = localStorage.getItem('formData');
  stringifiedHeading = localStorage.getItem('formHeading');
  public questionId: any = 1;
  constructor() {
    this.formData = this.stringified ? JSON.parse(this.stringified) : [];
    this.questionId = this.formData.length + 1;
    this.heading = this.stringifiedHeading
      ? JSON.parse(this.stringifiedHeading)
      : [];
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
