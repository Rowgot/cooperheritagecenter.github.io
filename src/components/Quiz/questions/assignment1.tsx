import type { QuizMeta, QuizQuestion } from '../types';

export const title = "Test Your Knowledge of Miner's Jargon!";

export const meta: QuizMeta = {
  successTitle: 'Great Job!',
  successText: <span>
    You{"'"}re no Johnny Newcome. You know miner jargon like the back of your hand, and you{"'"}d have no problem chatting with the muckmen {"'"}round the tipple. Click below to access exclusive content from our archives with the password: <span className="fw-bold">{import.meta.env.VITE_CONTENT_1_PASSWORD}</span>
  </span>,
  successButtonText: 'Access Content',
  failButtonText: 'Retry',
  successButtonRoute: { name: 'Content', params: { assignment: 1 } },
  failTitle: 'Rats!',
  failText: "Looks like your luster didn't pass muster this time around. But, don't break your pick! Take another look at some of the content from our archives to get better acquainted with miner jargon, and you'll do better next time."
};

export const questions: QuizQuestion[] = [
  {
    question: 'What were strikebreakers known as?',
    answers: [
      {
        key: 'A',
        text: 'Poorboys',
        correct: false
      },
      {
        key: 'B',
        text: 'Blacklegs',
        correct: true
      },
      {
        key: 'C',
        text: 'Outta Towners',
        correct: false
      },
      {
        key: 'D',
        text: 'Hardbacks',
        correct: false
      }
    ]
  },
  {
    question: 'What was the usual nickname for a new miner?',
    answers: [
      {
        key: 'A',
        text: 'Jimmy Pickaxe',
        correct: false
      },
      {
        key: 'B',
        text: 'Danny Softhands',
        correct: false
      },
      {
        key: 'C',
        text: 'Johnny Newcome',
        correct: true
      },
      {
        key: 'D',
        text: 'Shineboot Jack',
        correct: false
      }
    ]
  },
  {
    question: 'What did it mean if you were slabbed?',
    answers: [
      {
        key: 'A',
        text: 'You were fired',
        correct: false
      },
      {
        key: 'B',
        text: 'You were covered in mud',
        correct: false
      },
      {
        key: 'C',
        text: 'You lost a fight',
        correct: false
      },
      {
        key: 'D',
        text: 'You were hit with a falling rock',
        correct: true
      }
    ]
  },
  {
    question: 'Who was Quinine Jimmy?',
    answers: [
      {
        key: 'A',
        text: 'The mining camp doctor on duty',
        correct: true
      },
      {
        key: 'B',
        text: 'The bartender at the local pub',
        correct: false
      },
      {
        key: 'C',
        text: 'A miner that just got out of the hospital',
        correct: false
      },
      {
        key: 'D',
        text: 'A miner that complained constantly',
        correct: false
      }
    ]
  },
  {
    question:
      'What was the term for the spot where mine cars are emptied of their coal?',
    answers: [
      {
        key: 'A',
        text: 'Dirtbucket',
        correct: false
      },
      {
        key: 'B',
        text: 'Tipple',
        correct: true
      },
      {
        key: 'C',
        text: 'Rockbin',
        correct: false
      },
      {
        key: 'D',
        text: 'Dumper',
        correct: false
      }
    ]
  },
  {
    question:
      'What would miners call the layers of soil and rock covering a coal seam?',
    answers: [
      {
        key: 'A',
        text: 'Thickdirt',
        correct: false
      },
      {
        key: 'B',
        text: "Hell's Trapdoor",
        correct: false
      },
      {
        key: 'C',
        text: 'Overburden',
        correct: true
      },
      {
        key: 'D',
        text: 'Rockhaul',
        correct: false
      }
    ]
  },
  {
    question:
      'If another miner runs out yelling "Roof fall!", what does he mean?',
    answers: [
      {
        key: 'A',
        text: 'The exposed coal seam ran out',
        correct: false
      },
      {
        key: 'B',
        text: "The miner's helmet fell over his eyes",
        correct: false
      },
      {
        key: 'C',
        text: "They just finished sounding the next tunnel's structure",
        correct: false
      },
      {
        key: 'D',
        text: 'The tunnel collapsed',
        correct: true
      }
    ]
  }
]; 