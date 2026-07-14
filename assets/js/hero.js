export async function loadQuote() {

    const response = await fetch("assets/data/quotes.json");

    const quotes = await response.json();

    const quote = quotes[Math.floor(Math.random() * quotes.length)];

    document.querySelector(".quote-text").textContent = quote.text;

    const author = document.querySelector(".quote-author");

if (quote.title) {

    author.textContent =
        `${quote.author} „${quote.title}”`;

} else {

    author.textContent = quote.author;

}

}