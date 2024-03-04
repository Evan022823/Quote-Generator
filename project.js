// Variables

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');

const quotes =[{
    quote:  ` “You have to believe in yourself when no one else does.” `,
    person: `- Serena Williams -`
},  {
    quote:  ` “When you have a dream, you’ve got to grab it and never let go.” `,
    person: `- Carol Burnett -` 
},  {
    quote:  ` “The most important thing is to enjoy your life—to be happy—it’s all that matters.” `,
    person: `- Steve Jobs -` 
},  {
    quote:  ` “Spread love everywhere you go. Let no one ever come without leaving happier.” `,
    person: `- Mother Teresa -` 
},  {
    quote:  ` “Be yourself; everyone else is already taken.” `,
    person: `- Oscar Wilde -` 
},  {
    quote:  ` “The biggest adventure you can take is to live the life of your dreams.” `,
    person: `- Oprah Winfrey -` 
},  {
    quote:  ` “The only thing we have to fear is fear itself.” `,
    person: `- Franklin D. Roosevelt -` 
},  {
    quote:  ` “I can accept failure, everyone fails at something. But I can’t accept not trying.” `,
    person: `- Michael Jordan -` 
},  {
    quote:  ` “Find out who you are and do it on purpose.” `,
    person: `- Dolly Parton -` 
},  {
    quote:  ` “If you can do what you do best and be happy, you are further along in life than most people.” `,
    person: `- Leonardo DiCaprio -` 
},  {
    quote:  ` “Always go with your passions. Never ask yourself if it’s realistic or not.” `,
    person: `- Deepak Chopra -` 
},  {
    quote:  ` “The more you know who you are, and what you want, the less you let things upset you.” `,
    person: `- Stephanie Perkins -` 
},  {
    quote:  ` “By being yourself, you put something wonderful in the world that was not there before.”  `,
    person: `- Edwin Elliot -` 
}, ];

/* Random Quotes Selector */


btn.addEventListener('click', function() {

    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})









