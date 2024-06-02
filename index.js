//Skämtmaskinen

//En funktion som ger ett slumpat heltal mellan ett minvärde och ett maxvärde, där båda angivna värden inkluderas
function random(min, max) {
    return min + Math.floor(Math.random() * (max + 1 - min));
};


//Skämtlista VARIANT1
/*
const programmingJokes = [
    "Why don't programmers like nature? It has too many bugs.",
    "Why did the CSS developer go to therapy? To get rid of his margins.",
    "How do you comfort a JavaScript developer? You console them.",
    "Why did the CSS developer leave the restaurant? Because it had no class.",
    "Why did the JavaScript developer go missing? Because he didn't know when to return.",
    "Why did the HTML tag go to the party? Because it wanted to break the line.",
    "Why do JavaScript developers wear glasses? Because they don't C#.",
    "Why don't programmers like to use inline styles? Because they want to be classy.",
    "Why did the CSS selector break up with the HTML element? It found someone more specific.",
    "Why did the CSS developer apply for a job? They wanted to get a position.",
];
*/

//Skämtlista VARIANT2

const programmingJokes = [
    {
        ID: 0, 
        Question: "Why don't programmers like nature?", 
        Answer: 'It has too many bugs.'
    },
    {
        ID: 1, 
        Question: 'Why did the CSS developer go to therapy?', 
        Answer: 'To get rid of his margins.'
    },
    {
        ID: 2, 
        Question: 'How do you comfort a JavaScript developer?', 
        Answer: 'You console them.'
    },
    {
        ID: 3, 
        Question: 'Why did the CSS developer leave the restaurant?', 
        Answer: 'Because it had no class.'
    },
    {
        ID: 4, 
        Question: 'Why did the JavaScript developer go missing?', 
        Answer: "Because he didn't know when to return."
    },
    {
        ID: 5, 
        Question: 'Why did the HTML tag go to the party?', 
        Answer: 'Because it wanted to break the line.'
    },
    {
        ID: 6, 
        Question: 'Why do JavaScript developers wear glasses?', 
        Answer: "Because they don't C#."
    },
    {
        ID: 7, 
        Question: "Why don't programmers like to use inline styles?", 
        Answer: 'Because they want to be classy.'},
    {
        ID: 8, 
        Question: 'Why did the CSS selector break up with the HTML element?', 
        Answer: 'It found someone more specific.'
    },
    {
        ID: 9, 
        Question: 'Why did the CSS developer apply for a job?', 
        Answer: 'They wanted to get a position.'
    }
];


console.log('<><><><><><><><><><><><><><><>');
console.log('Welcome, to the Joke Factory™!');
console.log('Let me tell you something funny');
console.log('');
//För VARIANT1
/*
let joke1Number = random(1, programmingJokes.length);
    let joke2Number = random(1, programmingJokes.length);
while (joke2Number == joke1Number) {
    joke2Number = random(1, programmingJokes.length);
}
console.log('These are Jokes™ number ' + joke1Number + ' and ' + joke2Number);
console.log(programmingJokes[joke1Number-1]);
console.log(programmingJokes[joke2Number-1]);
console.log('');
*/
//För VARIANT2

let numberOfJokes = 2;
for (let i = 1; i <= numberOfJokes; i++) {
    if (programmingJokes.length === 0) {
        console.log("Sorry, we're all out of jokes...");
        break;
    };
    let jokeNumber = random(1, programmingJokes.length);
    let joke = programmingJokes[jokeNumber - 1];
    programmingJokes.splice(jokeNumber - 1, 1);
    console.log('Joke number #' + (joke.ID + 1).toString());
    console.log('Question: ' + joke.Question);
    console.log('Answer: ' + joke.Answer);
    console.log('');
}


console.log("...Wasn't that fun?");
console.log('Come again soon!');
console.log('<><><><><><><><><><><><><><><>');


