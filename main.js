let str = 'aaa bbb ccc'

console.log(str);

let newStrSubstring = str.substring(4, 7);
let newStrSlice = str.slice(4, 7);

console.log(newStrSlice);
console.log(newStrSubstring);

console.log('----------------');

let js = 'я учу javascript';

let upperCaseJs = js.charAt(0).toUpperCase() + js.slice(1)

console.log(js);
console.log(upperCaseJs);

console.log('----------------');

let string = 'var_test_text';
const camelCaseString = convertToCamelCase(string);

function convertToCamelCase(str) {
    const words = str.split('_');

    const firstWord = words[0].toLowerCase();

    const capitalizedWords = words.slice(1).map(word => word.charAt(0).toUpperCase() + word.slice(1));

    const resultString = firstWord + capitalizedWords.join('');

    return resultString;
}
  
console.log(camelCaseString);
console.log('----------------');
console.log(Math.round(Math.random() * 50));