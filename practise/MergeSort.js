                            
//  left 4,2,3       left value : [2,3,4] , right value : [ 3 , 4 ,6]
                           //while(left.length && right.lenght){
// l->4   r->23                 left 0->2        <          right 0->3      
// [4 ]      [2,3]              left 0->3        <          right 0->3
  //        [2 ,3,4]            left 0->3        <          right 0->4
                              //}
//  rigth 4,3,6                  
//   l->4 r->36     
//   4      [3 6]   
//          [ 3 , 4 ,6]   


function mergeSortTopDown(array) {
      if(array.length <= 1) {
          return array
      }
      const middle  = Math.floor(array.length / 2);
      const left    =   array.slice(0, middle);
      const right   =  array.slice(middle);
      return mergeTopDown(mergeSortTopDown(left), mergeSortTopDown(right))
    }                   
    function mergeTopDown(left, right) {
      const array = [];

      while (left.length && right.length) {
          if(left[0]< right[0]) {
              array.push(left.shift());
          } else {
              array.push(right.shift());
          }
      }
      return array.concat(left).concat(right);
  }
  console.log(mergeSortTopDown([4,2,3,4,3,6]))
 


// console.log(mergeSortedArrays([2,3,2,4,5],[6,1,2,4,5]))

/*let a  = 10;
console.log(`before swapping a is ${a}`);
let b = 20;
console.log(`before swapping b is ${b}`);
function swapping (){
  while(a<b){
   let t = a;
  a  = b;
  b = t
}
}
swapping()
console.log(`after swapping a is ${a}`);
console.log(`after swapping  b is ${b}`);*/
