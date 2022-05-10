var quoteAPI = 'https://type.fit/api/quotes';

var newQoute = document.querySelector('.new-quote')

var copyQuote = document.querySelector('.copyQuote')

function generateText() {
    fetch(quoteAPI)
        .then(res => res.json())
        .then(data => JSON.stringify(data[Math.floor(Math.random(data) * data.length)]))
        .then(data2 => displayText(` "${JSON.parse(data2).text}" - "${JSON.parse(data2).author}"`))

}

function displayText(quote) {
    var quotes = document.querySelector('.quote-text')
    quotes.innerHTML = `<h1> ${quote} </h1>`;
}

function copyText(quoteText) {
    var quotes = document.querySelector('.quote-text')
    var result = quotes.innerText
    navigator.clipboard.writeText(result)
}




newQoute.addEventListener('click', generateText)
copyQuote.addEventListener('click', copyText)