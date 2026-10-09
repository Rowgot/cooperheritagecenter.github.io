import type { QuizMeta, QuizQuestion } from '../types';

export const title = "Test Your Knowledge of Strahlenberg History!";

export const meta: QuizMeta = {
  successTitle: 'Great Job!',
  successText: <span>
    You{"'"}re clearly no stranger to Strahlenberg history, thanks to your diligent study of CHC materials and appreciation of mining community history.<br /><br />
    Click here to access exclusive content from our archives with the password: <span className="fw-bold">{import.meta.env.VITE_CONTENT_4_PASSWORD}</span>
  </span>,
  successButtonText: 'Access Content',
  failButtonText: 'Retry',
  successButtonRoute: { name: 'Content', params: { assignment: 4 } },
  failTitle: 'Rats!',
  failText: "Looks like you might have missed the mining memo. Take another peek down the mineshaft and see what you can glean from the gleam."
};

export const questions: QuizQuestion[] = [
  {
    question:
      'When did the Strahlenberg Mining Company establish its first mine in Cooper\'s Rock?',
    answers: [
      { key: 'A', text: '1742', correct: false },
      { key: 'B', text: '1850', correct: false },
      { key: 'C', text: '1875', correct: true },
      { key: 'D', text: '1910', correct: false }
    ]
  },
  {
    question:
      'Who was the last Chairman of the Strahlenberg Board of Directors?',
    answers: [
      {
        key: 'A',
        text: 'Dr. Jonathan Young',
        correct: false
      },
      {
        key: 'B',
        text: 'Otto J. Bergman',
        correct: true
      },
      {
        key: 'C',
        text: 'Philip Quinine Jr. ',
        correct: false
      },
      {
        key: 'D',
        text: 'Stuart Weber',
        correct: false
      }
    ]
  },
  {
    question:
      'What year did Dr. Jonathan Young join Strahlenberg Mining Co. as a junior camp physician?',
    answers: [
      {
        key: 'A',
        text: '1963',
        correct: false
      },
      { key: 'B', text: '1959', correct: false },
      { key: 'C', text: '1989', correct: false },
      { key: 'D', text: '1946', correct: true }
    ]
  },
  {
    question:
      'On which date did David Griffith mobilize ninety percent of our town\'s miners to strike?',
    answers: [
      {
        key: 'A',
        text: 'March 17, 1989',
        correct: true
      },
      { key: 'B', text: 'April 4, 1989', correct: false },
      { key: 'C', text: 'January 30, 1989', correct: false },
      { key: 'D', text: 'February 22, 1989', correct: false }
    ]
  },
  {
    question:
      'What were the names of the naturalists who Strahlenberg privately commissioned to explore the area that would become Cooper\'s Rock?',
    answers: [
      {
        key: 'A',
        text: 'Sandy Cooper and William Rider',
        correct: false
      },
      {
        key: 'B',
        text: 'Sydney Cooper and William Flynn',
        correct: true
      },
      {
        key: 'C',
        text: 'Stephen Clarke and William Flynn',
        correct: false
      },
      {
        key: 'D',
        text: 'Johnny Newcome and Old Pills',
        correct: false
      }
    ]
  }
]; 