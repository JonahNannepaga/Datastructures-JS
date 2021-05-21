class Queue {
    constructor() {
        this.queue = [];
    }

    // Returns the length og the queue
    get length() {
        return this.queue.length;
    }

    // Add elements at the end of the Queue 
    enqueue(item) {
        this.queue.push(item);
    }

    // Returns first element in the Queue
    dequeue() {
        return this.queue.shift();
    }
        

    // Returns the first element on the queue
    peek() {
        return this.queue[0];
    }

    // Check if queue is empty
    isEmpty() {
        return this.length === 0;
    }
}

module.exports = Queue;