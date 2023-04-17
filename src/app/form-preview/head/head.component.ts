import { Component } from '@angular/core';
import { MainService } from '../../formbuilder/questions-container/services/main.service';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.css'],
})
export class HeadComponent {
  title = this.mainService.heading.head;
  description = this.mainService.heading.desc;
  constructor(public mainService: MainService) {}
}
