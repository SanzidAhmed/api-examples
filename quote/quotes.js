const loadQuotes = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => displayQuotes(data))
}
const displayQuotes = quotes => {
    const quotesContainer = document.getElementById('quote-container');
    quotesContainer.innerHTML = quotes.quote;
}
loadQuotes();