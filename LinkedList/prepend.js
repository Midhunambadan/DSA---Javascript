class Node{
    constructor(value){
        this.value=value
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

    getSize(){
        return this.size
    }


    append(value){
        const node=new Node(value)
        if(this.head==null){
            this.head=node
        }else{
            let temp=this.head
            while(temp.next){
                temp=temp.next
            }
            temp.next=node
        }

    }




    prepend(value){
        const node=new Node(value)

        if(this.isEmpty()){
            this.head=node
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }

    print(){
        if(this.head==null){
            console.log('Empty ')
        }else{
            let curr=this.head
            let listValues=''

            while(curr){
                listValues+=`${curr.value}` + ' '
                curr=curr.next
            }
            console.log(listValues);
        }

    }

}


const list=new LinkedList()


list.prepend(10)
list.print()

list.prepend(20)
list.print()

list.append(123)
list.print()