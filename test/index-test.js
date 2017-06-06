var chai = require('chai');
var sinon = require('sinon');
// change to give addresses of head,
// write function called get head.


describe('#getName', function() {
  it("should return the name of the node passed through", function() {
    let node = {name: 'Susie'}
    expect(getName(node)).toEqual('Susie')
  });
});

describe('#headNode', function() {
  it("should return head node of the linked list", function() {
    let firstNode = {name: 'susie', next: 'rkjasj'}
    let secondNode = {name: 'sam', next: 'asnan'}
    let lastNode = {name: 'charlie', next: null}
    let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
    let linkedList = 'whana'
    let head = collection[linkedList]
    expect(headNode(linkedList, collection)).toEqual(head)
  });
});

describe('#next', function() {
  it("should return the following node every time it is called", function() {
    let firstNode = {name: 'susie', next: 'rkjasj'}
    let secondNode = {name: 'sam', next: 'asnan'}
    let lastNode = {name: 'charlie', next: null}
    let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
    let linkedList = 'whana'
    let head = collection[linkedList]
    expect(next(head, collection)).toEqual(secondNode)
  });

  it("returns the correct node when called multiple times", function() {
    let firstNode = {name: 'susie', next: 'rkjasj'}
    let secondNode = {name: 'sam', next: 'asnan'}
    let lastNode = {name: 'charlie', next: null}
    let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
    let linkedList = 'whana'
    let head = collection[linkedList]
    let nextNode = next(head, collection)
    let nextNextNode = next(nextNode, collection)
    expect(nextNextNode).toEqual(lastNode)
  });
});

describe('#nodeAt', function() {
  it("should return the node at the provided index", function() {
    let firstNode = {name: 'susie', next: 'rkjasj'}
    let secondNode = {name: 'sam', next: 'asnan'}
    let lastNode = {name: 'charlie', next: null}
    let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
    let linkedList = 'whana'
    expect(nodeAt(0, linkedList, collection)).toEqual(firstNode)
    expect(nodeAt(2, linkedList, collection)).toEqual(lastNode)
  });
});

describe('#addressAt', function(){
  it("should return the address of the node at the address", function() {
    let firstNode = {name: 'susie', next: 'rkjasj'}
    let secondNode = {name: 'sam', next: 'asnan'}
    let lastNode = {name: 'charlie', next: null}
    let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
    let linkedList = 'whana'
    expect(addressAt(1, linkedList, collection)).toEqual('rkjasj')
    expect(addressAt(0, linkedList, collection)).toEqual('whana')

  })
})

describe('#indexAt', function() {
  it("should return the index of the provided node", function() {
    let firstNode = {name: 'susie', next: 'rkjasj'}
    let secondNode = {name: 'sam', next: 'asnan'}
    let lastNode = {name: 'charlie', next: null}
    let linkedList = 'whana'
    let collection = {rkjasj: secondNode, asnan: lastNode, whana: firstNode}
    expect(indexAt(firstNode, collection, linkedList)).toEqual(0)
    expect(indexAt(secondNode, collection, linkedList)).toEqual(1)
  })
})

describe('#insertNodeAt', function() {
  it("should set the next property of the inserted node", function() {
    let firstNode = {name: 'susie', next: 'rkjasj'}
    let secondNode = {name: 'sam', next: 'asnan'}
    let newNode = {name: 'jill', next: ''}
    let lastNode = {name: 'charlie', next: null}
    let collection = {rkjasj: secondNode,
      asnan: lastNode,
      whana: firstNode,
      ajhsak: newNode}
    let linkedList = 'whana'
    insertNodeAt(1, 'ajhsak', linkedList, collection)
    expect(newNode.next).toEqual('rkjasj')
  })

  it("should set the next property of the node previous to the inserted node", function() {
    let firstNode = {name: 'susie', next: 'rkjasj'}
    let secondNode = {name: 'sam', next: 'asnan'}
    let newNode = {name: 'jill', next: ''}
    let lastNode = {name: 'charlie', next: null}
    let collection = {rkjasj: secondNode,
      asnan: lastNode,
      whana: firstNode,
      ajhsak: newNode}
    let linkedList = 'whana'
    insertNodeAt(1, 'ajhsak', linkedList, collection)
    expect(firstNode.next).toEqual('ajhsak')
  })

  it("should insert the node at the provided index, while maintaining order of all the other nodes", function() {
    let firstNode = {name: 'susie', next: 'rkjasj'}
    let secondNode = {name: 'sam', next: 'asnan'}
    let newNode = {name: 'jill', next: ''}
    let lastNode = {name: 'charlie', next: null}
    let collection = {rkjasj: secondNode,
      asnan: lastNode,
      whana: firstNode,
      ajhsak: newNode}
    let linkedList = 'whana'

    insertNodeAt(1, 'ajhsak', linkedList, collection)
    expect(nodeAt(1, linkedList, collection)).toEqual(newNode)
    expect(nodeAt(2, linkedList, collection)).toEqual(secondNode)
  });
});

describe('#deleteNodeAt', function() {
  it("should set the next property of the node previous to the deleted node", function() {
    let firstNode = {name: 'susie', next: 'rkjasj'}
    let secondNode = {name: 'sam', next: 'asnan'}
    let newNode = {name: 'jill', next: ''}
    let lastNode = {name: 'charlie', next: null}
    let collection = {rkjasj: secondNode,
      asnan: lastNode,
      whana: firstNode,
      ajhsak: newNode}
      let linkedList = 'whana'
      deleteNodeAt(1, linkedList, collection)
      expect(firstNode.next).toEqual('asnan')
    })

    it("should delete the node at the provided index, while maintaining order of all the other nodes", function() {
      let firstNode = {name: 'susie', next: 'rkjasj'}
      let secondNode = {name: 'sam', next: 'asnan'}
      let lastNode = {name: 'charlie', next: null}
      let collection = {rkjasj: secondNode,
        asnan: lastNode,
        whana: firstNode}

        let linkedList = 'whana'

      deleteNodeAt(1, linkedList, collection)
      expect(nodeAt(0, linkedList, collection)).toEqual(firstNode)
      expect(nodeAt(1, linkedList, collection)).toEqual(lastNode)

  });
})
