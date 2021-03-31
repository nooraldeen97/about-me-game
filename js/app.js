'use strict';

let UserName = prompt('what\'s your name?')
alert("hello " + UserName + " welcome to my website")
let score = 0 ;



function Q1(){

    let ginder = prompt("am I a male ?")
    
    if (ginder.toLowerCase() === 'yes' || ginder.toLowerCase() === 'y') {
        // console.log("correct");
        alert('correct');
        score++;
    } else if (ginder.toLowerCase() === 'no' || ginder.toLowerCase() === 'n') {
        // console.log("rong");
        alert('rong');
    }
}


function Q2() {

    let home = prompt("was I born in KSA?")
    
    if (home.toLowerCase() === 'yes' || home.toLowerCase() === 'y') {
        // console.log("correct");
        alert('rong');
    } else if (home.toLowerCase() === 'no' || home.toLowerCase() === 'n') {
        // console.log("rong");
        alert('correct');
        score++
    }

}

function Q3 () {

    let language = prompt("am I good at english?")
    
    if (language.toLowerCase() === 'yes' || language.toLowerCase() === 'y') {
        // console.log("correct");
        alert('correct');
        score++;
    } else if (language.toLowerCase() === 'no' || language.toLowerCase() === 'n') {
        // console.log("rong");
        alert('rong');
    }

}



function Q4 () {

    let topics = prompt("Do I like the math and pyhiscs?")
    
    if (topics.toLowerCase() === 'yes' || topics.toLowerCase() === 'y') {
        // console.log("correct");
        alert('correct');
        score++
    } else if (topics.toLowerCase() === 'no' || topics.toLowerCase() === 'n') {
        // console.log("rong");
        alert('rong');
    }

}

function Q5 () {
    let tech = prompt("Do I like the proramming?")
    
    if (tech.toLowerCase() === 'yes' || tech.toLowerCase() === 'y') {
        // console.log("correct");
        alert('correct');
        score++;
    } else if (tech.toLowerCase() === 'no' || tech.toLowerCase() === 'n') {
        // console.log("rong");
        alert('rong');
    }

}


function Q6 (){

    let guessNum = prompt("guess the number which i have in my mind its (1-10) you have four trial to guess ?");
    let num = 7
    for (let i = 0; i < 3; i++) {
    
        if (guessNum == num) {
            guessNum = alert("correct answer");
            // console.log("correct");
            score++;
            break;
        } else if (guessNum < num) {
            guessNum = prompt("too low, try again?");
        } else if (guessNum > num) {
            guessNum = prompt("too high , try again?");
            // console.log("rong");
         } if(i==2){
             alert("the correct answer is 7");
        }
    }

}




alert('"mention my preferable colors among these three color (red, blue, green) in order, which the most fovairate one take 1 and so on?"');

let favColor = ['blue', 'green', 'red'];
let guessColor = [prompt('first color').toLowerCase(), prompt('second color').toLowerCase(), prompt('third color').toLowerCase()];

for (let i = 0; i < 5; i++) {

    if (guessColor[0] == favColor[0] && guessColor[1] == favColor[1] && guessColor[2] == favColor[2]) {
        guessColor = alert("correct answer");
        // console.log("correct");
        score++;
        break;
    } else if (guessColor[0] !== favColor[0] || guessColor[1] !== favColor[1] || guessColor[2] !== favColor[2]) {
        alert("wrong, try again?");
        guessColor = [prompt('first color').toLowerCase(), prompt('second color').toLowerCase(), prompt('third color').toLowerCase()];
        // console.log("rong");
        if (i == 4)
            alert("the correct answer is (blue , green , red)");
    }

}

alert('your sore is '+ score);




alert('bye bye ' + UserName);



