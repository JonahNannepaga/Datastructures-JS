
/*
    Linked list is a linear collection of data elements 
    whose order is not given by their physical placement in memory. 
    Instead, each element points to the next. 
    It is a data structure consisting of a collection of nodes which together represent a sequence.
 */

const LinkedList = require('./LinkedList');

const myLinkedList = new LinkedList();

myLinkedList.insertAtBegininng(300);
myLinkedList.insertAtBegininng(200);
myLinkedList.insertAtBegininng(100);

myLinkedList.insertAtEnd(400);

myLinkedList.insertAtIndex(150,3);

myLinkedList.printLinkedListData();

myLinkedList.getAtIndex(0);

myLinkedList.deleteAtIndex(3);

myLinkedList.printLinkedListData();

myLinkedList.clearLinkedList();

myLinkedList.printLinkedListData();