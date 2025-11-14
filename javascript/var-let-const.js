var x = 10;
var x = 20; // allowed 😬
console.log(x);



// let-->
let a = 5;
// let a = 10; ❌ error

// const-->
const user = { name: "Aniket" };
user.name = "Chugh"
console.log(user.name);
// Because "const" locks the variable reference, not the object.
