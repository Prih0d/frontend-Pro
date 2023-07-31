const secret = {
    "!": [17],
    " ": [5,10],
    "e": [1,15],
    "o": [4,8],
    "h": [0],
    "l": [2,3,13,14,16],
    "f": [6],
    "r": [7],
    "m": [9],
    "H": [11],
    "i": [12],
}

const textSecret = [];

for(let i = 0; i < arrLenght(secret); i++){

for(key in secret){
    secret[key].forEach(element => {
        if(element == i){
            textSecret.push(key)
        }
    })
}
}

function arrLenght(arr) {
    let maxValue = 0;

    for(key in arr){
        let max = Math.max(...arr[key])
        if(max > maxValue){
           maxValue = max
        }
    }
    return maxValue + 1
}

const textSecretToString = textSecret.join('');
console.log('text --> ', textSecretToString);