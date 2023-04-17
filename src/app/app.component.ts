import { Component, HostListener } from '@angular/core';
import { MainService } from './formbuilder/questions-container/services/main.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'formBuilder';
  // onClick(event: any) {}
  constructor(public mainService: MainService) {}
  @HostListener('window:beforeunload', ['$event'])
  beforeUnloadHandler($event: any) {
    //add formData in localstorage
    localStorage.setItem('formData', JSON.stringify(this.mainService.formData));
  }
}
