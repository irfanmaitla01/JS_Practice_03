const myStartValue = [1,2,3,4,5]

const myTotla = myStartValue.reduce ( function(acc, curval) {
    console.log(`Acc is ${acc} and current Value is ${curval}`);
    return acc + curval

}, 2)
console.log(`My Total value at the end is : ${myTotla}`);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
const TotalBill = shoppingCart.reduce((acc, item) => acc + item.price ,0 )
console.log(TotalBill);