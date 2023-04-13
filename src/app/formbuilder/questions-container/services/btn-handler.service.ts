import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BtnHandlerService {
  showMcqForm = false;
  showTextForm = false;
  showRatingForm = false;
  showDateForm = false;

  constructor() {}

  showForm(e: any) {
    console.log(e);
    this.showMcqForm = true;
    // if (e.target.innerText == 'Choice') {
    //   this.showMcqForm = true;
    // }
    // if (e.target.innerText == 'Text') {
    //   this.showTextForm = true;
    // }
    // if (e.target.innerText == 'Rating') {
    //   this.showRatingForm = true;
    // }
    // if (e.target.innerText == 'Date') {
    //   this.showDateForm = true;
    // }
    // e.stopPropagation();
  }
}
