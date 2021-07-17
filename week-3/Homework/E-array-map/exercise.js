// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

function double (n){
    return n*2
}

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

var hundNumb = numbers.map(n => n*100);
console.log(hundNumb);
