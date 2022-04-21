class Node{
    constructor(value){
      this.left = null
      this.right  = null
      this.value = value
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null
    }

    insert(value){
       const newNode = new Node(value)
       if(this.root === null){
         this.root = newNode
         return this
       }else{
       let currentNode = this.root
       while(true){
           if(value < currentNode.value){
               if(!currentNode.left){
                   currentNode.left = newNode
                   return this
               }
                currentNode = currentNode.left
           }else{
               if(!currentNode.right){
                   currentNode.right = newNode
                   return this
               }
                currentNode = currentNode.right
           }
       }
    }
}
  lookup(value){
       if(!this.root){
           return false
       }

       let currentNode = this.root
       while(currentNode){
           if(value < currentNode.value){
               currentNode = currentNode.left
           }else if(value > currentNode.value){
               currentNode = currentNode.right
           }else if(value === currentNode.value){
               return currentNode
           }
       }
       return false
     }
   }

const tree = new BinarySearchTree()
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
console.log(tree.lookup(1))
console.log(tree.lookup(70))


// console.log(JSON.stringify(traverse(tree.root)))
// console.log(tree);
function traverse(node){
    const tree  = {value:node.value};
    tree.left = node.left === null ? null:
    traverse(node.left);
    tree.right = node.right === null ? null:
    traverse(node.right)
    return tree;
}
  