/*var arr3 = ['a','b','c','d']
var arr4 = ['z','x','y','a']

function FindTwoArrayCommon(arr1,arr2){
    for (let i = 0; i < arr1.length; i++) {
        for(let j=0;j < arr2.length;j++){
            if(arr1[i]===arr2[j]){
                return true;
            }
        }
        
    }
    return false;
}
FindTwoArrayCommon(arr3,arr4);

const array1 = ['a','b','c','x'];
const array2 = ['z','y','x'];

function containsCommonItem(arr1,arr2){
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i] === arr2[j]){
                return true;
            }
        }
    }
    return false;
}

containsCommonItem(array1,array2)

var arr3 = ['a', 'b', 'c', 'd']
var arr4 = ['z', 'x', 'y']

function ContainsCommonItem(array1,array2){
  //loop through first array and create object 
  //where properties === items in the array
  
  
    let map = {}

    for(let i=0;i<array1.length;i++){
        if(!map[arr3[i]]){
            const item = arr3[i];
             map[item] = true;    
        }
    }
//loop through second array and check if 
//item in second array exists on created object;
for(let j=0;j<array2.length;j++){
    if(map[arr4[j]]){
        return true;
    }
}
return false;
}
// ContainsCommonItem(arr3,arr4);



function containsCommonItem3(array1,array2){
 return array1.some(item => array2.includes(item))   
}

containsCommonItem3(arr3,arr4)*/


//reference

//context vs scope


//instantiation

/*class Player{

    constructor(name,type){
        console.log('player',this)
        this.name = name;
        this.type = type;
    }
   introduce(){
       console.log(`My name is ${this.name} and i am  ${this.type}`)
   }
}

class Wizard extends Player{
    constructor(name, type){
        super(name,type);
        console.log('wizard',this)
    }
    play(){
        console.log(`WEEEE I am ${this.type}`)
    }
}*/

// const wizard1 = new Wizard("Shelly","healer");
// const wizard2 = new Wizard("hem","FireMaker");










