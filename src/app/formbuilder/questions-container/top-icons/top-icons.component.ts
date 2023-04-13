import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MainService } from '../services/main.service';
import { BtnHandlerService } from '../services/btn-handler.service';

@Component({
  selector: 'app-top-icons',
  templateUrl: './top-icons.component.html',
  styleUrls: ['./top-icons.component.css'],
})
export class TopIconsComponent {
  @Input() ques: any;
  constructor(
    public mainService: MainService,
    public btnHandler: BtnHandlerService
  ) {}
  onDelete() {
    console.log(this.ques);
    if (this.ques) {
      this.mainService.formData.splice(this.ques.questionId - 1, 1);
      this.mainService.formData.forEach((element, idx) => {
        element.questionId = idx + 1;
      });
      this.mainService.questionId--;
    } else {
      this.btnHandler.showMcqForm = false;
    }
  }
}
