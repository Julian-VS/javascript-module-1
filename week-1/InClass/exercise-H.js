// This function adds 2 numbers and concatenates the result with a fixed string "naranjas", returning a string 
//The string is of type "Usted tiene {sum of values} naranjas"


function add(num1, num2, str1) {
    a = num1 + num2;
    res = "Usted tiene " + a + " " + str1;
    return res
  }

  ans = add(1,2, "naranjas")

  console.log(ans);