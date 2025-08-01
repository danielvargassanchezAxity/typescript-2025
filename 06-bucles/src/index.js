"use strict";
// for
let counter = 1;
let back = false;
for (counter; !back; counter++) {
    console.log("Iteracion en el for", counter);
    back = counter === 10;
}
counter = 1;
back = false;
while (!back) {
    console.log("Iteracon en el while:", counter);
    back = counter === 10;
    counter++;
}
back = false;
counter = 1;
do {
    console.log("Iteraciion en el do while", counter);
    back = counter === 1;
    counter++;
} while (!back);
