export default interface Observer<T> {
    update(observed: T): void;
}