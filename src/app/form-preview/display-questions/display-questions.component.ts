import { Component } from '@angular/core';
import { MainService } from '../../formbuilder/questions-container/services/main.service';
@Component({
  selector: 'app-display-questions',
  templateUrl: './display-questions.component.html',
  styleUrls: ['./display-questions.component.css'],
})
export class DisplayQuestionsComponent {
  constructor(public mainService: MainService) {}
}
