import { Component, Input } from '@angular/core';
import { BtnHandlerService } from '../../services/btn-handler.service';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-display-date',
  templateUrl: './display-date.component.html',
  styleUrls: ['./display-date.component.css'],
})
export class DisplayDateComponent {
  @Input() ques: any;
  clicked: any = false;
  constructor(
    public btnHandler: BtnHandlerService,
    public mainService: MainService
  ) {}
  edit(event: MouseEvent) {
    event.stopPropagation();
    this.clicked = true;
  }
  itemEvent() {
    this.clicked = true;
  }
}
