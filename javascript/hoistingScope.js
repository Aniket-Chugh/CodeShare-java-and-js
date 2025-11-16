if (true) {
    var a = 10;
    let b = 20;
}

console.log(a);
// console.log(b); error


// var function-scoped hota hai, not block-scoped.
//

// !! To make this code run  :

let b;
if (true) {
    b = 30;
}

console.log(b); // now its global
