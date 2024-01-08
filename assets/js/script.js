const hamburguer = document.querySelector(".menu-hamburguer");
const navMenu = document.querySelector(".menu-lista");

hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelector(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburguer.classList.remove("active");
    navMenu.classList.remove("active");
}))