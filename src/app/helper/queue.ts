
export class Queue<T> {
    private readonly elements: T[];

    constructor() {
        this.elements = [];
    }

    enqueue(e: T) {
        this.elements.push(e);
    }

    dequeue(): T {
        return this.elements.shift();
    }

    isEmpty(): boolean {
        return this.elements.length === 0;
    }

    peek(): T | undefined {
        return !this.isEmpty() ? this.elements[0] : undefined;
    }

    length(): number {
        return this.elements.length;
    }
}
