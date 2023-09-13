const menu = document.querySelector(".menu")
const bars = document.querySelectorAll(".bars")

let flag = true
menu.addEventListener('click', () => {
    if (flag) {
        menu.classList.toggle("close")
        flag = false
        return
    }
    menu.classList.toggle("open")
    menu.classList.toggle("close")
})