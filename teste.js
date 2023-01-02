function checar(str){
    for(var i =0; i < str.length / 2; i++) if (str[i] != str[str.length - i - 1]) return false;
    return true; 
}

console.log(checar("anilina"));
console.log(checar("arara"));
console.log(checar("esse"));
console.log(checar("reviver"));
console.log(checar("mateus"));