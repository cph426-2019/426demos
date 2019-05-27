import Observer from "./Observer";

export default interface Observable<T> {
    
    observers: Observer<T>[];

    addObserver(observer: Observer<T>): void {

    }

}