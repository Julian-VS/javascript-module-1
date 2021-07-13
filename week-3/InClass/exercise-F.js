let BirthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];
let year = new Date().getFullYear();

const GreenLight = BirthYear.map(num => num <= (year-17) ?  "Born in " + (num) + " can drive.": "Born in " + (num) + " can drive in " +(num-(year-17))+" years.")

console.log (GreenLight)


