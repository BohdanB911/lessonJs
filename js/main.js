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

const contactList = [{
        id: 2,
        first_name: 'Vasya',
        last_name: 'Petrov',
        nick_name: '',
        phone: 093945394,
        group: [{
            name: 'friends',
            id: 2
        }],
        actions: null
    },
    {
        id: 1,
        first_name: 'Petya',
        last_name: '',
        nick_name: 'Sizo',
        phone: 09722122,
        group: [{
            name: 'best_friends',
            id: 1
        }],
        actions: [{
            name: 'missed call',
            value: 3,
            id: 1
        }]
    },
    {
        id: 5,
        first_name: 'Rustem',
        last_name: '',
        nick_name: 'Box',
        phone: 09700000,
        group: [{
            name: 'other',
            id: 3
        }],
        actions: [{
            name: 'missed call',
            value: 13,
            id: 1
        }]
    }
];

let newIdFirst = {
    id: 4,
    first_name: 'Goga',
    last_name: 'Dzogoshvily',
    nick_name: 'Arra',
    phone: 0975555553,
    group: [{
        name: 'Shayrma',
        id: 3
    }],
    actions: [{
        name: 'missed call',
        value: 7,
        id: 1
    }]
};

let newIdSecond = {
    id: 9,
    first_name: 'Iliya',
    last_name: 'Popovich',
    nick_name: 'Bogatir',
    phone: 0978899000,
    group: [{
        name: 'Ohrana',
        id: 3
    }],
    actions: [{
        name: 'missed call',
        value: 40,
        id: 7
    }]
};
let newIdThird = {
    id: 8,
    first_name: 'Ivan',
    last_name: 'Drago',
    nick_name: 'Belosnezhka',
    phone: 0973344876,
    group: [{
        name: 'Sport',
        id: 1
    }],
    actions: [{
        name: 'missed call',
        value: 33,
        id: 9
    }]
};

// contactList.push(newIdFirst, newIdSecond, newIdThird);

// const sortName = contactList.sort((a, b) => {
//     if (a.first_name < b.first_name) { return -1; }
//     if (a.first_name > b.first_name) { return 1; }
//     return 0;
// });

// let newArr = sortName.filter((i) => i.last_name !== '' && i.nick_name !== '')
// console.log(newArr)

console.log(contactList)

let searchValue = contactList.find(function(item) {
    return item.phone === 9700000
});

console.log(searchValue)