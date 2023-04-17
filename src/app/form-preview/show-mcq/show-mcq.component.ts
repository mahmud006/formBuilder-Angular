import { Component, Input } from '@angular/core';
import { MainService } from '../../formbuilder/questions-container/services/main.service';

@Component({
  selector: 'app-show-mcq',
  templateUrl: './show-mcq.component.html',
  styleUrls: ['./show-mcq.component.css'],
})
export class ShowMcqComponent {
  @Input() ques: any;
  constructor(public mainService: MainService) {}
}
