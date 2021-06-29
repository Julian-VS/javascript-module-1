var numStu = 15;
var numMent = 8 ;

perStu = 100*numStu/(numMent+numStu) ;
perMent = 100*numMent/(numMent+numStu) ;


console.log(`Percentage students: ${Math.round(perStu)}%\nPercentage mentors: ${Math.round(perMent)}%`);
