const burger = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const text = document.querySelectorAll(".text__menu");
const icons = document.querySelectorAll(".contact__icon");
burger.addEventListener("click", () => {
    menu.classList.toggle("show");
    menu.classList.toggle("menu");
});

text.forEach(text => {
    text.addEventListener("click", () => {
        menu.classList.remove("show");
        menu.classList.add("menu");
    });
})

icons.forEach(icon => {
    icons.addEventListener("click", () => {
        menu.classList.remove("show");
        menu.classList.add("menu");
    });
})


