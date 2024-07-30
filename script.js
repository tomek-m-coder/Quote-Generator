const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author'); 
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];


// Show New Quote
function newQuote() {
    // Pick a Random Quote from apiQuotes if available, otherwise localQuotes
    let quote;
    if (apiQuotes.length > 0) {
        quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    } else {
        quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    }
    authorText.textContent = quote.author;
    quoteText.textContent = quote.text;
}

// Get Quotes From API
async function getQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote(); // Display a new quote from the fetched quotes
    } catch (error) {
        console.error('Error fetching the quotes: ', error);
    }
}

// Event Listeners
newQuoteBtn.addEventListener('click', newQuote);

// On load
getQuotes(); // Fetch quotes from the API and display one
// newQuote(); // Use this if you want to show a quote from localQuotes immediately
