// Fronts
// Add Front
// Write a method that accepts a value and create a new node, assign it to the list head, and return a pointer to the new head node.
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }

}
class SLL {
    // constructor, other methods, removed for brevity
    constructor() {
        this.head = null;
    }
    addFront(value) {
        let newnode = new Node(value)
        
        newnode.next = this.head;
        this.head = newnode;
        return this.head
        
    }
    // Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.
    removeFront() {
        if (this.head) {
            this.head = this.head.next
        }
        return this.head

    	
    }

//     Front
// Write a method to return the value (not the node) at the head of the list. If the list is empty, return null.
            front() {
                if (this.head) {
                let currentNode = this.head;
                return currentNode.value
                }
                return null
            
            }

//Create a new SLL method length() that returns number of nodes in that list.
      length() {
          let count = 0;
          let runner = this.head;
          while (runner != null) {
              count += 1;
              runner = runner.next

          }
          return count
      }
//  Create display() that returns a string containing all list values. Build what you wish console.log(myList) did!
      display() {
          let runner = this.head;
          let str = "";// i am not sure if [] equals "", "" is an empty string array, but not a normal array
          while(runner) {
              str += runner.value;
              runner = runner.next
          }
          return str
      }

}

node1 = new Node(5)
node2 = new Node(4)
node3 = new Node("coding")
node4 = new Node("happy")
console.log(node1.value)

mylist = new SLL()
mylist.display()
console.log("The length of this SLL is "+mylist.length())
console.log(mylist.addFront(node2.value))
console.log(mylist.display())
mylist.addFront(node3.value)
mylist.addFront(node4.value)
console.log(mylist.display())
// console.log(mylist)
console.log("The length of this SLL is "+mylist.length())
mylist.removeFront()
console.log(mylist)
mylist.display()
console.log(mylist.front())
console.log("The length of this SLL is "+mylist.length())
console.log(mylist.display())
// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.


