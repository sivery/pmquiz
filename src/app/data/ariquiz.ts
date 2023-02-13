export interface QuestionDefinition {
  topic: string;
  session: string;
  id: number;
  extra?: string;
  response?: QuestionResponse[];
}

interface Data {
  tbxAnswer: string;
  hidQueId: string;
  hidCorrect: string;
}

interface QuestionData {
  data: Data[];
  view: any;
}

interface Question {
  hasCorrectAnswer: boolean;
  questionData: QuestionData;
  questionId: number;
  questionText: string;
  questionType: string;
  questionIndex: string;
  completed: boolean;
}

export interface QuestionResponse {
  pageId: number;
  pageNumber: number;
  description: string;
  questions: Question[];
  pageTime: any;
}
