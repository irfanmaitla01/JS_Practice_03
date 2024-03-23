const user1 = true
const user2 = true
const user3 = true
const user4 = false
if (user1 && user2){                 // it check both connditions is True, then execute program
    console.log("User logged in")
}
if (user3 || user4){                 // if only one condition is true, it execute program
    console.log("User again logged in")
}
else {
    console.log("Not Permission to logged in")
}