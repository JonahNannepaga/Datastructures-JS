const Queue = require('./Queue');

const queue = new Queue();

queue.enqueue('Jonah');
queue.enqueue('John');
queue.enqueue('Mom');
console.log(queue); // Queue { queue: [ 'Jonah', 'John', 'Mom' ] }

console.log('Dequeue -> ',queue.dequeue()); // Removed Jonah from the queue

console.log(queue); // Queue { queue: [ 'John', 'Mom' ] }

console.log(queue.length); // 2

console.log(queue.peek()); // John

console.log(queue.isEmpty()); // false

console.log('Dequeue -> ',queue.dequeue()); // Removed John from the queue

console.log('Dequeue -> ',queue.dequeue()); // Removed Mom from the queue

console.log(queue); // Queue { queue: [] }

console.log(queue.isEmpty()); // true


