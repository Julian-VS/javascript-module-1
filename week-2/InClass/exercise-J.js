function secondMatchesAmy(array) {
  if (names[1]=="Amy" || names2[1]=="Amy") {
    return "Second index matched!";
  }
  return "Second index not matched";
 }
 let names = ["Alex", "Amara", "Carlos"];
 let names2 = ["Ali", "Amy", "Naresh"];
 
 const result = secondMatchesAmy(names);
 console.log(result)