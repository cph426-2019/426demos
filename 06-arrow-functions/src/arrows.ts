import { print } from "introcs";

export let main = () => {
    new ViewController(0);
};

class ViewController {
    constructor(public counter: number) {
        window.addEventListener('click', this.increment.bind(this));

        // A Brief History of the Arrow Function
        // 1. A tight `bind`
        // 2. The `self` Variable
        window.addEventListener('click', function() {
            print(`Anonymous: ${this.counter}`);
        });
        // 3. An arrow hits the mark
    }

    increment() {
        this.counter++;
    }
}

window.addEventListener("load", main);