class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    // Add elements to top of stack -> PUSH
    push(element) {
        this.items[this.count] = element;
        console.log(`${element} added to ${this.count}`);
        this.count++;
        return this.count - 1;
    }

    // Return and Remove the top most item element in stack
    // Return undefined if stack is empty
    pop() {
        if(this.count === 0) {
            console.log('No elements to be removed undefined returned');
            return undefined;
        }
        this.count--;
        let deletedItem = this.items[this.count];
        this.items.splice((this.count),1);
        console.log(`${deletedItem} removed`);
        return deletedItem
    }

    // Check top element on top
    peek() {
        console.log(`Top Element is ${this.items[this.count - 1]}`);
        return this.items[this.count - 1];
    }

    // Check if stack is empty
    isEmpty() {
        console.log(this.count===0 ? 'Stack is empty' : 'Stack is not empty');
        return this.count === 0;
    }

    // Clear the stack
    clear() {
        this.items = [];
        this.count = 0;
        console.log('Stack cleared');
        return this.items;
    }
}

module.exports = Stack;