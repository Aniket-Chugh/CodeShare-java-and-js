// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during compilation, before the code is executed.


// with var :
console.log(a);  // Output: undefined , no error or exception
var a = 5;
console.log(a);


//  Hoisting with let:

// console.log(b); //  ReferenceError: Cannot access 'b' before initialization
// let b = "Aniley";
// console.log(b);


// // hoiting with const
// console.log(c); // same as the let - ReferenceError: Cannot access 'c' before initialization
// const c = "Aniket"
// console.log(c);


// hoisting with function :

hello();
var d = 5;
console.log(d);
function hello() {
    console.log("hello function runs here");
}

hello();

// Function declarations are fully hoisted, so you can call them before they appear in the code.


// function expressions
// hellonew() // will see the error here too -  Cannot access 'hellonew' before initialization


// const hellonew = function () {
//     console.log("hello from the hello new ");

// }

// hellonew()

// !! very very imp to learn -->

// . Variables (var)
// console.log(a); // undefined
// var a = 5;


//* Compilation Phase:

// JS engine sirf declaration var a ko detect karta hai aur memory me space allocate kar deta hai.

// Lekin value assignment =5 ko nahi read karta abhi.

// * Execution Phase:

// Ab line by line execute hota hai:

// console.log(a) → undefined (kyunki value abhi assign nahi hui)

// a = 5 → ab value assign ho gayi

// 💡 Key: var ka initial value undefined hota hai, isliye engine "read" nahi karta assignment ko compilation me.

// 2. Functions (Function Declarations)
// foo();
// function foo() { console.log("Hello"); }


// Compilation Phase:

// JS engine poora function code memory me read kar leta hai.

// Isliye function kabhi bhi call kiya ja sakta hai, pehle ya baad me.

// Execution Phase:

// foo() call → memory me stored function run hota hai → prints "Hello"

// 💡 Difference:

// Function declarations ka poora code memory me store ho jaata hai → fully hoisted

// var sirf space banata hai, value undefined → partially hoisted

// 3. Why JS treats them differently?

// Functions: JS chahta hai ki scope ke andar function ko kabhi bhi call kar sako, chahe declaration baad me ho.

// Var: JS sirf variable ke liye space banata hai, actual value assignment line by line execute hota hai.

// Shortcut yaad rakhne ke liye:

// Var = partial hoisting (undefined)

// Function declaration = full hoisting (ready to call)

// Let/Const = hoisted but TDZ (cannot access before line)
