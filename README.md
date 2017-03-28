### Linked List Lab!

It turns out that there are a lot of interesting problems that can be solved with using linked lists.  

At our deli, there are a list of cashiers who have to cover for one another when someone is sick.  The person who they call is based on seniority.  

The list currently looks like this:

Alexandra -> Kirstin -> Juliet -> Timmy -> Jacob

1. We would like to structure each node as a javascript object, so each node will look like the following:

  `{name: 'Alexandra', next: 'addressOfNextPerson'}`

2. The collection of nodes should also be stored as a Javascript object.  The keys of the object will represent each node's address.  That address can be anything as long as the value of next points to that address.  For now, we'll just have the keys be a random string of digits.  The key next of each node points to the next node's address.

```javascript
  let collection = {rnadnm: {name: 'ferris', next: 'masjdrandm'},
    masjdrandm: {name: 'sloane', next: 'ntrandm'}, ntrandm: {name: 'cameron', next: null},
  }
```

3. Write a function called getName, that takes in a node and returns the individual's name

4. Write a function called next that takes in a node, and can return the next node.  We need to provide that function our collection of nodes as an argument.

Complete the rest of the tests as instructed.  
