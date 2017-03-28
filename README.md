### Linked List Lab!

It turns out that there are a lot of interesting problems that can be solved with using linked lists.  

At our deli, there are a list of cashiers who have to tell each other when someone from corporate is in the store and they should be on their best behavior.  This is the plan they currently have, Alexandra is the greeter so she is the first person to spot the corporate officer and then if she is not available Kirstin, followed by Juliet, then Timmy and finally Jacob.  

```text
Alexandra -> Kirstin -> Juliet -> Timmy -> Jacob
```

![](	https://s3-us-west-2.amazonaws.com/curriculum-content/web-development/algorithms/linkedlistlab.jpg)

We would like to represent this chain as a linked list.  Each node as a javascript object, so each node will look like the following:

  `{name: 'Alexandra', next: 'addressOfNextPerson'}`

The collection of nodes should also be stored as a Javascript object.  The keys of the object will represent each node's address.  That address can be anything as long as the value of next points to that address.  For now, we'll just have the keys be a random string of digits.  The key next of each node points to the next node's address.

```javascript
  let collection = {rnadnm: {name: 'Alexandra', next: 'masjdrandm'},
    masjdrandm: {name: 'Kirstin', next: 'ntrandm'}, 
    ntrandm: {name: 'Juliet', next: null}
  }
```


Complete the tests as instructed.  
