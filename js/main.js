// Sam Hall, [04.11.2021 13:12]
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