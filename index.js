function getName(node){
  return node.name;
}

function headNode(linkedList, collection){
  return collection[linkedList];
}

function next(node, collection){
  return collection[node.next];
}

function nodeAt(idx, linkedList, collection){
  let i = 0;
  let address = linkedList;

  while(i !== idx){
    address = collection[address].next;
    i++;
  }

  return collection[address];
}

function addressAt(idx, linkedList, collection){
  let i = 0;
  let address = linkedList;

  while(i !== idx){
    address = collection[address].next;
    i++;
  }

  return address;
}

function indexAt(node, collection, linkedList){
  let address = linkedList;
  let i = 0;

  while(collection[address] !== node){
    address = collection[address].next;
    i++;
  }

  return i;
}

function insertNodeAt(idx, newNode, linkedList, collection){
  let prevNode = nodeAt(idx - 1, linkedList, collection);

  collection[newNode].next = prevNode.next;
  prevNode.next = newNode;
}

function deleteNodeAt(idx, linkedList, collection){
  let prevNode = nodeAt(idx - 1, linkedList, collection);
  let targetNode = nodeAt(idx, linkedList, collection);
  prevNode.next = targetNode.next;
}