`function a() {
    console.log("inner a");
    b();
}

function b() {
    console.log("inner b");

}`

a();

---------------------------------------------------------------------------------------------------------a

GEC created
Stack:

[GEC]


Call to a() → create FEC for a

[FEC: a]
[GEC]


Inside a, call b()

[FEC: b]
[FEC: a]
[GEC]


b() finishes

[FEC: a]
[GEC]


a() finishes

[GEC]


Program ends

    (empty)

----------------------------------------------------------------------------------------------

