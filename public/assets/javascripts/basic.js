import React from 'react';
import ReactDOM from 'react-dom';

import Card from './components/Card.js';
import CardHolder from './components/CardHolder.js';

const main = document.getElementById('main')

console.log(main);

var cardOneDialogue = [
  "Gaaaaah *gasp* Aaaaaah! Help me *splutter* I'm in terrible pain! Quick, flip me over",
  "Phew, christ that's better, thanks for that. Ok, ok, you can flip me back now.",
  '...',
  ':D'
];

var cardTwoDialogue =  [
  "He's not coming back you know",
  "Curses! I have ben Vanquished. *splutter* *gasp* *fade*"
]

ReactDOM.render(<CardHolder dialogue={cardOneDialogue} entryDirection={'Left'} />, main);
