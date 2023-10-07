const btn = document.querySelector('button');
const rootElm = document.getElementById('root');

let mode = localStorage.getItem("mode");

if (!mode) {
    localStorage.setItem("mode", "light");
}

if (mode === "light") {
    rootElm.classList.remove('darkMode');
} else {
    rootElm.classList.add('darkMode');
}

btn.addEventListener("click", (e) => {
    e.preventDefault();

    // Toggle mode between light and dark
    mode = mode === "light" ? "dark" : "light";
    localStorage.setItem("mode", mode);

    if (mode === "light") {
        rootElm.classList.remove('darkMode');
    } else {
        rootElm.classList.add('darkMode');
    }
});
