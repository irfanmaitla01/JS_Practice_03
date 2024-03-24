let a=300
if (true) {
   let a=200                // it is Block scope which present in {}, other is Global Scope
    const b=100
    console.log(`The Value of a = ${a}`)
}
console.log(a)

function irfan(){
    const cast = "Maitla"
    function address(){
        const chak = "223/p"
        console.log(cast)
    }
    address()
    // console.log(chak)     // Big Function Can not call for items from inner function,
}                            //  but inner function can do it to call items from big function
irfan()


if (true) {
    const irfanUser = "Maitla"
    if (irfanUser === "Maitla"){
        const UserID = " idirfan223"
        console.log(irfanUser + UserID)
    }
    // console.log(UserID)
}
// console.log(irfanUser)

function addSome(num5){
    return num5 + 1                     // its Function
}
console.log(addSome(7))
const addAnother= function(num5){
    return num5 + 2                    //it is also Function but sometime it calls Expression
}
console.log(addAnother(7))