// Immediately Invoked Function Expressions IIFE

(function irfan(){                  //IIFE remove the polution which creste from Global Scope
    console.log("irfan Maitla")    // it use when we need urgent function call
})()  ;                            // only extra () use in whole function to call a function
 // ; semicolon use at the end to use another IIFE function call

 ( function irfanTwo (){
    console.log("irfan Maitla Two")
 })  () ;  
 
  //++++++++++++ its named IIFE because we named the function ++++++++++++++++++++++
  
 
 ( () => {
    console.log("irfan Maitla Three")   // also usse array function in IIFE
 })  () ; 

 //+++++++++++++ its Simple IIFE, because there is no Nmae of function +++++++++
 ( (nameWeCanUse) => {
    console.log(`irfan Maitla Three ${nameWeCanUse}`)
 })  ("From 223/p") ; 