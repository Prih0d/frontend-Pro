const obj = {
    'Коля': 1000,
    'Вася': 500,
    'Петя': 200
}

console.log(`Зп Коли --> `, obj.Коля);
console.log(`Зп Пети --> `, obj.Петя);
console.log('___________________');

// const arr = {
//     'ru': ['голубой', 'красный', 'зеленый'],
//     'en': ['blue', 'red', 'green']
// }

// let userChoose = prompt('en or ru?')

// switch (userChoose) {
//     case 'en':
//         ruLanguage(arr)
//         break;
//     case 'ru':
//         ruLanguage(arr)
//         break;
//     default:
//         console.log('enru --> ', 'en or ru');
//         break;
// }
// function ruLanguage(obj) {
//     if(userChoose == 'ru'){
//         obj.ru.forEach(el => {
//            if(el == 'голубой'){
//             console.log('ru --> ', el);
//             return el
//            } 
//         });
//     }
//     if(userChoose == 'en'){
//         obj.en.forEach(el => {
//             if(el == 'blue'){
//                 console.log('en --> ', el);
//              return el
//             } 
//          });
//     }
// }

const array = {
    'ru': ['голубой', 'красный', 'зеленый'],

    get color(){
        let userColor = prompt('Введите ваш цвет');
        this.ru.push(userColor);
    },

    set color(value){
        console.log('value --> ', value.ru);
    }
}

array.color
array.color = array;