import { Component, HostListener, ElementRef } from '@angular/core';
import { MainService } from '../services/main.service';
@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css'],
})
export class HeadingComponent {
  constructor(
    private elementRef: ElementRef,
    public mainService: MainService
  ) {}
  title = this.mainService.heading.head || 'Untitled form';
  description = this.mainService.heading.desc || 'Description';
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
      this.mainService.addHeadingData(this.title, this.description);
      this.showingInputs = false;
    }
  }
}
