const anthem= 'Amar Sonar Bangla Ami Tomai Valobashi';

//split
const words = anthem.split(' ');
// console.log(words);
const withoutA = anthem.split('a');
// console.log(withoutA);

//slice
const smallSlice = anthem.slice(0,4);
// console.log(smallSlice);

//substr
const anotherWord = anthem.substr(5,5);
console.log(anotherWord);


//substring
const anotherPart = anthem.substr(0,5);
// console.log(anotherPart);

//concat
const first ='mama';
const second = 'bari';
// const fullString = first + second;
const fullString = first.concat(second).concat('Savar');
// console.log(fullString);

const allJoined = words.join('');
// console.log(allJoined);
