(() => {
    const navToggle = document.querySelector(".nav-toggle");
    const offcanvasNav = document.querySelector(".offcanvas-nav");
    let fade = document.createElement("DIV");
    fade.className = "offcanvas-fade";
    let active = false;
    let toggle = () => {
        if (active) {
            offcanvasNav.classList.remove("active");
            document.body.removeChild(fade);
            active = false;
        } else {
            offcanvasNav.classList.add("active");
            document.body.appendChild(fade);
            active = true;
        }
    };
    navToggle.addEventListener("click", toggle);
    fade.addEventListener("click", toggle);
    fade.addEventListener("touchstart", toggle);
})();