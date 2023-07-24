const arr1 = ['a', 'b', 'c'];
const arr2 = [1,2,3];
const concat = arr1.concat(arr2);
console.log('Concat array --> ', concat);

arr2.reverse();
console.log('Reverse array --> ', arr2);

const numArr = [3,4,1,2,7];
numArr.sort();
console.log('Sort array --> ', numArr);
// or
numArr.sort(function(a, b) {
    return a - b
});
console.log('Sort array --> ', numArr);

const numArr2 = [3,4,1,2,7];
const newArr = [];

numArr2.forEach(el =>{
    if(el % 2 == 0){
        newArr.push(el)
    }
})
console.log('Array with even numbers --> ', newArr);