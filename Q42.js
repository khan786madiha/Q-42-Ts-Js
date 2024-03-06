"use strict";
// 42.	Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
Object.defineProperty(exports, "__esModule", { value: true });
// function showMagicians(magicians: string[]): void {
//     for (const magician of magicians) {
//         console.log(magician);
//     }
// }
// const magicianNames: string[] = ["Penn Jillette", "Criss Angel", "Teller"];
// showMagicians(magicianNames);   
// 
function show_magicians(magicians) {
    magicians.forEach((magician) => {
        console.log(magician);
    });
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great " + magicians[i];
    }
}
const magicianNames = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];
make_great(magicianNames);
show_magicians(magicianNames);
