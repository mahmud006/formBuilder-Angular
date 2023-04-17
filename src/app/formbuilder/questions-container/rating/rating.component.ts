import {
  Component,
  OnInit,
  HostListener,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { BtnHandlerService } from '../services/btn-handler.service';
import { MainService } from '../services/main.service';
import { MatFormField } from '@angular/material/form-field';

interface Levels {
  value: number;
  viewValue: string;
}
@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css'],
})
export class RatingComponent {
  color = 'primary';
  checked = false;
  disabled = false;
  selectedLevel: number = 5;
  selectedSymbol = 'Star';

  levels: Levels[] = [
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
  @Input() ques: any;
  @Output() newItemEvent = new EventEmitter<string>();

  question: string = 'Question';
  questionId: any = 1;
  showRatingForm = false;

  constructor(
    public btnHandler: BtnHandlerService,
    private elementRef: ElementRef,
    public mainService: MainService
  ) {}
  ngOnInit() {
    this.question = this.ques?.question || this.question;
    this.selectedLevel = this.ques?.selectedLevel || this.selectedLevel;
    this.selectedSymbol = this.ques?.selectedSymbol || this.selectedSymbol;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    event.stopPropagation();
    const targetElement = event.target as HTMLElement;
    console.log(targetElement);
    if (
      !this.elementRef.nativeElement.contains(targetElement) &&
      !targetElement.classList.contains('mat-mdc-select-value')
    ) {
      if (this.btnHandler.showRatingForm === true && !this.ques) {
        this.mainService.addFormData(
          this.question,
          this.mainService.questionId++,
          [],
          'rating',
          this.selectedLevel,
          this.selectedSymbol
        );
        this.question = 'Question';
        this.btnHandler.showRatingForm = false;
      } else if (this.ques) {
        this.mainService.insertFormData(
          this.question,
          this.ques.questionId,
          [],
          'rating',
          this.selectedLevel,
          this.selectedSymbol
        );
        this.newItemEvent.emit();
      }
    }
  }
}
