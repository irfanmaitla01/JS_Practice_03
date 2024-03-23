// ++++++++++++ Truthy & Falsy +++++++++++++++++++

const user1 = "B@irfan.ai"
if (user1){                                // we not use any comparison, it assume that it have website on the basis of "B@irfan.ai"
    console.log("yes, there is a website");
}
else{
    console.log("not Match website");
}

const user2 = ""
if (user2){                                // we not use any comparison, functin assume, there is no website on the basis of " "
    console.log("yes, there is a website");
}
else{
    console.log("not Match website");
}