import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ConfirmationService} from "primeng/api";
import {QuizComponent} from "./quiz/quiz.component";
import {PretextComponent} from "./pretext/pretext.component";
import {FormComponent} from "./form/form.component";
import {ResultsComponent} from "./results/results.component";
import {FormsModule} from "@angular/forms";
import {CoreModule} from "./core";
import {ButtonModule} from "primeng/button";
import {MultiSelectModule} from "primeng/multiselect";
import {AccordionModule} from "primeng/accordion";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {RadioButtonModule} from "primeng/radiobutton";
import {PanelModule} from "primeng/panel";
import {DeferModule} from "primeng/defer";
import {ConfirmDialogModule} from "primeng/confirmdialog";
import {InputTextModule} from "primeng/inputtext";
import {InputNumberModule} from "primeng/inputnumber";
import {TableModule} from "primeng/table";
import {MessagesModule} from "primeng/messages";
import {PretextFilterPipe} from "./pretext/pretext-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    PretextFilterPipe,
    PretextComponent,
    FormComponent,
    ResultsComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    CoreModule,
    AppRoutingModule,
    ButtonModule,
    MultiSelectModule,
    AccordionModule,
    PanelModule,
    BrowserAnimationsModule,
    RadioButtonModule,
    DeferModule,
    ConfirmDialogModule,
    InputTextModule,
    InputNumberModule,
    TableModule,
    MessagesModule
  ],
  providers: [ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
