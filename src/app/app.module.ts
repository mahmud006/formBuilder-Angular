import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormbuilderComponent } from './formbuilder/formbuilder.component';
import { FormPreviewComponent } from './form-preview/form-preview.component';
import { HeaderComponent } from './formbuilder/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { ToolbarComponent } from './formbuilder/toolbar/toolbar.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { QuestionsContainerComponent } from './formbuilder/questions-container/questions-container.component';
import { HeadingComponent } from './formbuilder/questions-container/heading/heading.component';
import { BtnContainerComponent } from './formbuilder/questions-container/btn-container/btn-container.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { McqComponent } from './formbuilder/questions-container/mcq/mcq.component';
import { MatRadioModule } from '@angular/material/radio';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
// import { MatFormFieldControl } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { TopIconsComponent } from './formbuilder/questions-container/top-icons/top-icons.component';
import { FunctionalityBtnsComponent } from './formbuilder/questions-container/functionality-btns/functionality-btns.component';
import { TextComponent } from './formbuilder/questions-container/text/text.component';
import { RatingComponent } from './formbuilder/questions-container/rating/rating.component';
import { DateComponent } from './formbuilder/questions-container/date/date.component';
import { DisplayMcqComponent } from './formbuilder/questions-container/mcq/display-mcq/display-mcq.component';
import { DisplayTextComponent } from './formbuilder/questions-container/text/display-text/display-text.component';
import { DisplayRatingComponent } from './formbuilder/questions-container/rating/display-rating/display-rating.component';
import { DisplayDateComponent } from './formbuilder/questions-container/date/display-date/display-date.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './form-preview/navbar/navbar.component';
import { HeadComponent } from './form-preview/head/head.component';
import { DisplayQuestionsComponent } from './form-preview/display-questions/display-questions.component';
import { ShowMcqComponent } from './form-preview/show-mcq/show-mcq.component';
import { ShowTextComponent } from './form-preview/show-text/show-text.component';
import { ShowRatingComponent } from './form-preview/show-rating/show-rating.component';
import { ShowDateComponent } from './form-preview/show-date/show-date.component';
import { MAT_RADIO_DEFAULT_OPTIONS } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
@NgModule({
  declarations: [
    AppComponent,
    FormbuilderComponent,
    FormPreviewComponent,
    HeaderComponent,
    ToolbarComponent,
    QuestionsContainerComponent,
    HeadingComponent,
    BtnContainerComponent,
    McqComponent,
    TopIconsComponent,
    FunctionalityBtnsComponent,
    TextComponent,
    RatingComponent,
    DateComponent,
    DisplayMcqComponent,
    DisplayTextComponent,
    DisplayRatingComponent,
    DisplayDateComponent,
    NavbarComponent,
    HeadComponent,
    DisplayQuestionsComponent,
    ShowMcqComponent,
    ShowTextComponent,
    ShowRatingComponent,
    ShowDateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatMenuModule,
    FormsModule,
    MatRadioModule,
    MatExpansionModule,
    MatCardModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatInputModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
    MatDividerModule,
    DragDropModule,
    MatNativeDateModule,
    MatDatepickerModule,
  ],
  providers: [
    {
      provide: MAT_RADIO_DEFAULT_OPTIONS,
      useValue: { color: 'primary' },
    },
  ],
  bootstrap: [AppComponent],
  exports: [MatGridListModule],
})
export class AppModule {}
