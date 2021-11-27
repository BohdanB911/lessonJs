// Задачка, перебрать массив и изменить в нем данные, результат вывести в консольку
// Исходный массив:
// [123, 'voda', ['q', 'w', 'e' ], { a: 'b', v: 'qwe', c: 123} ]
// Новый массив
// [1234, 'pivo', ['q', 'w', 'e', 'r'], {a: 'b', v: 'qwe', c: 123}]


let parentArr = [123, 'voda', ['q', 'w', 'e'], { a: 'b', v: 'qwe', c: 123 }];

for (let i = 0; i < parentArr.length; i++) {

    if (parentArr[i] === 123) {
        parentArr.splice(i, 1, 1234)
    };
    if (parentArr[i] === 'voda') {
        parentArr.splice(i, 1, 'pivo')
    };
    if (Array.isArray(parentArr[i])) {
        parentArr[[i]].splice(parentArr[[i].length - 1], 0, 'r');
    };

}

console.log(parentArr)

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

contactList.push(newIdFirst, newIdSecond, newIdThird);

const sortName = contactList.sort((a, b) => {
    if (a.first_name < b.first_name) { return -1; }
    if (a.first_name > b.first_name) { return 1; }
    return 0;
});

let newArr = sortName.filter((i) => i.last_name !== '' && i.nick_name !== '')
console.log(newArr)

console.log(contactList)

let searchValue = contactList.find(function(item) {
    return item.phone === 9700000
});

console.log(searchValue)


////////////////////////////////////////DOM DZ////////////////////////////////////////////////////////


////////////////////////1/////////////
let btn = document.querySelector('.btn');

let arr = [];
btn.addEventListener('click', function(e) {
    e.preventDefault();
    let val = document.querySelector('.message').value;
    arr.push(val)
    if (val !== '') {
        document.querySelector('.show_display').innerHTML = val;
    }
});
console.log(arr)


////////////////////////2/////////////
let images = [
    './images/1.jpg',
    './images/2.jpg',
    './images/3.jpg',
    './images/4.jpg',
    './images/5.jpg',
];

images.forEach(src => {
    const img = document.createElement('img');
    img.src = src;
    console.log(src)
    const div = document.createElement('div');
    div.className = 'img_item-wrap';
    div.append(img);

    document.querySelector('#img_wrap').append(div);
});


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

// /////////////////////////4//////////////////////

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





let push = btn2.addEventListener('click', function(e) {
    e.preventDefault();
    let rowsVal = rows.value;
    let colsVal = columns.value
    for (let i = 1; i <= rowsVal; i++) {
        let createTr = document.createElement('tr');
        table.appendChild(createTr);
        for (let j = 1; j <= colsVal; j++) {
            let createTd = document.createElement('td');
            createTr.appendChild(createTd);
        }
    }

});


/////////////////////////////////DZ DOM 2/////////////////////////////////////////////////




