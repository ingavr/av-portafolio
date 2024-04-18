const nav = document.querySelector("#nav");
const open = document.querySelector("#open__menu");
const close = document.querySelector("#close__menu");
const close2 = document.querySelector("#as");

open.addEventListener("click", () => {
    nav.classList.add("visible");
    
});

close.addEventListener("click", () => {
    nav.classList.remove("visible");
});

close2.addEventListener("click", () => {
    nav.classList.remove("visible");
});