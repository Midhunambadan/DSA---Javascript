class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    isEmpty() {
        return this.size == 0;
    }

    prepend(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            node.next = this.head;
            this.head = node;
        }
        this.size++;
    }

    append(value) {
        let node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
        } else {
            let temp = this.head;
            while (temp.next != null) {
                temp = temp.next;
            }
            temp.next = node;
        }
        this.size++;
    }

    removeFrom(index) {
        if (index < 0 || index >= this.size) {
            return null;
        }
        let removeNode;
        if (index === 0) {
            removeNode = this.head;
            this.head = this.head.next;
        } else {
            let prev = this.head;
            for (let i = 0; i < index - 1; i++) {
                prev = prev.next;
            }
            removeNode = prev.next;
            prev.next = removeNode.next;
        }
        this.size--;
        return removeNode.value;
    }

    print() {
        if (this.isEmpty()) {
            console.log('Empty');
        } else {
            let curr = this.head;
            let str = "";
            while (curr) {
                str += `${curr.value} `;
                curr = curr.next;
            }
            console.log(str.trim());
        }
    }
}

let list = new LinkedList();

list.prepend(10);
list.print(); // Output: 10

list.prepend(20);
list.print(); // Output: 20 10

list.append(30);
list.print(); // Output: 20 10 30

list.removeFrom(1);
list.print(); 
