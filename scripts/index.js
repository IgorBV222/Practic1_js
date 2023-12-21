// func(12);
// func('Hello');

// function func(param) {
//     //вариант перегрузки функции для аргумента ввиде числа
//     if (typeof param === 'number') { 
//         console.log('Сработал первый экземпляр перегруженной функции.');
//         return;
//     }
//     //вариант перегрузки функции для аргумента ввиде строки
//     if (typeof param === 'string') {
//         console.log('Сработал второй экземпляр перегруженной функции.');
//         return;
//     }
// }

// console.log(calculateCalories('man', 180));
// console.log(calculateCalories('women', 167, 3));
// let arr = [
//     {
//         gender: 'man',
//         height: 179
//     },
//     {
//         gender: 'women',
//         height: 170
//     },
//     {
//         gender: 'man',
//         height: 160
//     }
// ];

// console.log(calculateCalories(arr));

// function calculateCalories(gender, height, persons) {
//     if (Array.isArray(arguments[0]) && arguments.length == 1) {
//         let result = 0;
//         for (let el of arguments[0]) {
//             result += el.gender === 'man' ? (el.height - 100) * 20 : (el.height - 105) * 19;
//         }
//         return result;
//     }
//     let result = gender === 'man' ? (height - 100) * 20 : (height - 105) * 19;
//     if (typeof persons === 'number') {
//         result *= persons;
//     }
//     return result;
// }

// console.log (pow(5,4));
// console.log (pow(7));

// function pow(left, right = 2) {
//     return left ** right;    
// }

rectangle('red', 120, 150);
rectangle('blue', 200);

function rectangle(color, width, height) {
    document.write (
        '<div style = "' + 
        `width: ${width}px; ` +
        `height: ${typeof height === 'number' ? height : width}px; ` +
        `background-color: ${color}` +
        '"></div>'
    )
}