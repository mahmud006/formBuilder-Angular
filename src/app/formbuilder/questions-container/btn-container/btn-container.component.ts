import { Component, HostListener, ElementRef, ViewChild } from '@angular/core';
import { BtnHandlerService } from '../services/btn-handler.service';
import { McqComponent } from '../mcq/mcq.component';

@Component({
  selector: 'app-btn-container',
  templateUrl: './btn-container.component.html',
  styleUrls: ['./btn-container.component.css'],
})
export class BtnContainerComponent {
  // @ViewChild(McqComponent) childComponent!: McqComponent;
  isClicked = false;
  constructor(
    private elementRef: ElementRef,
    public btnHandler: BtnHandlerService
  ) {}
  // @HostListener('document:click', ['$event'])
  // onDocumentClick(event: MouseEvent) {
  //   event.stopPropagation();
  //   event.preventDefault();
  //   const targetElement = event.target as HTMLElement;

  //   if (!this.elementRef.nativeElement.contains(targetElement)) {
  //     this.isClicked = false;
  //   }
  // }
  showForm(event: Event) {
    if (this.btnHandler.showMcqForm === false) {
      this.btnHandler.showMcqForm = true;
      // event.stopPropagation();
      this.isClicked = !this.isClicked;
    } else {
      // this.childComponent.onDocumentClick(new MouseEvent('click'));
    }
  }
}
