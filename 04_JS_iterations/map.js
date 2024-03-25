const myArray= [1,2,3,4,5]
const myNewArray = myArray.map((nums) => nums + 5 )
console.log(myNewArray);

//++++++++++  Chain System  ++++++++++++++++++++  more than one .map used

const myArray2= [1,2,3,4,5]
const myNewArray2 = myArray2
                .map((nums2) => nums2 * 10 )
                .map( (nums2) => nums2 + 3)
console.log(myNewArray2);


const myArray3= [1,2,3,4,5]
const myNewArray3 = myArray3
                .map((nums3) => nums3 * 10 )
                .map( (nums3) => nums3 + 3)
                .filter((nums3) => nums3 > 30 )
console.log(myNewArray3);