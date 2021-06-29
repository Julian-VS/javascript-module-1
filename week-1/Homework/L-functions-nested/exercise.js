function percentage (n1,n2){
return Math.round(100*n1/(n1+n2));
}

function StringGen(pcnt){
    return "El porcentaje de alumnos es de " + pcnt + " % mientras que el de mentores es de " + (100-pcnt) + " %.";
}

var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";

var numStu = 50;
var numMent = 5;

pcntStu = percentage(numStu, numMent);

message = StringGen(pcntStu)

console.log(message)

