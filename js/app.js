const mobileMenu = () => {
    const hamburger = document.querySelector('#hamburger');
    const ulContainer = document.querySelector('.box');

    hamburger.addEventListener('click', () => {
        ulContainer.classList.toggle('box-active')
    })

}
mobileMenu()

window.onload = changeImageOnLoad;

const imgArray = ['./img/sunset.png', './img/birdsview.png', './img/branch.png'];
const imgArrayLength = imgArray.length


function changeImageOnLoad() {
    const backgroundImg = document.querySelector('.bg-container')
    let randomImg = Math.floor(Math.random() * imgArrayLength)

    backgroundImg.style.backgroundImage = "url("+imgArray[randomImg] +")";
}




