/*
const linkedList = {
    head:{
        value,
        next:{
            value,
            next:{
                value
                next:null
            }
        }
    }
}

*/


//!->10->5
/*class LinkedList{
    
    constructor(value){
     this.head = {
         value:value,
         next:null
     }
     this.tail = this.head
     this.length  = 1
    }

    append(value){ //adding valye in end of linked list 
     const newNode = {
            value:value,
            next:null
     }  
     this.tail.next = newNode
     this.tail = newNode
     this.length++
     return this
    }

    prepend(value){ //adding value in starting of linked list 
      const newNode = {
          value:value,
          next:null
      }
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
            next:null
        }
        //10->3->5->9->18->8
        const leader = this.traverseToIndex(index-1)
        const holdPointer = leader.next
        leader.next = newNode;
        newNode.next = holdPointer
        this.length++
        return this
      }
/*  head  = {
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
  }
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
      //10->4->6->4
      reverse(){
        this.head = this.tail
        return this
      }
}



const myLinkedList = new LinkedList(10)
myLinkedList.append(23)
myLinkedList.prepend(20)
myLinkedList.append(33)
// console.log(myLinkedList.insert(1,34));
// console.log(myLinkedList.remove(3))
// console.log(myLinkedList.printList())
// console.log(myLinkedList)
console.log(myLinkedList.reverse())*/
 
class LinkedList{
    
    constructor(value){
     this.head = {
         value:value,
         next:null
     }
     this.tail = this.head
     this.length  = 1
    }

    append(value){ //adding valye in end of linked list 
     const newNode = {
            value:value,
            next:null
     }  
     this.tail.next = newNode
     this.tail = newNode
     this.length++
     return this
    }

    prepend(value){ //adding value in starting of linked list 
      const newNode = {
          value:value,
          next:null
      }
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
            next:null
        }
        //10->3->5->9->18->8
        const leader = this.traverseToIndex(index-1)
        const holdPointer = leader.next
        leader.next = newNode;
        newNode.next = holdPointer
        this.length++
        return this
      }
/*  head  = {
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
      
      reverse(){   
          //constant - > 6->7->null
         //first -> //10->4-6->7->null
         //this.tail -> //10->4-6->7->null
         let first = this.head   
          this.tail = this.head   
          let second  = first.next
          let count = 0 
          while (second) {
              const temp = second.next    //67                       //7                   //null     
              second.next = first           //10->4-6->7->null       //4-10->4-6->7->null    //6->4-10->4-6->7->null
              first  = second              //4-10->4-6->7->null      //6->4-10->4-6->7->null  //7->6->4-10->4-6->7->null
              second = temp                 //67                     //7                       //null
              count++
              //first1  -> 4-10->4-6->7->null
              //first 2 -> 6->4-10->4-6->7->null
              // first 3 -> 7->6->4-10->4-6->7->null
              console.log(` -------------------first ${count}--------------`);                  
              console.log(first);
              console.log(` -------------------first ${count}--------------`);                  
           } 
            this.head.next = null;
            this.head = first
            return this
      }   
        
    //   let first = this.head;
    //   this.tail = this.head;
    //   let second = first.next;
  
    //   while(second) {
    //     const temp = second.next;
    //     second.next = first;
    //     first = second;
    //     second = temp;
    //   }
  
    //   this.head.next = null;
    //   this.head = first;
    //   return this.printList();
    // }

}



const myLinkedList = new LinkedList(4)
myLinkedList.append(6)
myLinkedList.prepend(10)
myLinkedList.append(7)
// console.log(myLinkedList.insert(1,34));
// console.log(myLinkedList.remove(3))
//  console.log(myLinkedList.printList())
// console.log(myLinkedList)
// console.log(myLinkedList.printReaverse());

console.log(myLinkedList.reverse())
