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
window.addEventListener("load", () => { document.body.classList.remove("no-js"); });

document.addEventListener("scroll", scroll);

window.onunload = () => { window.scrollTo(0,0); }

if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}
