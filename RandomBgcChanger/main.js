const btn = document.getElementById('btn')
const backgroundClr = document.querySelector('body')
const hex = document.getElementById('hexCode')

const hexNumbers = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

//This JS function takes random int or strings from hexNumber array and transforms it into hexCode.

// I Can write a function like i do in this line but i can also write a function and call it after clicking on button.
btn.addEventListener("click", function() {
    let hexCol = '#'
    // This loop takes random values from hexNumber array and sums it with with hexCol
    for (var i = 0; i<6;i++) {
        let random = Math.floor(Math.random()*hexNumbers.length)
        hexCol += hexNumbers[random]        
    }
    backgroundClr.style.backgroundColor = hexCol
    hex.innerHTML = hexCol
});

