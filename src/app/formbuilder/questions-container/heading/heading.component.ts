import {
  Component,
  Input,
  Output,
  EventEmitter,
  HostListener,
  ViewChild,
  ElementRef,
  OnInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
})
export class HeadingComponent {
  constructor(private elementRef: ElementRef) {}
  title = 'Untitled form';
  description = 'Description';
  showingInputs = false;

  showInputs() {
    this.showingInputs = true;
  }
  onClick(event: MouseEvent) {
    console.log(event.target);
    event.stopPropagation();
  }
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const targetElement = event.target as HTMLElement;
    if (
      !this.elementRef.nativeElement.children[0].children[0].contains(
        targetElement
      )
    ) {
      this.showingInputs = false;
    }
  }
}
