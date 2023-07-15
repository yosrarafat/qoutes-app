


var quotes= [
    quote1 = {
        quote: '"It is our choices, Harry, that show what we truly are, far more than our abilities."',
        aouther: '― J.K. Rowling'
    },
    quote2 = {
        quote: '“I have not failed. I\'ve just found 10,000 ways that won\'t work.”',
        aouther: '― Thomas A. Edison'
    },
    quote3 = {
        quote: '“Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present.”',
        aouther: '― J.K. Rowling'
    },
    quote4 = {
        quote: '“It is not a lack of love, but a lack of friendship that makes unhappy marriages.”',
        aouther: '― Friedrich Nietzsche'
    },
    quote5 = {
        quote: '“If you don\'t stand for something you will fall for anything.”',
        aouther: '― Gordon A. Eadie'
    },
    quote6 = {
        quote: '“I like nonsense, it wakes up the brain cells. Fantasy is a necessary ingredient in living.”',
        aouther: '― Dr. Seuss'
    } 
    
]
//  define a function returns a random number between min (included) and max (excluded):

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
//  define a function returns a random qoute from the array:

function getRndQuote() {
    //  call the random function to return a random index within the array:
    var rndNum =getRndInteger(0,quotes.length);
    console.log(rndNum);
    console.log((quotes[rndNum]).quote);
    console.log((quotes[rndNum]).aouther);

     document.getElementById('quote').innerHTML = ((quotes[rndNum]).quote);
     document.getElementById('quoteAouther').innerHTML = ((quotes[rndNum]).aouther);
     
    
  }





