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