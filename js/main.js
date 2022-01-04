///////////////////////////////////////////////////
const URI = 'http://imtles.noodless.co.ua';
const PER_PAGE = 5;
// login: admin
// pass: itx85A!f^&07SGM!$Z
function allAround() {

    async function getPosts(page = 1) {
        const postsDiv = document.getElementById('posts');
        postsDiv.innerText = '';
        // запрашиваем JSON постов
        const posts_response = await fetch(`${URI}` + '/wp-json/wp/v2/posts' + `?per_page=${PER_PAGE}` + `&page=${page}`); // http://imtles.noodless.co.ua/wp-json/wp/v2/posts?per_page=2&page=1
        const posts_data = await posts_response.json();
        async function getImage(id) {
            const img_response = await fetch(`${URI}` + '/wp-json/wp/v2/media/' + `${id}`); // http://imtles.noodless.co.ua/wp-json/wp/v2/media/7
            const img_data = await img_response.json();
            return img_data;
        }


        posts_data.map(async(postItem, index) => {
            const placeholder = {
                'media_details': {
                    'sizes': {
                        'thumbnail': {
                            'source_url': './images/avatar.jpg'
                        }
                    }
                }
            };

            const image = postItem.featured_media ? await getImage(postItem.featured_media) : placeholder;
            const post = document.createElement('div');
            post.setAttribute('class', 'post_item')
            post.setAttribute('data-slide', index)
            const postTitle = document.createElement('h2');
            postTitle.innerHTML = postItem.title.rendered;
            const postText = document.createElement('p');
            postText.innerHTML = postItem.content.rendered;
            const postDate = document.createElement('p');
            const subStr = postItem.date.substring(0, 9);
            postDate.innerHTML = subStr;
            const postImage = document.createElement('img');
            postImage.setAttribute('src', `${image.media_details.sizes.thumbnail.source_url}`);
            postImage.setAttribute('class', `post_img`);
            post.appendChild(postImage);
            const btns = document.createElement('button');
            btns.setAttribute('value', postItem.id);
            btns.setAttribute('class', 'post_btn');
            btns.setAttribute('onclick', `getPost(${btns.value})`);
            btns.innerText = 'click here';
            postsDiv.appendChild(post);
            post.appendChild(postTitle);
            post.appendChild(postText);
            post.appendChild(postDate);
            post.appendChild(btns)

            return postsDiv;
        });
        console.log(postsDiv)
        const postArr = document.getElementsByClassName('post_item');
        console.log(postArr);
        postArr[0].classList.add('active');
        for (let i = 0; i < postArr.length; i++) {
            console.log(postArr[i])
        }



        // const a = document.querySelectorAll('.post_item');
        // console.log(a)

        const prevBtn = document.querySelector('.prev_arrow');
        const nextBtn = document.querySelector('.next_arrow');


        prevBtn.addEventListener('click', function() {

            const posts = document.querySelector('.all_posts')
            const currEl = document.querySelector('.active');

            if (!posts.firstElementChild.classList.contains('active')) {
                currEl.previousElementSibling.classList.add('active');
                currEl.previousElementSibling.classList.add('order');

                currEl.classList.remove('active');
                currEl.classList.remove('order');
            }
            if (posts.firstElementChild.getAttribute('data-slide') === currEl.getAttribute('data-slide')) {
                posts.lastElementChild.classList.add('active');
                posts.lastElementChild.classList.add('order');

                posts.firstElementChild.classList.remove('active');
                posts.firstElementChild.classList.remove('order')
            }

        });

        nextBtn.addEventListener('click', function() {

            const posts = document.querySelector('.all_posts')
            const currEl = document.querySelector('.active');

            if (!posts.lastElementChild.classList.contains('active')) {
                currEl.nextElementSibling.classList.add('active');
                currEl.nextElementSibling.classList.add('order');

                currEl.classList.remove('active');
                currEl.classList.remove('order');
            }

            if (posts.lastElementChild.getAttribute('data-slide') === currEl.getAttribute('data-slide')) {
                posts.firstElementChild.classList.add('active');
                posts.firstElementChild.classList.add('order');

                posts.lastElementChild.classList.remove('active');
                posts.lastElementChild.classList.remove('order');
            }

        });


        return posts_data;
    }
    getPosts();
}





allAround()
async function getPost(id) {
    const post_response = await fetch(`${URI}` + '/wp-json/wp/v2/posts/' + `${id}`); // http://imtles.noodless.co.ua/wp-json/wp/v2/posts/10
    const post_data = await post_response.json();
    const placeholder = {
        'media_details': {
            'sizes': {
                'thumbnail': {
                    'source_url': './images/avatar.jpg'
                }
            }
        }
    };




    async function getImage(id) {
        const img_response = await fetch(`${URI}` + '/wp-json/wp/v2/media/' + `${id}`); // http://imtles.noodless.co.ua/wp-json/wp/v2/media/7
        const img_data = await img_response.json();
        return img_data;
    }
    const image = post_data.featured_media ? await getImage(post_data.featured_media) : placeholder;
    const thisP = document.getElementById('posts');

    thisP.innerHTML = '';
    const postImage = document.createElement('img');
    postImage.setAttribute('src', `${image.media_details.sizes.thumbnail.source_url}`);
    postImage.setAttribute('class', `post_img`);
    const post = document.createElement('div');
    const close = document.createElement('div');
    const closeImg = document.createElement('img')
    close.setAttribute('class', 'close_btn');
    closeImg.setAttribute('src', './images/close_btn.jpg');
    close.appendChild(closeImg)
    const postTitle = document.createElement('h2');
    postTitle.innerHTML = post_data.title.rendered;
    const postText = document.createElement('p');
    postText.innerHTML = post_data.content.rendered;
    const postDate = document.createElement('p');
    const subStr = post_data.date.substring(0, 9);
    postDate.innerHTML = subStr;
    thisP.appendChild(post);
    post.appendChild(close);
    post.appendChild(postImage);
    post.appendChild(postTitle);
    post.appendChild(postText);
    post.appendChild(postDate);
    close.addEventListener('click', allAround)
        // console.log(post_data)
}