let str = [100,"iSMael",55,45,"sANyiA",66,"JaMEs","eLAmIn",23,"IsMael",67,19,"ElaMIN",];
let clean_str = str.filter(elmnt => typeof(elmnt)=="string").map(elmnt => elmnt.toUpperCase())
console.log(clean_str)
