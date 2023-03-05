function scroll() {
    if (window.scrollY === 0)
        document.querySelector("#name").classList.remove("scroll");
    else {
        document.querySelector("#name").classList.add("scroll");
    }

    document.querySelectorAll("#projects > div").forEach(project => {
        if (
            document.documentElement.scrollTop !== 0 &&
            document.documentElement.scrollTop >= project.offsetTop - 0.5 * window.screen.height
        ) {
            project.classList.add("show");
        } else {
            project.classList.remove("show");
        }
    });
}

window.addEventListener("load", scroll);
document.addEventListener("scroll", scroll);
