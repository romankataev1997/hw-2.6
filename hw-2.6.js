// задание 1
const numbs = [1, 5, 4, 10,0,3];

for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
}

//задание 2
const a = [1,5,4,10,0,3];
console.log(a.indexOf(4));

//задание 3
let b = [1,5,4,10,0,3];
b=b.join(' ');
console.log(b);

//задание 4
const arr = []
for (let i = 0; i < 3; i++) {
  arr[i] = [1];
for (let j = 0; j < 3; j++) {
    arr[i][j] = 1
}
}
console.log(arr);

//задание 5
let arr5 = [1,1,1];
arr5.push(2,2,2);
console.log(arr5);

//задание 6
let arr6 = [9,8,7,'a',6,5];
arr6.sort();
arr6.pop();
console.log(arr6);

//задание 7
let arr7 = [9,8,7,6,5];
let game = Number(prompt('Угадай число'))
if (arr7.includes(game)) {
    console.log('Угадал')
} else {
    console.log('не угадал')
}

//задание 8
const str = 'abcdef';
const strArr = str.split('');
strArr.reverse();
const newStr = strArr.join('');
console.log(newStr);

// 9

let arr9 = [
    [1, 2, 3],
    [4, 5, 6],
];
let result = [].concat(arr9[0],arr9[1]);
console.log(result);

// 10
let arr10 = [1,2,3,4,5,6,7,8,9,10]
for (i=0; i<arr10.length-1; i++){
    num1 = arr10[i];
    num2 = arr10[i+1];
    sum = num1+num2;
console.log(`текущий элемент ${num1} следующий элемент ${num2} сумма ${sum}`);
}

// 11

const arr11 = [1,2,3,4,5];
let arr11Square = arr11.map(item=>{
    console.log(item);
    return item**2;
})

console.log(arr11Square);

//12
function wordsAny(arm) {
    return arm.map(aword => aword.length);
  }
  
  const words = ["один", "два", "пять"];
  const wordLeng = wordsAny(words);
  console.log(wordLeng);

//13
function filterPositive(array) {
    return array.filter(number => number < 0);
  }
  
  console.log(filterPositive([-1, 0, 5, -10, 56])); 
  console.log(filterPositive([-25, 25, 0, -1000, -2])); 
 