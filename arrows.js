const userOne = {
    userName: "irfaMaitla",
    IdOne: "84626565",
    printMessage : function() {
        console.log(`${this.userName}, Welcome to my website`)
        console.log(`${this.IdOne}, it is your ID`)
    }
}
userOne.printMessage()
userOne.userName="Ali"
userOne.IdOne="hfgjdsghf"
userOne.printMessage()

//++++++++++++++++Arrows Functions +++++++++++++++++++++++++++
console.log("++++++++++++++ Now start about Arrows Functions +++++++++++++++")

// const multyTwoNumbers = (number1,number2) => {
//     return number1 * number2
// }                                                 //we can write in this form arrows function
// console.log(multyTwoNumbers(4,5))

const multyTwoNumbers = (number1,number2) => number1 * number2                // we can usse (), like (number1 * number2)
// const multyTwoNumbers = (number1,number2) => ({usernmae: "irfanMaitla"})  // for strings

console.log(multyTwoNumbers(5,6))