const quoteContainer = document.getElementById('quote-container')
const quoteText = document.getElementById('quote')
const authorText = document.getElementById('author ')
const twitterBtn = document.getElementById('twitter')
const newQuoteBtn = document.getElementById('new-quote')

// let apiQuotes = [];

// Show New Quote
function newQuote() {
    // Pick a Random Quote from localQuotes
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    console.log(quote);
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        const apiQuotes = await response.json();
        // Assuming you want to display a new quote from the fetched quotes
        const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
        console.log(quote);
    } catch (error) {
        console.error('Error fetching the quotes: ', error);
    }
}

// On load
getQuotes(); // Uncomment this if you want to fetch quotes from the API
// newQuote(); // Use this if you want to show a quote from localQuotes
