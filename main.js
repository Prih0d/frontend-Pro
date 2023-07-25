const nums = [1,25,-7457,9,4,16,-74,144,81,-7,100,-5,900];

const newNums = nums.map(el =>{
    if(el > 0){
        return Math.sqrt(el)
    }
}).filter(el => el !== undefined)

console.log(nums);
console.log(newNums);

const nums2 = [1,2,3,4,5,6,7,8,9]

function findElementsToSum(arr) {
    let sum = 0;
    for(let i = 0; arr.length < 10; i++){
        sum += arr[i];
        if(sum >= 10){
            return i + 1;
        }
    }
}

let result = findElementsToSum(nums2);
console.log(result);