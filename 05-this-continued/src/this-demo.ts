import { print } from "introcs";

export let main = () => {
    let aLine = new Path("A", [
        new Point(10, 20),
        new Point(0, 0),
        new Point(20, 40),
    ]);
    aLine.printPoints();
};
window.addEventListener("load", main);

class Point {
    constructor(
        public x: number,
        public y: number
    ) { }
}

class Path {
    constructor(
        public name: string,
        public points: Point[]
    ) { }

    printPoints() {
        // GOAL: print in the format of:
        // PATH_NAME[i] = x, y
        print(`The path's name is ${this.name}`);
        this.points.forEach(function(point, index) {
            print(`${"PATH_NAME"}[${index}] = ${point.x}, ${point.y}`)
        });
    }
}

// Part 2 - Implementation of forEach
// Definition of forEach
type Action<T> = (item: T, index?: number) => void;
let forEach = <T>(items: T[], actionFn: Action<T>, thisArg?: any): void => {
    // TODO
};