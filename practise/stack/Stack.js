//push method 
//pop method 


class Node{
    constructor(value){
        this.value = value;
        this.next = null
    }
}

// with linked list 
class Stack{
  
  constructor(){
      this.top = null
      this.bottom = null
      this.length = 0
  }

//   [1-->2-->3-->4-->5]
  
  push(value){
     const newNode = new Node(value)
     if(this.length === 0){
     this.top = newNode
     this.bottom = newNode
     }
     this.bottom.next = null
     newNode.next = this.top
     this.top  = newNode
     this.length++
     return this
  }

    pop(){
      const holdingPointer = this.top
      if(this.top === this.bottom){
          this.top = null
      }
      else{this.top = this.top.next}
      this.length--
      return holdingPointer
    }
}

const stackValue = new Stack()
stackValue.push(1)
stackValue.push(2)
stackValue.push(3)
// stackValue.pop()
// stackValue.pop()
// stackValue.pop()
console.log(stackValue)




