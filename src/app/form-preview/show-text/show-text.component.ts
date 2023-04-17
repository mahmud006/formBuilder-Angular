import { Component, Input } from '@angular/core';
import { MainService } from '../../formbuilder/questions-container/services/main.service';

@Component({
  selector: 'app-show-text',
  templateUrl: './show-text.component.html',
  styleUrls: ['./show-text.component.css'],
})
export class ShowTextComponent {
  @Input() ques: any;
  constructor(public mainService: MainService) {}
}