const results = [{
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Justine",
            "last": "Leclerc"
        },
        "location": {
            "street": {
                "number": 7398,
                "name": "Rue de L'Abbé-Rousselot"
            },
            "city": "Reims",
            "state": "Lot",
            "country": "France",
            "postcode": 24454,
            "coordinates": {
                "latitude": "-0.2766",
                "longitude": "149.5580"
            },
            "timezone": {
                "offset": "-4:00",
                "description": "Atlantic Time (Canada), Caracas, La Paz"
            }
        },
        "email": "justine.leclerc@example.com",
        "login": {
            "uuid": "78e4b9b9-25b8-4316-aa75-86ae97e8d5ea",
            "username": "goldenlion465",
            "password": "iwantu",
            "salt": "wRHogy4P",
            "md5": "53e6884eb2b7b3608820858e65289f99",
            "sha1": "40350fe8909865490e924984f3f502804c164ced",
            "sha256": "a9854de8eebd1173af97cfba015b0da040c31cb71eeb24a557747f341aff81bf"
        },
        "dob": {
            "date": "1981-07-18T20:02:33.204Z",
            "age": 40
        },
        "registered": {
            "date": "2018-03-26T08:59:46.637Z",
            "age": 3
        },
        "phone": "03-85-83-86-10",
        "cell": "06-47-58-26-72",
        "id": {
            "name": "INSEE",
            "value": "2NNaN83356921 80"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/59.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/59.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/59.jpg"
        },
        "nat": "FR"
    },
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "یلدا",
            "last": "یاسمی"
        },
        "location": {
            "street": {
                "number": 8768,
                "name": "موحد دانش"
            },
            "city": "خوی",
            "state": "گلستان",
            "country": "Iran",
            "postcode": 57452,
            "coordinates": {
                "latitude": "-63.8246",
                "longitude": "-178.3459"
            },
            "timezone": {
                "offset": "+10:00",
                "description": "Eastern Australia, Guam, Vladivostok"
            }
        },
        "email": "yld.ysmy@example.com",
        "login": {
            "uuid": "6c8d3ab3-c658-4ae4-9d1a-cffdfea6e8a9",
            "username": "purplegoose795",
            "password": "bacchus",
            "salt": "NJ1WcXMh",
            "md5": "fcc86f82666ff28f90edb57a1fd83329",
            "sha1": "19c35c68dc397593dae625baa292956a3b571d53",
            "sha256": "c704d0b0c45c72d5381c09eb050cf9b81be90898ce54953bc3cf52753b5a1b25"
        },
        "dob": {
            "date": "1951-09-23T10:46:15.737Z",
            "age": 70
        },
        "registered": {
            "date": "2017-04-13T22:16:22.185Z",
            "age": 4



        },
        "phone": "068-61136128",
        "cell": "0949-046-6792",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/17.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/17.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/17.jpg"
        },
        "nat": "IR"
    },
    {
        "gender": "female",
        "name": {
            "title": "Mrs",
            "first": "Rosalina",
            "last": "Almeida"
        },
        "location": {
            "street": {
                "number": 2487,
                "name": "Avenida Brasil "
            },
            "city": "Rio Verde",
            "state": "Goiás",
            "country": "Brazil",
            "postcode": 97764,
            "coordinates": {
                "latitude": "62.8579",
                "longitude": "100.2040"
            },
            "timezone": {
                "offset": "+3:30",
                "description": "Tehran"
            }
        },
        "email": "rosalina.almeida@example.com",
        "login": {
            "uuid": "0c911a6c-2d2a-4da1-b593-3e7e17aabf31",
            "username": "sadtiger389",
            "password": "bear1",
            "salt": "HpDvNtk7",
            "md5": "568baa0d92664cd66324bd3f685a3127",
            "sha1": "da4d8dbaba6499680d5ed19183cd1f11f049588c",
            "sha256": "149e59daf701874429715f39333df71b5be7bc652bbf4fa1120d91241abd768d"
        },
        "dob": {
            "date": "1984-11-18T14:04:48.073Z",
            "age": 37
        },
        "registered": {
            "date": "2015-04-22T01:58:30.278Z",
            "age": 6
        },
        "phone": "(82) 0685-1432",
        "cell": "(94) 8181-6892",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/12.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/12.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/12.jpg"
        },
        "nat": "BR"
    },
    {
        "gender": "male",
        "name": {
            "title": "Mr",
            "first": "Friedrich",
            "last": "Feldmann"
        },
        "location": {
            "street": {
                "number": 4494,
                "name": "Wiesenweg"
            },
            "city": "Erkrath",
            "state": "Baden-Württemberg",
            "country": "Germany",
            "postcode": 96855,
            "coordinates": {
                "latitude": "20.3350",
                "longitude": "111.5548"
            },
            "timezone": {
                "offset": "+10:00",
                "description": "Eastern Australia, Guam, Vladivostok"
            }
        },
        "email": "friedrich.feldmann@example.com",
        "login": {
            "uuid": "05930c4f-8475-4a52-b1be-5bb2d41ad926",
            "username": "greenbear313",
            "password": "mopar",
            "salt": "nLjncfFx",
            "md5": "55429d775bd4f8479389cee6df020ec7",
            "sha1": "89e8d982d90da128aade3f1e270c2e53d62c3ca5",



            "sha256": "78f8854c7580a6825eb92e2427b72169668c5dbcee7c0addcd8ee0363fd66e43"
        },
        "dob": {
            "date": "1979-04-03T02:04:29.618Z",
            "age": 42
        },
        "registered": {
            "date": "2017-04-26T04:37:09.079Z",
            "age": 4
        },
        "phone": "0752-3941001",
        "cell": "0175-1687786",
        "id": {
            "name": "",
            "value": null
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/men/49.jpg",
            "medium": "https://randomuser.me/api/portraits/med/men/49.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/men/49.jpg"
        },
        "nat": "DE"
    },
    {
        "gender": "female",
        "name": {
            "title": "Ms",
            "first": "Diane",
            "last": "Baker"
        },
        "location": {
            "street": {
                "number": 681,
                "name": "Pearse Street"
            },
            "city": "Clonakilty",
            "state": "Monaghan",
            "country": "Ireland",
            "postcode": 56026,
            "coordinates": {
                "latitude": "-25.5610",
                "longitude": "-100.1882"
            },
            "timezone": {
                "offset": "0:00",
                "description": "Western Europe Time, London, Lisbon, Casablanca"
            }
        },
        "email": "diane.baker@example.com",
        "login": {
            "uuid": "f6d2d1ae-f444-443f-bf30-f39230186950",
            "username": "beautifulpanda974",
            "password": "dingdong",
            "salt": "ndVTeqlo",
            "md5": "71d5fa3cfeec65ebd136df7a532d16d5",
            "sha1": "0294f344cc2c2d7dc48e42c90dcc1550b8521058",
            "sha256": "c5ec7f58848349d294ffe73cc4193691a6fcd17157de47140447addb43acd657"
        },
        "dob": {
            "date": "1945-05-30T17:32:32.057Z",
            "age": 76
        },
        "registered": {
            "date": "2005-05-17T08:51:31.428Z",
            "age": 16
        },
        "phone": "071-864-5262",
        "cell": "081-641-3875",
        "id": {
            "name": "PPS",
            "value": "9724576T"
        },
        "picture": {
            "large": "https://randomuser.me/api/portraits/women/8.jpg",
            "medium": "https://randomuser.me/api/portraits/med/women/8.jpg",
            "thumbnail": "https://randomuser.me/api/portraits/thumb/women/8.jpg"
        },
        "nat": "IE"
    }
];


