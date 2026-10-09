import type { QuizMeta, QuizQuestion } from '../types';

export const title = "Test Your Knowledge of Cooper's Rock History!";

export const meta: QuizMeta = {
  successTitle: 'Great Job!',
  successText: <span>
    You{"'"}re a Cooper{"'"}s Rock rockstar! Thank you for cultivating such a curatorial passion for our small town. It{"'"}s people like you who keep the spirit of Cooper{"'"}s Rock alive.<br /><br />
    Click here to access exclusive content from our archives with the password: <span className="fw-bold">{import.meta.env.VITE_CONTENT_5_PASSWORD}</span>
  </span>,
  successButtonText: 'Access Content',
  failButtonText: 'Retry',
  successButtonRoute: { name: 'Content', params: { assignment: 5 } },
  failTitle: 'Rats!',
  failText: "Looks like you could spend some more time hanging around town before you consider yourself a true Cooper's Rock historian. Take another look at our exhibit materials and try again soon!"
};

export const questions: QuizQuestion[] = [
  {
    question: "What year was the Cooper Heritage Foundation founded?",
    answers: [
      { key: 'A', text: '1989', correct: false },
      { key: 'B', text: '1992', correct: true },
      { key: 'C', text: '1995', correct: false },
      { key: 'D', text: '1998', correct: false }
    ]
  },
  {
    question: 'At what age did Sydney Cooper die?',
    answers: [
      {
        key: 'A',
        text: '87',
        correct: false
      },
      {
        key: 'B',
        text: '56',
        correct: true
      },
      {
        key: 'C',
        text: '63',
        correct: false
      },
      {
        key: 'D',
        text: '74',
        correct: false
      }
    ]
  },
  {
    question:
      'Which of these productions does the Cooper Community Playhouse reenact every year?',
    answers: [
      {
        key: 'A',
        text: '1897 Public Hanging of a Madman',
        correct: true
      },
      { key: 'B', text: 'A Tale of Two Heads', correct: false },
      { key: 'C', text: "Sydney Cooper's Secret", correct: false },
      { key: 'D', text: "Cooper's Rock Rock Opera", correct: false }
    ]
  },
  {
    question: 'What year was Harris Mill built?',
    answers: [
      {
        key: 'A',
        text: '1875',
        correct: false
      },
      { key: 'B', text: '1906', correct: false },
      { key: 'C', text: '1880', correct: true },
      { key: 'D', text: '1912', correct: false }
    ]
  },
  {
    question:
      'According to the 1890 Cooper\'s Rock census, which establishment did Isaac Silverheel run?',
    answers: [
      {
        key: 'A',
        text: 'General Store',
        correct: true
      },
      {
        key: 'B',
        text: 'School',
        correct: false
      },
      {
        key: 'C',
        text: 'Saloon',
        correct: false
      },
      {
        key: 'D',
        text: 'Post Office',
        correct: false
      }
    ]
  }
]; 