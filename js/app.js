// 'use strict';

// let UserName = prompt('what\'s your name?')
// alert("hello " + UserName + " welcome to my website")
// let score = 0;



// function Q1() {

//     let ginder = prompt("am I a male ?")

//     if (ginder.toLowerCase() === 'yes' || ginder.toLowerCase() === 'y') {
//         alert('correct');
//         score++;
//     } else if (ginder.toLowerCase() === 'no' || ginder.toLowerCase() === 'n') {
//         alert('rong');
//     }
// }


// function Q2() {

//     let home = prompt("was I born in KSA?")

//     if (home.toLowerCase() === 'yes' || home.toLowerCase() === 'y') {
//         alert('rong');
//     } else if (home.toLowerCase() === 'no' || home.toLowerCase() === 'n') {
//         alert('correct');
//         score++
//     }

// }

// function Q3() {

//     let language = prompt("am I good at english?")

//     if (language.toLowerCase() === 'yes' || language.toLowerCase() === 'y') {
//         alert('correct');
//         score++;
//     } else if (language.toLowerCase() === 'no' || language.toLowerCase() === 'n') {
//         alert('rong');
//     }

// }



// function Q4() {

//     let topics = prompt("Do I like the math and pyhiscs?")

//     if (topics.toLowerCase() === 'yes' || topics.toLowerCase() === 'y') {
//         alert('correct');
//         score++
//     } else if (topics.toLowerCase() === 'no' || topics.toLowerCase() === 'n') {
//         alert('rong');
//     }

// }

// function Q5() {
//     let tech = prompt("Do I like the proramming?")

//     if (tech.toLowerCase() === 'yes' || tech.toLowerCase() === 'y') {
//         alert('correct');
//         score++;
//     } else if (tech.toLowerCase() === 'no' || tech.toLowerCase() === 'n') {
//         alert('rong');
//     }

// }


// function Q6() {

//     let guessNum;
//     let num = 7
//     for (let i = 0; i < 3; i++) {

//         guessNum = prompt("guess the number which i have in my mind its (1-10) you have four trial to guess ?");
//         if (guessNum == num) {
//             alert("correct answer");
//             score++;
//             i = 3;
//             break;
//         } else if (guessNum < num) {
//             alert("too low");
//         } else if (guessNum > num) {
//             alert("too high");
//         } if (i == 2) {
//             alert("the correct answer is 7");
//         }

//     }

// }
// function Q7() {

//     let planet = ['mercury', 'venus', 'earth', 'mars', 'saturn', 'neptune'];
//     let pGuess = '';

//     for (let x = 0; x < 6; x++) {
//         pGuess = pGuess.toLowerCase();
//         pGuess = prompt('mention one planet in our galaxy!!');

//         for (let y = 0; y < planet.length; y++) {
//             if (pGuess == planet[y]) {
//                 alert('amaizing!! you are correct')
//                 score++;
//                 x = 6;
//                 break;
//             }

//         }
//         if (x == 5) {
//             alert('no more trials\n' + 'the right answers are ' + planet);
//         } else if (x < 6) {
//             alert('this is wrong');
//         }
//     }




// }

// Q1();
// Q2();
// Q3();
// Q4();
// Q5();
// Q6();
// Q7();
// alert('your sore is ' + score);
// alert('bye bye ' + UserName);






