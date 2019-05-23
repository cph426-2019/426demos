let main = () => {
    let all = document.querySelectorAll("*");
    all.forEach((element) => element.addEventListener('click', handleClick));
};

let handleClick = function(e: MouseEvent) {
    console.log(this.tagName);
    if (this.tagName === "HTML") {
        console.log("=====");
    }
    this.style.border = "1px solid red";
    this.style.background = "rgba(0, 0, 0, 0.1)";
};

window.addEventListener("load", main);