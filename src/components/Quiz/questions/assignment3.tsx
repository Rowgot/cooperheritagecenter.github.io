import type { QuizMeta, QuizQuestion } from '../types';

export const title = "Test Your Knowledge of Ancient Symbols!";

export const meta: QuizMeta = {
  successTitle: 'Great Job!',
  successText: <span>
    You{"'"}re a regular petroglyph and pictogram pro! No terra nullius can withhold its secret histories from an archeological mind like yours.<br /><br />
    Click here to access exclusive content from our archives with the password: <span className="fw-bold">{import.meta.env.VITE_CONTENT_3_PASSWORD}</span>
  </span>,
  successButtonText: 'Access Content',
  failButtonText: 'Retry',
  successButtonRoute: { name: 'Content', params: { assignment: 3 } },
  failTitle: 'Rats!',
  failText: "Looks like you might need to give this archeology article another read. Take a walk back through the speleothems and see if you can better spot the differences between these ancient symbols."
};

export const questions: QuizQuestion[] = [
  {
    question: 'Which symbol is Cuneiform?',
    answers: [
      { key: 'A', text: '', picture: '3/1a-quiz-3.png', correct: false },
      {
        key: 'B',
        picture: '3/1b-quiz-3.png',
        correct: true,
        text: ''
      },
      { key: 'C', text: '', picture: '3/1c-quiz-3.png', correct: false },
      { key: 'D', text: '', picture: '3/1d-quiz-3.png', correct: false }
    ]
  },
  {
    question: 'Which symbol is Mayan?',
    answers: [
      {
        key: 'A',
        picture: '3/2a-quiz-3.png',
        correct: true,
        text: ''
      },
      {
        key: 'B',
        picture: '3/2b-quiz-3.png',
        correct: false,
        text: ''
      },
      {
        key: 'C',
        picture: '3/2c-quiz-3.png',
        correct: false,
        text: ''
      },
      {
        key: 'D',
        picture: '3/2d-quiz-3.png',
        correct: false,
        text: ''
      }
    ]
  },
  {
    question: 'Which symbol is from the Ice Age?',
    answers: [
      {
        key: 'A',
        picture: '3/3a-quiz-3.png',
        correct: false,
        text: ''
      },
      { key: 'B', picture: '3/3b-quiz-3.png', correct: false, text: '' },
      { key: 'C', picture: '3/3c-quiz-3.png', correct: false, text: '' },
      { key: 'D', picture: '3/3d-quiz-3.png', correct: true, text: '' }
    ]
  },
  {
    question: 'Which symbol is Aztec?',
    answers: [
      {
        key: 'A',
        picture: '3/4a-quiz-3.png',
        correct: true,
        text: ''
      },
      { key: 'B', picture: '3/4b-quiz-3.png', correct: false, text: '' },
      { key: 'C', picture: '3/4c-quiz-3.png', correct: false, text: '' },
      { key: 'D', picture: '3/4d-quiz-3.png', correct: false, text: '' }
    ]
  },
  {
    question: 'Which symbol is from Foxfire Cave?',
    answers: [
      {
        key: 'A',
        picture: '3/5a-quiz-3.png',
        correct: false,
        text: ''
      },
      {
        key: 'B',
        picture: '3/5b-quiz-3.png',
        correct: false,
        text: ''
      },
      {
        key: 'C',
        picture: '3/5c-quiz-3.png',
        correct: true,
        text: ''
      },
      {
        key: 'D',
        picture: '3/5d-quiz-3.png',
        correct: false,
        text: ''
      }
    ]
  }
]; 
