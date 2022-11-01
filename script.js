const menu = document.querySelector(".nav--menu");
const logo = document.querySelector(".nav--logo");
const closes = document.querySelector(".nav--close");
const container = document.querySelector('.secondary')
const nav = document.querySelector('.navbar')

menu.addEventListener('click', ()=>{
    container.classList.add("wrapper")
    nav.classList.add("open--nav")
    logo.classList.add("display--none")
    menu.classList.add("display--none")

})

closes.addEventListener('click', ()=>{
    container.classList.remove("wrapper")
    nav.classList.remove("open--nav")
    logo.classList.remove("display--none")
    menu.classList.remove("display--none")
})
