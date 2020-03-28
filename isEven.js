
console.log('##ISEVEN.JS FIRING##');

var output = isEven([1, 4, 5, 6, 10, 12, 13]);
function isEven(num) {
    //create new empty array
    var array_of_evens = [];
    
    //for loop
    for (let i=0; i<num.length ; i++){
        if (num[i]%2 === 0){
            array_of_evens.push(num[i]);
        }
    }

    //if the number is even, add it to the array
        //then move on to the next number

    //return new array
    return array_of_evens;
}

console.log(output)