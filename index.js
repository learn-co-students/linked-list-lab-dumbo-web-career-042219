import { link } from "fs";

function getName(node) {
  return node.name;
}

function headNode(linkedList, collection) {
  return collection[linkedList];
}

function next(head, collection) {
  let nextLocation = head.next;
  return collection[nextLocation];
}

function nodeAt(index, linkedList, collection) {
  let node = headNode(linkedList, collection);
  for (let i = 0; i < index; i++) {
    node = next(node, collection);
  }
  return node;
}

function addressAt(index, linkedList, collection) {
  let address = linkedList;
  for (let i = 0; i < index; i++) {
    address = collection[address].next;
  }
  return address;
}

function indexAt(node, collection, linkedList) {
  let index = 0;
  let targetNode = headNode(linkedList, collection);
  while (node !== targetNode) {
    targetNode = next(targetNode, collection);
    index++;
  }
  return index;
}

function insertNodeAt(index, pointer, linkedList, collection) {
  let targetNode = nodeAt(index - 1, linkedList, collection);
  let tempPointer = targetNode.next;
  targetNode.next = pointer;
  let nodeToInsert = next(targetNode, collection);
  nodeToInsert.next = tempPointer;
  return collection;
}

function deleteNodeAt(index, linkedList, collection) {
  let targetNode = nodeAt(index, linkedList, collection);
  let tempPointer = targetNode.next;
  let targetPrevNode = nodeAt(index - 1, linkedList, collection);
  targetPrevNode.next = tempPointer;
  return collection;
}