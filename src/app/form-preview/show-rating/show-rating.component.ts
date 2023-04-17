import { Component, Input } from '@angular/core';
import { MainService } from '../../formbuilder/questions-container/services/main.service';

@Component({
  selector: 'app-show-rating',
  templateUrl: './show-rating.component.html',
  styleUrls: ['./show-rating.component.css'],
})
export class ShowRatingComponent {
  @Input() ques: any;
  constructor(public mainService: MainService) {}
}
