import { Component, OnInit, AfterViewInit } from '@angular/core';
import { MainService } from './services/main.service';
import { BtnHandlerService } from './services/btn-handler.service';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
@Component({
  selector: 'app-questions-container',
  templateUrl: './questions-container.component.html',
  styleUrls: ['./questions-container.component.css'],
})
export class QuestionsContainerComponent {
  public questionsArr: any[] = [];
  isClicked = false;
  constructor(
    public mainService: MainService,
    public btnHandler: BtnHandlerService
  ) {}
  edit() {
    this.isClicked = true;
  }
  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(
      this.mainService.formData,
      event.previousIndex,
      event.currentIndex
    );
    this.mainService.formData.forEach((element, idx) => {
      element.questionId = idx + 1;
    });
  }
}
