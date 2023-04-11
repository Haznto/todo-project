'use strict';
let userName = prompt("please enter your name here!");
let gender = prompt("Enter Gender (male/female)")
let age = prompt("enter your age");

if (age <= 0) {
    alert('Please refresh the page and enter a correct information!')

}
else if (age>0) {
    let welcomeMsg = confirm("do you want to skip welcoming message?");
    if (welcomeMsg === false) { 
        if (gender.toLowerCase() === "male") {
        alert(`Welcome Mr. ${userName}`)
        
    }
    else if (gender.toLowerCase() === "female") {
        alert(`Welcome Mrs. ${userName}`)
    }
    else {
        alert(`Welcome ${userName}`)
    }
        
        
    }
}

// let answerYesNo1 = prompt("are you Jordanian?")
// let answerYesNo2 = prompt("are you LTUC student?")
// let answerYesNo3 = prompt("are you a graduate?")


// update code for assignment of class6 solution1:

// const question = ["are you Jordanian?","are you LTUC student?","are you a graduate?"];
// let answers = [];

// const askAndSave = (arr1,arr2) => {
//     for (let i=0; i<arr1.length; i++) {
//        let answerYesNo = prompt(arr1[i]);
//        if (answerYesNo.toLocaleLowerCase() === 'yes' || answerYesNo.toLocaleLowerCase() === 'no') {
//         arr2.push(answerYesNo)
//        } else if (answerYesNo === '') {
//         arr2.push('Invalid')
//         return arr2
//        }
//     }
// }
// answers = askAndSave(question,answers);
// const printAnswers = (arr) => {
//     for(let i=0; i< arr.length; i++) {
//         console.log(arr[i])
//     }
// }

// printAnswers(answers);

//end of  class6 solution 1 without while loop and it's not accurate for answers


// class 6 solution 2 trial start:
const question = ["are you Jordanian?","are you LTUC student?","are you a graduate?"];
let answers = [];
const askAndSave = (arr1,arr2) => {
        for (let i=0; i<arr1.length; i++) {
           let answerYesNo = prompt(arr1[i]);
           while (answerYesNo.toLocaleLowerCase() !=='yes' && answerYesNo.toLocaleLowerCase() !=='no'&& answerYesNo.toLocaleLowerCase() !== '') {
            answerYesNo = prompt(arr1[i]);
           }
           if (answerYesNo.toLocaleLowerCase() === 'yes' || answerYesNo.toLocaleLowerCase() === 'no') {
            arr2.push(answerYesNo)
           } else if (answerYesNo === '') {
            arr2.push('Invalid')
            
           }
        }
        return arr2
    }
    answers = askAndSave(question,answers);
    const printAnswers = (arr) => {
        for(let i=0; i< arr.length; i++) {
            console.log(arr[i])
        }
    }
    
    printAnswers(answers);
// class 6 solution 2 trial end it's SUCCESSFUL and ENDLESS until the user answer correctly!