let userOne = results[0];
let userTwo = results[1];
let userThree = results[2];
let userFour = results[3];

let usKeysArrOne = Object.entries(userOne);
let usKeysArrTwo = Object.entries(userTwo);
let usKeysArrThree = Object.entries(userThree);
let usKeysArrFour = Object.entries(userFour);

function cardFunction(cardItem) {
    const parent = document.getElementById('userCardWrap');
    const newElem = document.createElement('div');
    newElem.className = 'userCardItems';
    parent.appendChild(newElem);
    cardItem.map(function(key) {


        function addVal(item) {
            let addName = document.createElement('h2');
            addName.className = 'userName'
            let addNameStr = newElem.appendChild(addName);
            addNameStr.innerHTML = item;
        }
        if (key[0] === 'picture') {
            let addImg = document.createElement('img')
            addImg.className = 'item_img'
            addImg.setAttribute('src', key[1].large);
            newElem.appendChild(addImg)
        }
        if (key[0] === 'name') { addVal(`Имя : ${key[[1]].first}`), addVal(`Фамилия : ${key[[1]].last}`) };
        if (key[0] === 'nat') { addVal(`Национальность : ${key[1]}`) };
        if (key[0] === 'gender') { addVal(`Пол : ${key[1]}`) };
        if (key[0] === 'email') { addVal(`Электронная почта : ${key[1]}`) };
        if (key[0] === 'phone') { addVal(`Контактный телефон : ${key[1]}`) };
        if (key[0] === 'location') {
            addVal(`Улица : ${key[[1]].street.name}`);
            addVal(`Номер улицы  : ${key[[1]].street.number}`);
            addVal(`Город  : ${key[[1]].city}`);
        };
    })
}


cardFunction(usKeysArrOne)
cardFunction(usKeysArrTwo)
cardFunction(usKeysArrThree)
cardFunction(usKeysArrFour)


const btns = document.querySelectorAll('.tabs_btns-item');
const tabContent = document.querySelectorAll('.tabs_content-item');

btns.forEach(function(elem) {
    elem.addEventListener('click', activeTab)
});


function activeTab() {

    btns.forEach(function(act) {
        act.classList.remove('active');
    });

    this.classList.add('active');
    let tabVal = this.getAttribute('data-tab');
    console.log(tabVal);

    activeContent(tabVal)
}

function activeContent(tabValue) {
    tabContent.forEach(function(content) {
        console.log(content)
        if (content.classList.contains(tabValue)) {
            content.classList.add('active')
        } else {
            content.classList.remove('active')
        }
    });
}



/////////////////////////////////dz API///////////////////////////////
let box = document.querySelector('.an_color-wrap');

box.addEventListener('click', function() {

    fetch(`https://random-data-api.com/api/color/random_color`)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            console.log(data)

            for (let [key, value] of Object.entries(data)) {

                box.style.backgroundColor = value;
                console.log(key, value)
            }

        });


})