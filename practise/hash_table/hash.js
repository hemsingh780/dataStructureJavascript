/*let user = {
    name : 12344,
    magic:true,
    scream:function(){
        console.log("ooooooooooooooooooooooohhhhhhhhh !")
    }
}
user.scream();
user.spell = "abra ka dabra";
console.log(user);*/

class HashTable {

    constructor(size){
        this.data = new Array(size);
    }
   
    _hash(key) {
        let hash = 0;
        for(let i=0; i<key.length; i++){
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        } 

       return hash;
    }
    
    set(key,value){
        const address = this._hash(key);
        if(!this.data[address]){
            this.data[address] = [[],];
        }
        this.data[address].push([key,value])
        return this.data;
    }

    get(key){
     const address = this._hash(key);
     const currentBucket = this.data[address]
     if(currentBucket){ 
         return currentBucket[0][1]
     } 
    }

    keys(){
        const keyArray = []
        for (let i = 0; i < this.data.length; i++) {
           if(this.data[i]){ 
            keyArray.push(this.data[i][0][0])
           }
        }
        return keyArray
     
    }
}
const myHashTable = new HashTable(50);
// myHashTable.set('grapes', 10000)
console.log(myHashTable.set('grapes', 10000))
console.log(myHashTable.set('apples', 5000))
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys())
