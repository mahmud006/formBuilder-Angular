import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BtnHandlerService {
  showMcqForm = false;
  showTextForm = false;
  showRatingForm = false;
  showDateForm = false;

  constructor() {}
}
