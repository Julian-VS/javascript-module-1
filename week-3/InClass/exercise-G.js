let BirthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
let year = new Date().getFullYear();

const GreenLight = BirthYear.filter( num => num<(year-17))

console.log("These are the birth years of people who can drive: " + GreenLight.join(', '))

