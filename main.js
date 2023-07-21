const cylinderHeight = prompt('Введите высоту цилиндра');
const cylinderRadius = prompt('Введите радиус цилиндра');

function cylinderVolumeCalculation(h, r) {
    return Math.PI*(r*r)*h
}

alert(`Объем цилиндра с высотой ${cylinderHeight}, и радиусом ${cylinderRadius} будет равен = ${cylinderVolumeCalculation(cylinderHeight, cylinderRadius)}`)