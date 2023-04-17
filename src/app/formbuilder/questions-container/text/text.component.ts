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
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css'],
})
export class TextComponent {
  @Input() ques: any;
  @Output() newItemEvent = new EventEmitter<string>();

  question: string = 'Question';
  questionId: any = 1;
  showTextForm = false;
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
      if (this.btnHandler.showTextForm === true && !this.ques) {
        this.mainService.addFormData(
          this.question,
          this.mainService.questionId++,
          [],
          'text',
          0,
          ''
        );
        this.question = 'Question';
        this.btnHandler.showTextForm = false;
      } else if (this.ques) {
        this.mainService.insertFormData(
          this.question,
          this.ques.questionId,
          [],
          'text',
          0,
          ''
        );
        this.newItemEvent.emit();
      }
    }
  }
}
