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
        let  current_head = this.head;
        newnode.next = current_head;
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
}

node1 = new Node(5)
node2 = new Node(4)
node3 = new Node("coding")
node4 = new Node("happy")
console.log(node1.value)

mylist = new SLL()
console.log(mylist.addFront(node2.value))
mylist.addFront(node3.value)
mylist.addFront(node4.value)
console.log(mylist)
mylist.removeFront()
console.log(mylist)
console.log(mylist.front())

// Remove Front
// Write a method to remove the head node and return the new list head node. If the list is empty, return null.


