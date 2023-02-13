import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormComponent} from "./form/form.component";
import {PretextComponent} from "./pretext/pretext.component";
import {QuizComponent} from "./quiz/quiz.component";
import {Route} from "./core";
import {CanDeactivateQuizGuard} from "./quiz/can-deactivate-quiz.guard";
import {ResultsComponent} from "./results/results.component";

const routes: Routes = [
  Route.withShell([
    {path: '', component: FormComponent},
    {path: 'preambule', component: PretextComponent},
    {path: 'quiz', component : QuizComponent, data: { responses: false }, canDeactivate: [CanDeactivateQuizGuard]},
    {path: 'resultats', component: ResultsComponent},
    {path: 'reponses', component: QuizComponent, data: { responses: true }, canDeactivate: [CanDeactivateQuizGuard]},
    { path: '**', redirectTo: '/', pathMatch: 'full' },
  ])
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
