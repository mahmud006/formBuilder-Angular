import { Component, Input } from '@angular/core';
import { MainService } from '../../formbuilder/questions-container/services/main.service';

@Component({
  selector: 'app-show-date',
  templateUrl: './show-date.component.html',
  styleUrls: ['./show-date.component.css'],
})
export class ShowDateComponent {
  @Input() ques: any;
  constructor(public mainService: MainService) {}
}
