const arr = ['a', 'b', 'c'];
arr.push(1, 2, 3);
console.log('Adding elements to the end of the array --> ',arr);

const numArr = [1,2,3];
numArr.unshift(4,5,6);
console.log('Adding elements to the start of the array --> ',arr);

const languageArr = ['js', 'css', 'jq'];
console.log('First elem in Arr --> ', languageArr[0]);
console.log('Last elem in Arr --> ', languageArr[languageArr.length - 1]);

let lastElemInArr = languageArr.pop()
document.write(lastElemInArr)

const firstArrNumbers = [1, 2, 3, 4, 5];
const secondArrNumbers = [];

secondArrNumbers.push(...firstArrNumbers.slice(0, 3))

console.log('Slice first array and insert into second array --> ', secondArrNumbers);