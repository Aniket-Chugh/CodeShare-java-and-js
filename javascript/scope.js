// ! Global Scope - Poore code me, function ke bahar bhi
// !! Function Scope - Sirf function ke andar
// !!! Block Scope - Sirf { } ke andar


var globalVar = 10;

function test() {
    var localVar = 20;
    if (true) {
        let blockVar = 30;
        console.log(globalVar); // 10
        console.log(localVar);  // 20
        console.log(blockVar);  // 30
    }
    console.log(blockVar);      // ReferenceError
}

test();
console.log(localVar);          // ReferenceError
