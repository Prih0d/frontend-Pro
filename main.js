let soldierColorArmor = prompt('Цвет доспеха');
let soldierImageShield = prompt('Картинка на щите');

function isLannisterSoldier(colorArmor, imageShield) {
     return colorArmor === 'red' || imageShield === 'lion' ? true : false
}

// function isLannisterSoldier(colorArmor, imageShield) {
//     if(colorArmor === 'red' || imageShield === 'lion'){
//         return true
//     } else{
//         return false
//     }
// }

function outputIsLannister(func) {
    func ? console.log('Its Lannister') : console.log('Its not Lannister');
}

outputIsLannister(isLannisterSoldier(soldierColorArmor, soldierImageShield))