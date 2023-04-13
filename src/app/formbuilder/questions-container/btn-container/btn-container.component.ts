import { Component } from '@angular/core';
import { BtnHandlerService } from '../services/btn-handler.service';

@Component({
  selector: 'app-btn-container',
  templateUrl: './btn-container.component.html',
  styleUrls: ['./btn-container.component.css'],
})
export class BtnContainerComponent {
  isClicked = false;
  constructor(public btnHandler: BtnHandlerService) {}
}
