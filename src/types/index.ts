export interface Question {
  id: number;
  text: string;
  factor: 'E' | 'A' | 'C' | 'N' | 'O';
  isReversed?: boolean;
}

export interface Answer {
  questionId: number;
  score: number;
}

export interface Result {
  factor: string;
  score: number;
  description: string;
}

export interface TestData {
  participantName: string;
  results: Result[];
}