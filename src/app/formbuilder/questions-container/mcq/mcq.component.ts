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
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css'],
})
export class McqComponent implements OnInit {
  @Input() ques: any;
  @Output() newItemEvent = new EventEmitter<string>();

  question: string = 'Question';
  questionId: any = 1;
  options: string[] = ['Option 1', 'Option 2'];
  optionNo: any = 3;
  constructor(
    public btnHandler: BtnHandlerService,
    private elementRef: ElementRef,
    public mainService: MainService
  ) {}
  ngOnInit() {
    this.question = this.ques?.question || this.question;
    this.options = this.ques?.options || this.options;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    event.stopPropagation();
    const targetElement = event.target as HTMLElement;
    console.log(targetElement);
    if (!this.elementRef.nativeElement.contains(targetElement)) {
      if (!this.ques) {
        this.mainService.addFormData(
          this.question,
          this.mainService.questionId++,
          this.options,
          'mcq',
          0,
          ''
        );
        this.question = 'Question';
        this.options = ['Option1', 'Option2'];
        this.optionNo = 3;
        this.btnHandler.showMcqForm = false;
      } else if (this.ques) {
        this.mainService.insertFormData(
          this.question,
          this.ques.questionId,
          this.options,
          'mcq',
          0,
          ''
        );
        this.newItemEvent.emit();
        console.log('hlw');
      }
    }
  }
  addOption() {
    this.optionNo = this.ques?.options.length + 1 || this.optionNo;
    this.options = this.ques?.options || this.options;
    this.options.push(`Option ${this.optionNo++}`);
  }
}
