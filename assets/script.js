//task 1
//Build a function that does currency converter from USD to UAH (1 USD = 8 UAH).
function convert(amount) {
    let dollars = 8;
    let result = dollars * amount;
    return result;
}
console.log('task1');
console.log(convert(2)); //res 16
console.log('****************');


//task 2
//A function which returns reversed string.
function reverse(str) {
    return str.split("").reverse().join("");
}
console.log('task2');
console.log(reverse('abc')); // 'cba'


function reverseVar2(str) {
    let result = "";
    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }
    return result;
}
console.log(reverseVar2('abc')); // 'cba'
console.log('****************');


//task 3
//A function which prints the stair picture of size n
function printStairs(n) {
    let stair = '';
    for (let i = 1; i <= n; i++) {
        stair += ' '.repeat(n - i) + '#'.repeat(i)  + '\n';
    }
    return stair;
}
console.log('task3');
console.log(printStairs(3));
console.log('****************');


//task 4
//A function which prints the stair picture of size n
function sumRange(start, end) {
    let sum = 0;
    for(let i = start; i <= end; i++){
        sum+=i;
    }
    return sum;
}
console.log('task4');
console.log(sumRange(2, 4)); // 9
console.log(sumRange(-1, 3)); // 5
console.log('****************');


//task 5
//Write a function which returns the smallest of three numbers.
function min(a, b, c) {
    return Math.min(a, b, c);
}
console.log('task5');
console.log(min(10, 5, 11)); //5
console.log(min(3, 8, 4)); //3
console.log('****************');



//task 6
//A function which prints the pyramid picture of size n
function printPyramid(n) {
    for(let i=0;i<n;i++) {

        let pyramid="";
            for(let k=0;k<n-i;k++) {
                pyramid+=" ";
            }
            for(let m=0;m<=i;m++) {
                pyramid += "# ";
            }
        console.log(pyramid);
    }
}
console.log('task6');
printPyramid(3);
console.log('****************');


//task 7
//A function which transforms first and last letter to uppercase (use built in string’s method).
function firstAndLastToUpper(str) {
    return str[0].toUpperCase() + str.slice(1, -1) + str[str.length-1].toUpperCase();
}
console.log('task7');
console.log(firstAndLastToUpper('abc')); // 'AbC'
console.log('****************');



//task 8
//A function which returns true if string contains ironman or cursor or ostap otherwise returns false. The function must be case-insensitive.
function cursorCheck(str) {
    let strToLowerCase = str.toLowerCase();
    if(strToLowerCase.includes("ostap") || strToLowerCase.includes("ironman") || strToLowerCase.includes("cursor")) {
        console.log('true');
    } else {
        console.log('false');
    }

}
console.log('task8');
cursorCheck('Hello I am OstaP'); // true
cursorCheck('Superman is here'); // false
console.log('****************');


//task 9
//A function which returns a string with all letters in uppercase (without built in string’s method). The function supports only english alphabet.
function toUppercase(str) {
    let toUppercase = '';
    for(let i = 0; i <= str.length-1; i++){
        toUppercase += str[i].toUpperCase();
    }
    return toUppercase;
}
console.log('task9');
console.log(toUppercase('abc')); // 'ABC'
console.log('****************');

//task10
//A function which removes duplication of letters in string. The function must be case-insensitive
function removeDuplicationLetters(str) {
    let removeDuplicat="";
    for(let i=0; i < str.length; i++) {
        if(removeDuplicat.indexOf(str.charAt(i))==-1 || removeDuplicat.charAt(i) == ' ') {
            removeDuplicat += str[i];
        }
    }
    return removeDuplicat;
}
console.log('task10');
console.log(removeDuplicationLetters('Hello I am Iron Man')); // 'Helo IamrnM'
console.log('****************');


//task11
//A function that when given a number n returns the n-th number in the Fibonacci Sequence. The sequence starts from 1 and looks like this: 1, 1, 2, 3, 5, 8, 13, 21…
function fibonacci(n) {
    if (n===1) {return [0, 1];}
    else {
        var result = fibonacci(n - 1);
        result.push(result[result.length - 1] + result[result.length - 2]);
        return result;
    }
}
console.log('task11');
console.log(fibonacci(3)); // 2
console.log(fibonacci(5)); // 5
console.log(fibonacci(7)); // 13
console.log('****************');