import { Component, Input } from '@angular/core';
import { BtnHandlerService } from '../../services/btn-handler.service';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-display-rating',
  templateUrl: './display-rating.component.html',
  styleUrls: ['./display-rating.component.css'],
})
export class DisplayRatingComponent {
  @Input() ques: any;
  clicked: any = false;
  applied = false;
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

  buttonOnHover() {}
}
