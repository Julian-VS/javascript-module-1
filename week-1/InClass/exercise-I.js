function Birth(age){
    let today = new Date();
    let year = today.getFullYear();

    return year-age
}


BirthDate = Birth(25);

console.log(BirthDate);

