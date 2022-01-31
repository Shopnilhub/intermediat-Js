// true-false.js
// Falsy list
// 0
// ""
// NaN
// undefined
// null
// Truthy
// "0", ' ', [],{};
let name = 12;
if(name || name==0){
    console.log("Condition is true")
}
else{
    console.log("Condition is false")
}