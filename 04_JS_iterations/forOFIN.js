//+++++++++ For of Loop  ++++++++++++++++++++++

const arr=[1,2,3,4,5]
for (const valueOfArr of arr) {
    // console.log(valueOfArr);              // its work
}

const greetings="irfan Maitla"
for (const greet of greetings) {
    // console.log(greet);                  // its work
}

const map = new Map()
map.set('ir', "irfan")
map.set('ma', "Maitla")
map.set('2', "223")
// console.log(map)                            // its work

for (const [key, value] of map) {
    // console.log(key , ':-' , value);        // its work  
}


    //++++++++++  For in Loop  ++++++++++++++++++++++++++

const myObject ={
    5 : "25",
    3 : "99",
    6 : "66"
}
for (const key in myObject) {
//    console.log(`${key} this number if for ${myObject[key]}`);        // its work
    }

const programmingLanguages = ["JS", "C++", "HTML", "CSS"]
for (const key in programmingLanguages) {
    // console.log(`${key} Language is ${programmingLanguages[key]}`);  // its work
}