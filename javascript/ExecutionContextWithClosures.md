!! How Execution Context connects with Closures?

function outer() {
    let x = 10;

    function inner() {
        console.log(x);
    }

    return inner;
}

const fn = outer();


JavaScript secretly creates this hidden internal structure:

outerEnvironment = {
    x: 10,
    inner: <function>
}

Then when inner is created, JS attaches this environment to inner:

inner.[[Environment]] = outerEnvironment
⬆️⬆️ this is a closures;


⭐ Now the lookup:
When you call:

fn();


which is actually inner(),

inner() tries to execute:
console.log(x);

So the engine looks:

Step 1 — Local Scope of inner()

Does inner() have x? → NO

Step 2 — Closure Environment
It checks:

inner.[[Environment]] = outerEnvironment


Inside that environment:


outerEnvironment = {
    x: 10
}
Found x = 10
It is found in the function’s closure environment, stored in HEAP memory, not in the call stack
So it prints 10.
