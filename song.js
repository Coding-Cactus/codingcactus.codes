const order = [3, 6, 4, 5, 1, 2, 0, 7];
const progress = [];

const ruby = document.querySelector("#logos > :first-child");
const logos = document.querySelector("#logos");
const overlay = document.querySelector("#overlay");
const closeOverlay = document.querySelector("#close");

function reset() {
    progress.length = 0;

    document.querySelectorAll("#logos .horizontal img").forEach((img) => {
        img.classList.remove("correct");
        img.classList.remove("incorrect");
        img.parentElement.style.pointerEvents = "auto";
    });

    logos.classList.remove("paused");
}

document.querySelectorAll("#logos .horizontal img").forEach((img, i) => {
    img.addEventListener("click", () => {
        if (!logos.classList.contains("paused")) {
            if (order[progress.length] === i) {
                progress.push(i);
                img.classList.add("correct");
                img.parentElement.style.pointerEvents = "none";

                if (progress.length === order.length) {
                    ruby.classList.add("green");

                    setTimeout(() => {
                        ruby.classList.add("clickable");
                        ruby.addEventListener("click", () => {
                            ruby.classList.remove("clickable");

                            overlay.classList.add("show");
                            document.body.style.overflow = "hidden";

                            closeOverlay.addEventListener("click", () => {
                                overlay.classList.remove("show");
                                ruby.classList.remove("green");
                                document.body.style.overflow = "";

                                setTimeout(reset, 4000);
                            }, { once: true });
                        });
                    }, 4000, { once: true })
                }
            } else {
                if (progress.length !== 0) {
                    logos.classList.add("paused");

                    const interval = setInterval(() => {
                        img.classList.toggle("incorrect");
                    }, 300)

                    setTimeout(() => {
                        clearInterval(interval);
                        reset()
                    }, 2000);
                }
            }
        }
    });
});
