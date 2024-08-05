export function createProfile(obj) {
    let avatarimg = document.querySelector('.avatarimg');
    let data1_nik = document.querySelector('.data1_nik');
    let data2_1 = document.querySelector('.data2_1');
    let data2_2 = document.querySelector('.data2_2');
    let data2_3 = document.querySelector('.data2_3');
    let profilData3 = document.querySelector('.profilData3');

    avatarimg.setAttribute('src', obj.imgprofile);
    data1_nik.textContent = obj.nikname;
    data2_1.textContent = '12 posts';
    data2_2.textContent = obj.followers + ' followers';
    data2_3.textContent = obj.followings + ' following';
    profilData3.textContent = obj.name + " " + obj.surname;
}

export function createGrid(obj) {
    let gridElemImg = document.createElement('img');
    gridElemImg.setAttribute('src', obj.post);
    gridElemImg.style.height = "90%";

    return gridElemImg
}