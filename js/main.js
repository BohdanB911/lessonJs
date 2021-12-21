// ДЗ.  написать калькулятора (+ , -, *, /)
// const btns = document.querySelector('.calc_wrap');
// console.log(btns)
// const rezWindow = document.querySelector('.nums_wndow');
// console.log(rezWindow)
// const allAct = document.querySelectorAll('.action_item');
// console.log(allAct)
// const allItems = document.querySelectorAll('.num_item');
// console.log(allItems)
// const equals = document.querySelector('.equals_wrap')
// console.log(equals)
// const cClear = document.querySelector('.action_item[data-value="c"]')
// console.log(cClear)

// let firstFilling = '';
// let secondFilling = '';
// let simbool = '';
// let dot = '';



// cClear.addEventListener('click', clear);

// function clear() {
//     rezWindow.innerHTML = '';
//     firstFilling = '';
//     secondFilling = '';
//     simbool = '';
// };





// btns.addEventListener('click', (e) => {
//     if (!e.target.classList.contains('btn')) return;
//     if (e.target.getAttribute('data-value') === 'c') return;

//     rezWindow.textContent = '';

//     let key = e.target.getAttribute('data-value');

//     equalRez(Number(firstFilling), simbool, Number(secondFilling))

//     if (key !== '+' && key !== '-' && key !== '*' && key !== '/') {

//         if (simbool === '' && key !== '=') {
//             firstFilling += key;
//             console.log(firstFilling);
//             rezWindow.textContent = firstFilling;
//         }
//         if (firstFilling != '' && simbool.length != 0 && key !== '=') {

//             secondFilling += key;
//             console.log(secondFilling);
//             rezWindow.textContent = secondFilling;

//         };

//     }

//     if (key === '+' || key === '-' || key === '*' || key === '/') {
//         let arr = [];
//         if (arr.length == 0) {
//             arr.push(key);
//             simbool = arr.toString();
//             console.log(simbool)
//             rezWindow.textContent = simbool;

//         }
//     }
//     if (key === '=') {
//         firstFilling = '';
//         secondFilling = '';
//         simbool = '';
//     }
//     if (key === '.') {
//         let dotArr = [];
//         dotArr.push(key);
//         console.log(dotArr)
//         if (dotArr.length > 1) {
//             dotArr.splice(1)
//             console.log(dotArr)
//         }
//     }


// });





// function equalRez(a, value, b) {
//     let rezult;
//     if (value === '*') {
//         rezult = mult(a, b)
//     };
//     if (value === '/') {
//         rezult = divi(a, b)
//     };
//     if (value === '-') {
//         rezult = subt(a, b)
//     }
//     if (value === '+') {
//         rezult = addition(a, b)
//     };
//     console.log(rezult)
//     return rezWindow.textContent = rezult;

// };



// function mult(a, b) {
//     return a * b
// };

// function divi(a, b) {
//     return a / b
// };

// function subt(a, b) {
//     return a - b
// };

// function addition(a, b) {
//     return a + b
// };



///////////////////////////////////////////////////
const URI = 'http://imtles.noodless.co.ua';
const PER_PAGE = 5;

// login: admin
// pass: itx85A!f^&07SGM!$Z

async function getPosts(page = 1) {

    const postsDiv = document.getElementById('posts');
    postsDiv.innerText = '';

    // запрашиваем JSON постов
    const posts_response = await fetch(`${URI}` + '/wp-json/wp/v2/posts' + `?per_page=${PER_PAGE}` + `&page=${page}`); // http://imtles.noodless.co.ua/wp-json/wp/v2/posts?per_page=2&page=1
    const posts_data = await posts_response.json();

    console.log(posts_data)

    async function getImage(id) {


        const img_response = await fetch(`${URI}` + '/wp-json/wp/v2/media/' + `${id}`); // http://imtles.noodless.co.ua/wp-json/wp/v2/media/7
        const img_data = await img_response.json();

        // console.log(img_data)

        return img_data;
    }

    posts_data.map(async(postItem) => {

        const image = await getImage(postItem.featured_media);

        console.log(image)

        const post = document.createElement('div');
        const postTitle = document.createElement('h2');
        postTitle.innerHTML = postItem.title.rendered;

        // const postImage = document.createElement('img');
        // postImage.setAttribute('src', `${image.media_details.sizes.thumbnail.source_url}`);
        const postText = document.createElement('p');
        postText.innerHTML = postItem.content.rendered;
        const postDate = document.createElement('p');
        const subStr = postItem.date.substring(0, 9);
        postDate.innerHTML = subStr;

        if (!image.media_details) {
            const zatichka = document.createElement('img');
            zatichka.setAttribute('src', './images/avatar.jpg');
            post.appendChild(zatichka)
        }
        if (image.media_details) {
            const postImage = document.createElement('img');
            postImage.setAttribute('src', `${image.media_details.sizes.thumbnail.source_url}`);
            post.appendChild(postImage);
        }

        postsDiv.appendChild(post);
        post.appendChild(postTitle);
        post.appendChild(postText);
        post.appendChild(postDate);

        return postsDiv;
    })

    return posts_data;
}

getPosts();
































// function suma(a) {
//     return function(b) {
//         return a + b
//     }
// }

// function minus(a) {
//     return function(b) {
//         return a - b
//     }
// }

// function mult(a) {
//     return function(b) {
//         return a * b
//     }
// }

// function del(a) {
//     return function(b) {
//         return a / b
//     }
// }

// function calc(func) {
//     return function(a) {
//         return function(b) {
//             return func(a)(b);
//         }
//     }
// }