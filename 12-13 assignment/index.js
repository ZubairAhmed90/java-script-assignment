//  assignment chap 12 to 13.

// Question no 1.

let Capital = prompt("Enter a character:");

let charCode = Capital.charCodeAt(0);

if (charCode >= 65 && charCode <= 90 ){
    console.log("It is capital alphabet." , Capital);

} else if (charCode >= 97 && charCode <= 122) {
 console.log("it is small alphabet" , Capital)
}
 else {
    console.log("It is number or something." , Capital );
}



// Question no 2

let number_1 = +prompt("enter a number");

let number_2 = +prompt("enter a number");

if (number_1 > number_2){

    console.log(number_1 , "is Larger then" , number_2);

}

else if (number_1 === number_2){

    console.log(number_1 , " is Equal to " , number_2);

}
 else if (number_2 > number_1){

    console.log(number_2 , "is Larger then" , number_1);
    
}

else if (number_2 === number_1){

    console.log(number_2 , " is Equal to " , number_1);
}

// Question 3

let compareNum = +prompt ("Enter A Number I Will Check Number Is Positive Negative Or Zero");

if (compareNum === 0 ){
    console.log("Number is Zero");
}
else if (compareNum > 0 ){
    console.log("Number is Positive");
}
else if (compareNum < 0 ){
    console.log("Number is Negative ");
}


// Question 4 

let checkVovel = prompt ("enter any one aplabet");

if (checkVovel === "a"){

    console.log("Alphabet is Vovel");
}
else if (checkVovel === "e"){

    console.log("Alphabet is Vovel");
}
else if (checkVovel === "i"){

    console.log("Alphabet is Vovel");
}
else if (checkVovel === "o"){

    console.log("Alphabet is Vovel");
}
else if (checkVovel === "u"){

    console.log("Alphabet is Vovel");

}else {
    console.log("Alphabet is Not Vovel");
}

// Queation 5.

let Password = prompt("Enter Your Password");

userPassword = Password

let confirmPassword = prompt("Confirm Your PassWord");

if ( userPassword === confirmPassword ) {
    console.log("Correct The Password You Entered Does Match The Orignal Password");
}
else if ( userPassword !== confirmPassword ) {
    console.log("Incorrect Password");
}


// Question 6 .



let hour = 13;

if (hour <= 18) {

 console.log(  "greeting = Good day");

}

else {

console.log(  "greeting = Good evening");

}




//Question 7 .

let Time = +prompt ("Enter Time value in 24hour Format");


if (Time >= null && Time < 1200 ){

    console.log( " Good Morning " )

}
else if (Time >= 1200 && Time < 1700 ){

    console.log( " Good Afternone " )

}
else if (Time >= 1700 && Time < 2100 ){

    console.log( " Good Evening " )

}
else if (Time >= 2100 && Time <= 2359 ){

    console.log( " Good Night " )

}





