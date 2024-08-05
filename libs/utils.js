export function reload(arr, place, component) {
    let box = document.querySelector(`.${place}`);
    for (let item of arr) {
        let elem = component(item);
        box.append(elem);
    };
}