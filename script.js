let apiQuotes = [];

// Show New Quote
function newQuote(){
    //Pick a Random Quote
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

// Get Quotes From API
async function getQuotes() {

    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
         const response = await fetch(apiUrl);
         apiQuotes = await response.json();
         newQuote();
    }catch(error){
// catch error here
    }
}
//on load
getQuotes();