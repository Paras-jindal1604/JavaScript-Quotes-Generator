
const quotes = [
  "Discipline is doing what needs to be done.",
  "Success is the sum of small efforts repeated day in and out.",
  "Dream big, start small, stay consistent, and trust the process.",
  "Your only limit is the one you set for yourself in your mind.",
  "Growth begins at the end of your comfort zone.",
  "Don’t just wish for it — work for it.",
  "Consistency always beats intensity.",
  "You don’t have to be perfect, just better than yesterday.",
  "Motivation gets you started; discipline keeps you going.",
  "Progress is progress, no matter how slow.",
  "Your habits today shape your future.",
  "You become what you repeatedly do.",
  "Great things take time.",
  "Winners aren't those who never fail, but those who never quit.",
  "Every expert was once a beginner.",
  "One step at a time is still progress.",
  "The best project you’ll ever work on is yourself.",
  "Push yourself, because no one else is going to do it for you.",
  "Clarity comes from action.",
  "Discipline is choosing what matters most every day.",
  "Be stubborn with your goals, but flexible with your methods.",
  "Hard work beats talent when talent refuses to work hard.",
  "Nothing changes if nothing changes.",
  "Results happen over time, not overnight."
];


function generateQuotes(){

let index = Math.floor(Math.random()*quotes.length);


const quote = document.getElementById("quote");
quote.innerText = quotes[index];
}

setInterval(generateQuotes,2000);





