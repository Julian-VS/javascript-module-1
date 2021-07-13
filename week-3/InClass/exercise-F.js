
let BirthYear = [1964, 2008, 1999, 2005, 1978, 1985, 1919];

const AGES = BirthYear.map(age => 2021-age);
const GreenLight = AGES.map(num => num >= 17 ?  "Born in " + (2021-num) + " can drive": "Born in " + (2021-num) + " can drive in " +(17-num)+" years.")


console.log (GreenLight)


