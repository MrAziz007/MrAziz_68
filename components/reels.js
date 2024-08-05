export function createReels(arr) {
    let reals = document.createElement('div');
    let user = document.createElement('div');
    let reelsImg = document.createElement('img');
    let userNik = document.createElement('p');

    reelsImg.setAttribute('src', arr.img);
    userNik.textContent = arr.userNamae;

    reals.classList.add('swiper-slide');
    user.classList.add('user');
    userNik.classList.add('userNik');

    user.append(reelsImg);
    reals.append(user, userNik);

    reals.addEventListener('click', () => {
        createModal(arr.img);
    });

    return reals;
}

function createModal(img) {
    let reelsBox = document.querySelector('.reelsBox')
    let modal = document.createElement('div');
    let modalContent = document.createElement('div');
    let modalImg = document.createElement('img');

    modal.classList.add('modal');
    modalContent.classList.add('modal-content');
    modalImg.setAttribute('src', img);

    modalContent.appendChild(modalImg);
    modal.appendChild(modalContent);
    reelsBox.appendChild(modal);

    modal.style.display = 'block';

    setTimeout(() => {
        modal.style.display = 'none';
        reelsBox.removeChild(modal);
    }, 2000);
}