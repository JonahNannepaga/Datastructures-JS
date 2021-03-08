const LinkedList = require('./LinkedList');

const myLinkedList = new LinkedList();

myLinkedList.insertAtBegininng(300);
myLinkedList.insertAtBegininng(200);
myLinkedList.insertAtBegininng(100);

myLinkedList.insertAtEnd(400);

myLinkedList.insertAtIndex(150, 3);

myLinkedList.printLinkedListData();

myLinkedList.getAtIndex(0);

myLinkedList.deleteAtIndex(3);

myLinkedList.printLinkedListData();

myLinkedList.clearLinkedList();

myLinkedList.printLinkedListData();