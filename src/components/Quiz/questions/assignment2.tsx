import type { QuizMeta, QuizQuestion } from '../types';

export const title = "Match Sydney Cooper's Illustrations to Local Flora and Fauna!";

export const meta: QuizMeta = {
  successTitle: 'Great Job!',
  successText: <span>
    You{"'"}re a natural naturalist! You{"'"}d have no trouble telling Omphalotus illudens from Cantharellus cibarius. Click here to access exclusive content from our archives with the password: <span className="fw-bold">{import.meta.env.VITE_CONTENT_2_PASSWORD}</span>
  </span>,
  successButtonText: 'Access Content',
  failButtonText: 'Retry',
  successButtonRoute: { name: 'Content', params: { assignment: 2 } },
  failTitle: 'Rats!',
  failText: "Looks like you got a little too big for your Dutchman's Breeches. But, don't give up yet! Take a closer look at Sydney Cooper's journal, and you'll do better next time."
};

export const questions: QuizQuestion[] = [
  {
    picture: '2/Quiz2_Question1.jpg',
    question: '',
    answers: [
      { key: 'A', text: 'Mockernut Hickory (Carya tomentosa)', correct: false },
      {
        key: 'B',
        text: 'Japanese Andromeda (Pieris japonica)',
        correct: false
      },
      { key: 'C', text: 'Mountain Laurel (Kalmia latifolia)', correct: true },
      { key: 'D', text: 'Blue Spruce (Picea pungens)', correct: false }
    ]
  },
  {
    picture: '2/Quiz2_Question2.jpg',
    question: '',
    answers: [
      {
        key: 'A',
        text: 'Dutchman\'s Breeches \(Dicentra cucullaria\)',
        correct: true
      },
      {
        key: 'B',
        text: 'Mountain Laurel (Kalmia latifolia)',
        correct: false
      },
      {
        key: 'C',
        text: 'Appalachian Cottontail (Sylvilagus obscurus)',
        correct: false
      },
      {
        key: 'D',
        text: 'Four-Leaved Milkweed (Asclepias quadrifolia)',
        correct: false
      }
    ]
  },
  {
    picture: '2/Quiz2_Question3.jpg',
    question: '',
    answers: [
      { key: 'A', text: 'Mourning Cloak (Nymphalis antiopa)', correct: false },
      { key: 'B', text: 'Eastern Comma (Polygonia comma)', correct: false },
      { key: 'C', text: 'Viceroy (Limenitis archippus)', correct: false },
      { key: 'D', text: 'Cabbage White (Pieris brassicae)', correct: true }
    ]
  },
  {
    picture: '2/Quiz2_Question4.jpg',
    question: '',
    answers: [
      { key: 'A', text: 'Mockernut Hickory (Carya tomentosa)', correct: false },
      { key: 'B', text: 'White Oak (Quercus alba)', correct: true },
      { key: 'C', text: 'Blue Spruce (Picea pungens)', correct: false },
      { key: 'D', text: 'Scots Pine (Pinus sylvestris)', correct: false }
    ]
  },
  {
    picture: '2/Quiz2_Question5.jpg',
    question: '',
    answers: [
      {
        key: 'A',
        text: 'Japanese Andromeda (Pieris japonica)',
        correct: false
      },
      {
        key: 'B',
        text: 'Dutchman\'s Breeches \(Dicentra cucullaria\)',
        correct: false
      },
      {
        key: 'C',
        text: 'Four-Leaved Milkweed (Asclepias quadrifolia)',
        correct: true
      },
      { key: 'D', text: 'Mountain Laurel (Kalmia latifolia)', correct: false }
    ]
  },
  {
    picture: '2/Quiz2_Question6.jpg',
    question: '',
    answers: [
      {
        key: 'A',
        text: 'Jack O\'Lantern Mushroom \(Omphalotus illudens\)',
        correct: true
      },
      {
        key: 'B',
        text: 'The Destroying Angel (Amanita virosa)',
        correct: false
      },
      {
        key: 'C',
        text: 'Giant Puffball (Calvatia gigantea)',
        correct: false
      },
      { key: 'D', text: 'Death Cap (Amanita phalloides)', correct: false }
    ]
  }
]; 
