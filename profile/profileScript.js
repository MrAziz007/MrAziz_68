import { createHeader } from "../components/header.js";
import { createGrid, createProfile } from "../components/profile.js";
import { reload } from "../libs/utils.js";

document.querySelector('header').append(createHeader());

let id = localStorage.getItem('UserId');
console.log(id);


axios.get(`http://localhost:3001/posts?userId=${id}`)
    .then(res => {
        console.log(res)
        reload(res.data, 'postsGrid', createGrid);
    })
    .catch(error => console.error(error));

axios.get(`http://localhost:3001/users?id=${id}`)
    .then(res => {
        console.log(res)
        reload(res.data, 'postsGrid', createProfile);
    })
    .catch(error => console.error(error));