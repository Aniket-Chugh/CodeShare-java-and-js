//!! A closure is formed when:

// A function is created inside another function, AND

// The inner function remembers the outer function’s variables,

// Even after the outer function has returned.

// !!! - Closures = function + its lexical scope (backpack of remembered variables).

// Closures
function outer() {

    let count = 7;
    console.log(count);

    function inner() {
        count++;
        console.log(count);
    }

    return inner;
}

// simple function
function outer2() {
    let count = 3;
    console.log(count);
    console.log(++count);



}

const fn = outer(); // fn ke equal kerke isiliye chala rhe kuki yha ye ek function return ker rha hai
outer2();



fn();

fn();
fn()


// !! not a clousers!
function notAClouser() {
    let count = 1;
    function inner1() {
        console.log("Aniket Chugh");

    }

    return inner1;

}

const fn3 = notAClouser();

fn3();


// Hardcore closure + async trap

function test() {
    let x = 1;

    setTimeout(() => console.log(x + 1), 30000); // jha js rukta nhi but aage chala jata hai and then after finishing of the function , its checks the call stack for the things like timeout and all and of found then print that

    x = 99;
}

test();


// tricky questions :


function once(fn) {
    let executed = false;
    let value;

    return function (...args) {
        if (!executed) {
            value = fn(...args);
            executed = true;
        }
        return value;
    }
}

const greetOnce = once((name) => `Hello ${name}`);

console.log(greetOnce("Aniket"));
console.log(greetOnce("Chugh"));
