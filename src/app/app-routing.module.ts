import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: FormbuilderComponent,
  },
  { path: 'preview', component: FormPreviewComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
