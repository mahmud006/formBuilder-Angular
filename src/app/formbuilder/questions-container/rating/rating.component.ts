import { Component } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  color = 'primary';
  checked = false;
  disabled = false;
  selectedLevel = 5;
  selectedSymbol = 'Star';
  // get levelArray() {
  //   return Array(this.selectedLevel)
  //     .fill(0)
  //     .map((x, i) => i);
  // }

  levels = [
    { value: 2, viewValue: '2' },
    { value: 3, viewValue: '3' },
    { value: 4, viewValue: '4' },
    { value: 5, viewValue: '5' },
    { value: 6, viewValue: '6' },
    { value: 7, viewValue: '7' },
    { value: 8, viewValue: '8' },
    { value: 9, viewValue: '9' },
    { value: 10, viewValue: '10' },
  ];
  symbols = [
    { value: 'Star', viewValue: 'Star' },
    { value: 'looks_one', viewValue: 'Number' },
    { value: 'favorite', viewValue: 'Heart' },
    { value: 'workspace_premium', viewValue: 'Ribbon' },
    { value: 'thumb_up', viewValue: 'Thumb like' },
    { value: 'sentiment_very_satisfied', viewValue: 'Smile face' },
    { value: 'flag', viewValue: 'Flag' },
    { value: 'lightbulb', viewValue: 'Lightbulb' },
    { value: 'military_tech', viewValue: 'Trophy' },
    { value: 'new_releases', viewValue: 'Checkmark' },
  ];
}
