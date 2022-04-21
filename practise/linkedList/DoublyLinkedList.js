

//!->10->5

class DoublyLinkedList{

    constructor(value){
     this.head = {
         value:10,
         next:null,
         prev:null
     }
     this.tail = this.head
     this.length  = 1
    }
    
    append(value){ //adding valye in end of linked list 
     const newNode = {
            value:value,
            next:null ,
            prev:null
     }  
     
     newNode.prev = this.tail
     this.tail.next = newNode
     this.tail = newNode
     this.length++
     return this
    }

    prepend(value){ //adding value in starting of linked list 
      const newNode = {
          value:value,
          prev:null,
          next:null
      }
    //   newNode.prev = this.head.value 
      this.head.prev = newNode
      newNode.next = this.head
      this.head = newNode
      this.length++
      return this
    }
    
    printList(){
     const array = []
     let currentNode = this.head;
     while(currentNode !== null){
         array.push(currentNode.value)
         currentNode = currentNode.next
     }
     return array
   }

    insert(index,value){
        if(index >= this.length){
         return this.append(value) 
        }        
        const newNode = {
            value:value,
            prev:null,
            next:null
        }
        //10->3->5->9->18->8
        const leader = this.traverseToIndex(index-1)
        const follower = leader.next
        newNode.prev  = leader
        leader.next = newNode;
        follower.prev = newNode
        newNode.next = follower
        this.length++
        return this.printList()
      }

    /*     
      head  = {
      value:10,
      next:{
          value:3,
          next:{
              value:5,
              next:{
                  value:9,
                  next:{
                      value:8,
                      next:null
                  }
              }
          }
      }
    }*/

      traverseToIndex(index){
          let counter = 0;
          let currentNode = this.head
          while (counter !== index) {
              currentNode = currentNode.next
              counter++
          }
          return currentNode
      }
      //3 index
     remove(index){
        const leader = this.traverseToIndex(index-1)        
        const currentValue = leader.next
        leader.next = currentValue.next
        this.length--
        return this.printList()
      }

}



const myLinkedList = new DoublyLinkedList(10)
myLinkedList.append(23)
myLinkedList.prepend(20)
myLinkedList.append(33)
myLinkedList.insert(3,34)
//console.log(myLinkedList.remove(3))
// console.log(myLinkedList.printList())
 console.log(myLinkedList);

