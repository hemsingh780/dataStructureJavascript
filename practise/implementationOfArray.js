/*class MyArray{

constructor(){
        this.length = 0; // initialize length 0
        this.data = {}; // create object to add array
}

get(index){
        return this.data[index]; //
}

push(item){ // push the item in an array in last 

        this.data[this.length] = item; // and item in array of length like the default length is 0 and this.data 0 index is item 
        this.length++;//and the length is increase by adding 1 
        return this.length; // and return the length 

}

pop(){//remove the last item in an array
        const lastItem = this.data[this.length-1] //last item of an array
        delete this.data[this.length-1]; //delete predefined method delete the last item in an array
        return lastItem; // return the last item of an array
}
delete(index){ 
        // delete array by put index values 
        const item = this.data[index]; // create item varible and put the index value 
        this.shiftItems(index);  
        return item;

}

shiftItems(index){

        for(let i = index; i< this.length -1 ; i++){
        this.data[i] = this.data[i+1];
        }

         delete this.data[this.length-1]; 
        this.length--;
        }
}

const NewArray = new MyArray();
NewArray.push(1)
NewArray.push(2)
NewArray.push(3)
NewArray.delete(0)
console.log(NewArray);*/

function mergSort(arr1,arr2){
 let sort = [3,8]

  for(let i = 0;i<arr1.length-1;i++){
     for(let j = 0;j<arr2.length-1;i++){
            
    }          
  }    

}


[8,3,5] [7,3,4,6]














