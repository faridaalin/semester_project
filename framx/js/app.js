// const hamburger = document.querySelector('#hamburger');

// hamburger-addEventListener('click', () => {
//     console.dir(event.target.nextElementSibling)
//     event.target.nextElementSibling.classList.toggle('open')

// })

const mobileMenu = () => {
    const hamburger = document.querySelector('#hamburger');
    const ulContainer = document.querySelector('.box');

    hamburger.addEventListener('click', () => {
        ulContainer.classList.toggle('box-active')
    })

}
mobileMenu()


