// Sam Hall, [04.11.2021 13:12]
// Задачка, перебрать массив и изменить в нем данные, результат вывести в консольку
// Исходный массив:
// [123, 'voda', ['q', 'w', 'e' ], { a: 'b', v: 'qwe', c: 123} ]
// Новый массив
// [1234, 'pivo', ['q', 'w', 'e', 'r'], {a: 'b', v: 'qwe', c: 123}]


// let parentArr = [123, 'voda', ['q', 'w', 'e'], { a: 'b', v: 'qwe', c: 123 }];

// for (let i = 0; i < parentArr.length; i++) {

//     if (parentArr[i] === 123) {
//         parentArr.splice(i, 1, 1234)
//     };
//     if (parentArr[i] === 'voda') {
//         parentArr.splice(i, 1, 'pivo')
//     };
//     if (Array.isArray(parentArr[i])) {
//         parentArr[[i]].splice(parentArr[[i].length - 1], 0, 'r');
//     };

// }

// console.log(parentArr)

/////////////////////////////////////////////////////// DZ///////////////////////////////////////////////

// const contactList = [{
//         id: 2,
//         first_name: 'Vasya',
//         last_name: 'Petrov',
//         nick_name: '',
//         phone: 093945394,
//         group: [{
//             name: 'friends',
//             id: 2
//         }],
//         actions: null
//     },
//     {
//         id: 1,
//         first_name: 'Petya',
//         last_name: '',
//         nick_name: 'Sizo',
//         phone: 09722122,
//         group: [{
//             name: 'best_friends',
//             id: 1
//         }],
//         actions: [{
//             name: 'missed call',
//             value: 3,
//             id: 1
//         }]
//     },
//     {
//         id: 5,
//         first_name: 'Rustem',
//         last_name: '',
//         nick_name: 'Box',
//         phone: 09700000,
//         group: [{
//             name: 'other',
//             id: 3
//         }],
//         actions: [{
//             name: 'missed call',
//             value: 13,
//             id: 1
//         }]
//     }
// ];

// let newIdFirst = {
//     id: 4,
//     first_name: 'Goga',
//     last_name: 'Dzogoshvily',
//     nick_name: 'Arra',
//     phone: 0975555553,
//     group: [{
//         name: 'Shayrma',
//         id: 3
//     }],
//     actions: [{
//         name: 'missed call',
//         value: 7,
//         id: 1
//     }]
// };

// let newIdSecond = {
//     id: 9,
//     first_name: 'Iliya',
//     last_name: 'Popovich',
//     nick_name: 'Bogatir',
//     phone: 0978899000,
//     group: [{
//         name: 'Ohrana',
//         id: 3
//     }],
//     actions: [{
//         name: 'missed call',
//         value: 40,
//         id: 7
//     }]
// };
// let newIdThird = {
//     id: 8,
//     first_name: 'Ivan',
//     last_name: 'Drago',
//     nick_name: 'Belosnezhka',
//     phone: 0973344876,
//     group: [{
//         name: 'Sport',
//         id: 1
//     }],
//     actions: [{
//         name: 'missed call',
//         value: 33,
//         id: 9
//     }]
// };

// contactList.push(newIdFirst, newIdSecond, newIdThird);

// const sortName = contactList.sort((a, b) => {
//     if (a.first_name < b.first_name) { return -1; }
//     if (a.first_name > b.first_name) { return 1; }
//     return 0;
// });

// let newArr = sortName.filter((i) => i.last_name !== '' && i.nick_name !== '')
// console.log(newArr)

// console.log(contactList)

// let searchValue = contactList.find(function(item) {
//     return item.phone === 9700000
// });

// console.log(searchValue)


////////////////////////////////////////DOM DZ////////////////////////////////////////////////////////


////////////////////////1/////////////
// let btn = document.querySelector('.btn');

// let arr = [];
// btn.addEventListener('click', function(e) {
//     e.preventDefault();
//     let val = document.querySelector('.message').value;
//     arr.push(val)
//     if (val !== '') {
//         document.querySelector('.show_display').innerHTML = val;
//     }
// });
// console.log(arr)


////////////////////////2/////////////
// let images = [
//     './images/1.jpg',
//     './images/2.jpg',
//     './images/3.jpg',
//     './images/4.jpg',
//     './images/5.jpg',
// ];

// images.forEach(src => {
//     const img = document.createElement('img');
//     img.src = src;
//     console.log(src)
//     const div = document.createElement('div');
//     div.className = 'img_item-wrap';
//     div.append(img);

//     document.querySelector('#img_wrap').append(div);
// });


///////////////////////////////3//////////////
let selVal = document.querySelector('select');
// let sel = document.querySelector('select').options;
let testBlock = document.getElementsByClassName('divTest')[0];
selVal.selected = testBlock.style.backgroundColor = 'red';

selVal.addEventListener('change', function() {
    if (selVal.value === 'red') testBlock.style.backgroundColor = 'red';
    if (selVal.value === 'blue') testBlock.style.backgroundColor = 'blue';
    if (selVal.value === 'green') testBlock.style.backgroundColor = 'green';
    if (selVal.value === 'yelow') testBlock.style.backgroundColor = 'yellow';

})

/////////////////////////4//////////////////////

const form = document.getElementById('form');
console.log(form)
const rows = document.getElementById('row');
console.log(rows)
const columns = document.getElementById('column');
console.log(columns)
const table = document.getElementById('table');
console.log(table)
let btn2 = document.querySelector('.btn2');
console.log(btn2)




let arrRow = [];
let arrCol = [];

btn2.addEventListener('click', function(e) {
    e.preventDefault();


    arrRow.push(rows.value)

    arrCol.push(columns.value)

});

console.log(arrRow);
console.log(arrCol)