let countOfLayer = +prompt('Введите количество  строк пирамиды:');

let countOfSpace = countOfLayer  ;
let string = '';
let stringSpaces = '';
let strStar = '*';

for (let i = 0 ; i < countOfLayer; i++ ){
    stringSpaces = stringSpaces.concat(' ');
}

for (let i = 0 ; i < countOfLayer ; i++){
    string = string.concat(stringSpaces , strStar ,  '\n');
    countOfSpace = countOfSpace-1;
    stringSpaces = stringSpaces.substr(0 , countOfSpace);
    strStar = strStar.concat('**');
}
alert(string)
console.log(string)