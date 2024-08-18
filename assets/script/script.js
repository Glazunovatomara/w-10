const showMessage = () => console.log("Я учу JavaScript!");
showMessage();

//let num = 1;
//const img = document.querySelectorAll("img.main__gallery_images-image");

//const showPreviusImg = () => {
//    num = (num + img.length -1) % img.length;
//    console.log(num)
//    updateSelection()
//}

//const showNextImg = () => {
//    num = (num + 1) % img.length;
//    console.log(num)
//    updateSelection()
//}

//function updateSelection() {
//    let active = document.querySelector('.main__gallery_images-image:active');
//    if(active) active.classList.remove('active');
//    img [num].classList.add('active')
//}

const showNextImg = () => {
    let image = document.getElementById('img1');
    image.src = './assets/img/main__gallery_images-image-1.jpg';
}
const showPreviusImg = () => {
    let image = document.getElementById('img1');
    image.src = './assets/img/main__gallery_images-image-2.jpeg';
}