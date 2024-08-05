import { createHeader } from "../components/header.js";
import { createPosts } from "../components/posts.js";
import { createReels } from "../components/reels.js";
import { reload } from "../libs/utils.js";

document.querySelector('header').append(createHeader());

axios.get('http://localhost:3001/reals')
    .then(res => {
        console.log(res)
        reload(res.data, 'swiper-wrapper', createReels);
    })
    .catch(error => console.error(error));

axios.get('http://localhost:3001/posts')
    .then(res => {
        console.log(res)
        reload(res.data, 'posts', createPosts);
    })
    .catch(error => console.error(error));

let swiper = new Swiper(".swiper", {
    direction: "horizontal",
    slidesPerView: 6,
    spaceBetween: 20,
    freeMode: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});