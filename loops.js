const irfan55 = "irfanMaitla55"

console.log(irfan55)

// for (let i = 0; i < 5; i++) {
//     const element = i;
//     console.log(element);
    
// }

for (let i = 0; i <= 4; i++) {
    const element = i;
    console.log(element);
    if (element == 1) {
        console.log("This is One Number");
    }
    if (element == 3) {
        console.log("This is Three Number");
    }
    
}

// for (let i = 0; i < 3; i++) {
//     console.log(i);                  // `This is our Main Loop ${i}`
//     for (let j = 0; j <= 2; j++) {                                      //its Work
//         console.log(`This is our inner Loop which is present in Main Loop ${j}`);
        
//     }  
// }

// for (let k = 0; k <= 3; k++) {
//     console.log(k)
//     for (let m = 0; m < 5; m++) {                   // its work
//         console.log(m + "*" + k + "=" + m*k);
//     }
// }

const myArray = ["irfan", "Ali", "Ahmad", "Zain"]
for (let index = 0; index < myArray.length; index++) {
    // const element = myArray[index];
    // console.log(element);                    // its work
    console.log(myArray[index])
}

for (let i = 1; i < 20; i++) {
    if (i==5){
        break
    }
    const element = i;
    console.log(`The Value if i is  ${element}`)
}

for (let i = 1; i <= 6; i++) {
    if (i==4){
        console.log("The Detected value is four and it is not printed");
        continue
    }
    const element = i;
    console.log(`The Value if that element is  ${element}`)
}