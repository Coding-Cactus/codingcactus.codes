function cactus() {
    if (window.scrollY === 0)
        document.querySelector("#name").classList.remove("scroll");
    else {
        document.querySelector("#name").classList.add("scroll");
    }
}

window.onload = cactus;
document.addEventListener("scroll", cactus);
