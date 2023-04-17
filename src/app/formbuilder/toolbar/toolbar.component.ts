import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css'],
  // encapsulation: ViewEncapsulation.None,
})
export class ToolbarComponent {
  constructor(private router: Router) {}
  onPreviewClick() {
    this.router.navigate(['/preview']);
  }
}
