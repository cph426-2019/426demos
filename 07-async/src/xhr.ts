export let main = () => {
    let url = "./feed.json";
    let req = new XMLHttpRequest();
    req.addEventListener("load", function() {
        console.log(this.responseText);
    });
    req.open("GET", url);
    req.send();
};

window.addEventListener("load", main);