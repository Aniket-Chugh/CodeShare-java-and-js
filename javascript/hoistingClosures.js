for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);

    }, 1000);

}

// 333 - 1000ms ke baad saare callbacks ek hi i ko access karte hain, jo ab 3 hai.

for (let i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log(i);

    }, 1000);

}
// 0 1 2 - let i block-scoped hai → har iteration ke liye naya i create hota hai.  1000ms ke baad callbacks run hote hain → 0 1 2

// !!! 💡 Key: let naya variable banata hai har iteration, isliye closure ke andar sahi value freeze ho jaati hai.
