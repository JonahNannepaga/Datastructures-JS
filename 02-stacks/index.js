const Stack = require('./Stack.js');

const stack = new Stack();

stack.isEmpty();
stack.push(42);
stack.push(13);

stack.peek();

stack.push(7);

console.log(stack);
stack.isEmpty();

stack.pop();
stack.pop();
stack.pop();
stack.pop();

console.log(stack);

stack.push(20);
console.log(stack);
stack.clear();
console.log(stack);