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

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.css'],
})
export class DateComponent {
  @Input() ques: any;
  @Output() newItemEvent = new EventEmitter<string>();
  color = 'primary';
  checked = false;
  disabled = false;
  question: string = 'Question';
  questionId: any = 1;
  showDateForm = false;
  constructor(
    public btnHandler: BtnHandlerService,
    private elementRef: ElementRef,
    public mainService: MainService
  ) {}
  ngOnInit() {
    this.question = this.ques?.question || this.question;
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    event.stopPropagation();
    const targetElement = event.target as HTMLElement;

    if (!this.elementRef.nativeElement.contains(targetElement)) {
      if (this.btnHandler.showDateForm === true && !this.ques) {
        this.mainService.addFormData(
          this.question,
          this.mainService.questionId++,
          [],
          'date',
          0,
          ''
        );
        this.question = 'Question';
        this.btnHandler.showDateForm = false;
      } else if (this.ques) {
        this.mainService.insertFormData(
          this.question,
          this.ques.questionId,
          [],
          'date',
          0,
          ''
        );
        this.newItemEvent.emit();
      }
    }
  }
}
