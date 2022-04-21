/*function reverse(str){
     if(!str || str<2 || typeof str !== 'string'){
         return "that is not true ";
     }
    var backwards = []
    var totalItems = str.length-1;
    for(let i = totalItems ; i>=0 ; i--){
        backwards.push(str[i]);
    }
    console.log(backwards);

   return  backwards.join(' ');
}

reverse("hem singh dhoni");*/

// function reverse2(str){
//     return str.split('').reverse().join('')
// }
// reverse2("hello");

// const reverse3 = str => [...str].reverse().join('')





function reverse(str) {
   
    var backwards = []
    for(let i=str.length-1;i>=0;i++){
        backwards.push(str[i])
    }
    return backwards
}

reverse('hello')


















