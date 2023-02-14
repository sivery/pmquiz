import { Component, OnInit } from '@angular/core';
import {Constants} from "@app/data/constants";
import {QuestionForm, QuestionSet} from "@app/data/questions";
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {QuizUtils} from "@app/utils/quiz-utils";
import {SelectItem} from "primeng/api";
import {Message} from "primeng/api";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public Math = Math;

  public msgs: Message[] = [];

  public nbrQuestions: number = 0;

  public random: boolean = true;

  public showPretextSection: boolean = false;

  public topics: SelectItem[] = [
    {label: Constants.PM, value: Constants.PM},
  ];

  public selectedTopics: string[] = [Constants.PM];

  public sessions: SelectItem[] = [
    {label: Constants.Q1, value: Constants.Q1},
    {label: Constants.Q2, value: Constants.Q2},
    // {label: Constants.Q3, value: Constants.Q3},
    // {label: Constants.Q4, value: Constants.Q4},
    // {label: Constants.Q5, value: Constants.Q5},
    // {label: Constants.Q6, value: Constants.Q6},
    // {label: Constants.EXTRA, value: Constants.EXTRA},
  ];

  public selectedSessions: string[] = [];

  private questionSets: QuestionSet[] = [];
  public selectedQuestionSets: QuestionSet[] = [];

  public maxNbrQuestion: number | undefined;

  constructor(private http: HttpClient,
              private route: ActivatedRoute,
              private router: Router  ) { }

  ngOnInit(): void {
    let self = this;

    sessionStorage.clear();

    this.http.get<QuestionSet[]>('questions.json').subscribe((qs: QuestionSet[]) => {
      self.questionSets = qs;

      self.selectedQuestionSets = [];
      self.selectedQuestionSets = self.selectedQuestionSets.concat(self.questionSets);
      self.countQuestions();
    });

    self.showMessage();
  }

  private showMessage() {

  }

  public selectQuestionSets() {
    let self = this;
    let selectedQuestionSets: QuestionSet[] = [];
    selectedQuestionSets = selectedQuestionSets.concat(self.questionSets);
    if(this.selectedTopics && this.selectedTopics.length > 0) {
      selectedQuestionSets = selectedQuestionSets.filter(qs => {
        return self.selectedTopics.indexOf(qs.topic) > -1;
      });
    }
    if(this.selectedSessions && this.selectedSessions.length > 0) {
      selectedQuestionSets = selectedQuestionSets.filter(qs => {
        return self.selectedSessions.indexOf(qs.session) > -1;
      });
    }

    self.selectedQuestionSets = selectedQuestionSets;
    this.countQuestions();
  }

  private countQuestions() {
    let nbrQuestions = 0;
    this.selectedQuestionSets.forEach(qs => {
      nbrQuestions += qs.questions.length;
    })
    this.nbrQuestions = nbrQuestions;
    this.showPretextSection = this.selectedQuestionSets.findIndex(qs => {return qs.pretext}) > -1;
  }

  public startQuiz() {
    sessionStorage.setItem('selectedQuestionSets', JSON.stringify(this.selectedQuestionSets));
    sessionStorage.setItem('random', JSON.stringify(this.random));
    if(this.maxNbrQuestion) {
      sessionStorage.setItem('maxNbrQuestion', JSON.stringify(Math.floor(this.maxNbrQuestion)));
    }

    if(this.showPretextSection) {
      this.router.navigate(['/preambule']);
    }
    else {
      this.router.navigate(['/quiz']);
    }
  }

}
