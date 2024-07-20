class Node {
    constructor(value){
        this.value = value
        this.next=null
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    isEmpty(){
        return this.size==0
    }

    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let temp=this.head
            while(temp.next!=null){
                temp=temp.next
            }
            temp.next=node
        }
        this.size++
    }

    insertNode(value,index){
        if(index<0||index>this.size){
            return 
        }

        if(index===0){
            this.prepend(value)
        }else{
            let node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }

    print(){
        if(this.isEmpty()){
            console.log('Empty')
        }else{
            let curr=this.head
            let str=""
            while(curr){
                str+=`${curr.value}` +' '
                curr=curr.next
            }
            console.log(str)
        }
    }
}


let list =new LinkedList()

list.prepend(10)
list.print()

list.prepend(20)
list.print()

list.append(30)
list.print()

list.insertNode(26,2)
list.print()

