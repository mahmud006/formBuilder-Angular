import { Component, Input } from '@angular/core';
import { BtnHandlerService } from '../../services/btn-handler.service';
import { MainService } from '../../services/main.service';

@Component({
  selector: 'app-display-mcq',
  templateUrl: './display-mcq.component.html',
  styleUrls: ['./display-mcq.component.css'],
})
export class DisplayMcqComponent {
  @Input() ques: any;
  clicked: any = false;
  options: string[] = ['Option1', 'Option2'];
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
    console.log('hlwwwwwwwww sajib vai');
  }
}
