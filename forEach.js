const programmingTwo = ["JS", "C++", "HTML", "CSS"]
// programmingTwo.forEach( function (VoP) {
//     console.log(VoP);                       //its work
// });
// programmingTwo.forEach( (VoP) => {
//     console.log(VoP);                       // its work
// });

programmingTwo.forEach( (VoP, index, arr)=>{
    console.log(VoP, index, arr);
})



const myArray  = [
    {
        NameStudent : "ali",
        ClassStudent: "BS"
    },
    {
        NameStudent : "Ahmad",
        ClassStudent: "CS"
    },
    {
        NameStudent : "Zain",
        ClassStudent: "Inter"
    }
]
myArray.forEach( (item) =>{
    console.log(item.ClassStudent)
    console.log(item.NameStudent)
})