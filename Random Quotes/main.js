const btn = document.getElementById('btn');
const quote = document.getElementById('quote')
const author = document.getElementById('author')

//That's the quotes api
const API = "https://type.fit/api/quotes"

// Assigned quotes which is array to hold all the fetched quotes and authors
let quotes = [];

//Fetching api 
fetch(API)
    .then(res => res.json())
    .then(data => quotes = data)

setTimeout(() => {
    console.log(quotes)
},500); // Timeout 0.5s 


//Adding a listener to button 
btn.addEventListener('click', function() {
    let number = Math.floor(Math.random()*quotes.length)
    author.innerHTML = quotes[number].author;
    quote.innerHTML = quotes[number].text    
})
