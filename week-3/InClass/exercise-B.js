function print_sorted_list (arr){
    console.log(`La lista ordenada alfabeticamente es: ${arr.sort()}`)
    }

function search (name, arr1, arr2){
    if (arr1.includes(name)){
        console.log(`Si, ${name} pertence a la primer clase junto con: ${arr1.join(', ')}`)
    } else if (arr2.includes(name)){
        console.log(`Si, ${name} pertence a la segunda clase junto con: ${arr2.join(', ')}`)
    } else {
        console.log(`No, ${name} no pertence a ninguna clase.`)
    }
}

let names1 = ['Julian', 'Juan', 'Matias', 'Maria Victoria', 'Wendy', 'Jesus'];
let names2 = ['Caleb', 'Gabriela', 'Génesis', 'Giomar', 'Jaime'];

print_sorted_list(names1);

search("Julian", names1, names2)

