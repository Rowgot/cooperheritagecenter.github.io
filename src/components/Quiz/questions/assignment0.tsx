export const title = "Match the Miner's Argot to Correct Pronunciation!";

export const customComponent = 'EnglishPhonemes';

export const subtitle =
  "Can you match the Miner's Argot from the Folklore Booklet to their correct pronunciations? Every word in our language is made up of a series of distinct sounds, known as phonemes. Below is a chart of commonly occurring sounds in American English, as well as many other languages!";

export const meta = {
  successTitle: 'Hear, hear!',
  successText:
    <span>Sounds like you have an ear for phonemes.<br/><br/>Let the aide at the front desk know you passed for a 10 % off coupon on your next pepperoni roll! Cafeteria hours are from 12 p.m. to 2 p.m., Wednesday through Friday.</span>,
  successButtonText: 'Return to Homepage',
  failButtonText: 'Retry',
  successButtonRoute: { name: '' },
  failTitle: 'Rats!',
  failText:
    "Looks like you haven't quite cracked the phoneme code. Keep the phoneme chart handy to help you next time!"
};

export const questions = [
  {
    question: 'Foxfire',
    answers: [
      { key: 'A', text: 'fæksˌfɛr', correct: false },
      { key: 'B', text: 'foʊˌfaɪr', correct: false },
      { key: 'C', text: 'fɑkˌsfaɪr ', correct: true },
      { key: 'D', text: 'fɑksˌfɪr', correct: false }
    ]
  },
  {
    question: 'Luster',
    answers: [
      { key: 'A', text: 'lɛstər', correct: false },
      { key: 'B', text: 'lʌstər', correct: true },
      { key: 'C', text: 'lɪstər ', correct: false },
      { key: 'D', text: 'lɪsən', correct: false }
    ]
  },
  {
    question: 'Stinkdamp',
    answers: [
      { key: 'A', text: 'stɪkdʌmp', correct: false },
      { key: 'B', text: 'stæŋkdrʌm', correct: false },
      { key: 'C', text: 'stɪŋklæmp ', correct: false },
      { key: 'D', text: 'stɪŋkdæmp', correct: true }
    ]
  },
  {
    question: 'Working',
    answers: [
      { key: 'A', text: 'wɜrkɪŋ', correct: true },
      { key: 'B', text: 'weɪkɪŋ', correct: false },
      { key: 'C', text: 'wɪŋkɪŋ ', correct: false },
      { key: 'D', text: 'lɜrkɪŋ', correct: false }
    ]
  }
]; 