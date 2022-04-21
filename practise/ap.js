// const nemo = ['nemo'];
// const everyone = ['dory', 'bruce' , 'marlin' , 'nemo' , 'gill' , 'bloat' , 'nigel' , 'squirt' , 'darla' , 'hank']
// const large = new Array(10000).fill('nemo')
// function findNemo(array) {
//     let t0 = performance.now();//starting  time before loop
//     for (let i = 0; i < array.length; i++) {
//             if (array[i] === 'nemo') {
//                 console.log('found nemo!')
//             }
//     }
//     let t1 = performance.now();//starting timing after loop

//     console.log('call to find nemo took' + (t1-t0) +'Millisecond')
// }
/* const nemo = ['nemo'];
 const everyone = ['dory', 'bruce', 'marlin', 'nemo', 'gill', 'bloat', 'nigel', 'squirt', 'darla', 'hank']
 const large = new Array(10000).fill('nemo')
 function findNemo(array) {
     for (let i = 0; i < array.length; i++) {
        console.log(i); 
        if (array[i] === 'nemo') {
             console.log('Found Nemo!');
             break;
         }
     }
 }*/

/*function funChallenge(input) {
    let a = 10;//O(1)
    a = 50 + 3;//O(1)

    for (let i = 0; i< input.length ; i++) {//O(n)
      anotherFunction();//O(n)
        let stranger = true;//O(n)
        a++; //O(n)
 }
    return;//O(1)
}*/
//Big O(3+4n)

/*function printFirstItemThenFirstHalfThenSayHi100Times(items) {
    
    console.log(items[0]);//O(1)

    var middleIndex = Math.floor(items.length/2);//O(n/2)
    var index = 0;


    while(index < middleIndex){
        console.log(items[index]);
        index++;
    }

    for(var i = 0 ; i< 100 ; i++){ //O(100)
        console.log('hi');
    }
}*/
//O(n)

/*function compressBoxesTwice(boxes) {
    boxes.forEach(function(boxes){
        console.log(boxes);
    });

    boxes.forEach(function(boxes){
        console.log(boxes);
    })
}*/

//pairs 
/*const boxes = [1,2,3,4,5]

function LogPairsOfAllArray(array){
    for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; j++){
           console.log(array[i],array[j])
        }
    }
}

LogPairsOfAllArray(boxes);*/

function printAllNumbersThenAllPairsSums(numbers){
    console.log('these are the numbers:');
    numbers.forEach(function(number){
        console.log(number);
    })

    console.log('and these are their sums:');
    numbers.forEach(function(firstNumber){
        numbers.forEach(function(secondNumber){
            console.log(firstNumber + secondNumber);
        })
    })
}

printAllNumbersThenAllPairsSums([1,2,3,4,5])















