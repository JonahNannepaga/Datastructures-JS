const LinkedListNode = require('./LinkedListNode');

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    /* Insert First node */
    insertAtBegininng(data) {
        this.head = new LinkedListNode(data , this.head);
        this.size++;
    }

    /* Insert Last node */
    insertAtEnd(data) {
        let node = new LinkedListNode(data);
        let currentNode;
        if(!this.head) {
            this.head = node;
        } else {
            currentNode = this.head;
            while(currentNode.next) {
                currentNode = currentNode.next;
            }
            currentNode.next = node;
        }
        this.size++;
    }

    /* Insert at index */
    insertAtIndex(data,index) {
        // if index is negative
        if(index<0) {
            throw new Error('Index cannot be in negative');
        }
         // if index is out of range
        if(index>0 && index>this.size) {
            throw new Error('Passed index is out of range');
        }
        //If first index the we use insertAtFirst
        if(index===0) {
            this.insertAtBegininng(data);
            return;
        }
        //If last index the we use insertAtEnd
        if(index===(this.size - 1)) {
            this.insertAtEnd(data);
            return;
        }

        const node = new LinkedListNode(data);
        let current,previous;
        current = this.head;
        let count = 0;
        while(count<index) {
            previous = current;
            count++;
            current = current.next;
        }

        node.next = current;
        previous.next = node;
        this.size++;
    }

    /* Get at a index */
    getAtIndex(index) {
        let current = this.head;
        let count = 0;
        while(current) {
            if(count === index) {
                console.log(`Data at index-${index}::`,current.data);
                return;
            }
            count++;
            current = current.next;
        }
    }

    /* Remove at index */
    deleteAtIndex(index) {
        // if index is negative
        if(index<0) {
            throw new Error('Index cannot be in negative');
        }
            // if index is out of range
        if(index>0 && index>this.size) {
            throw new Error('Index is out of range');
        }

        let current = this.head;
        let previous, count=0;
        if(index===0) {
            this.head = current.next;
        } else {
            while(count<index){
                count++;
                previous = current;
                current = current.next;
            }
            previous.next = current.next;
        }
        this.size--;
    }

    /* Clear List */
    clearLinkedList() {
        this.head = null;
        this.size = 0;
    }

    /* Print List Data */
    printLinkedListData() {
        if(this.size === 0) {
            console.log('Linked List is empty');
        }
        let currentNode = this.head;
        while(currentNode) {
            console.log(currentNode.data);
            currentNode = currentNode.next;
        }
    }
}
module.exports = LinkedList;