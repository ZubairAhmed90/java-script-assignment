//  var cityToCheck = prompt("Enter your city");
//  cityToCheck = cityToCheck.toLowerCase();
//  var cleanestCities = ["cheyenne", "santa fe", "tucson", "great falls", "honolulu"];
//  for (var i = 0; i <= 4; i++) {
//  if (cityToCheck === cleanestCities[i]) {
//  alert("It's one of the cleanest cities"); 
//  } else console.log("not a cleanest city"); 

//  }

// let name1= prompt("enter our first name");
// let name2= prompt("enter your last name");

//  console.log(name1 +name2);
//  document.write(name1+""+name2 + "<br>");
  
//  let phone = prompt("enter yourafvourite phone");
//   console.log("my favourite phone is:" + phone);

//   document.write("your phone length is =" +(phone.length) +"<br>");


// let country= "pakistan";
 
//  console.log(country);
//  document.write(country +" " + "index of k is = " +country.indexOf ('k') +"<br>");
  
//  let xy= "hello world";

//  console.log(xy);
//  document.write(xy +"<br>"+ "last index of 'l' :" + xy.lastIndexOf('l') + "<br>");
//  document.write("character index of Hello World :'3': is :"+ xy.charAt(3) + "<br>");


// console.log(name1.concat(name2));
// document.write(name1.concat (name2) );

// let city= "hydrabad";

// console.log(city);
// document.write(city+ "<br>");

// document.write("After Replacment"+"  :"+city.replace("hydra","islam") + "<br>");


// let str= "Ali and Sami are best friends. They play cricket and football together.";

// console.log(str);
// document.write(str + "<br>" );
// document.write(str.replaceAll("and","&") + "<br>");


// var a="'475'";
// console.log(a);
// document.write("srting :"+a) +"<br>";
// a=parseInt("475");
// console.log(a);
// document.write("number :"+a); 
  

// let pname=prompt(" enter yout name :");
//  pname=pname.toUpperCase(pname) ;
//  document.write(pname) +"<br>";
 

//  let tname=prompt(" enter yout name :");
//  tname=tname.toUpperCase(tname);
//  document.write(tname);
// let convertToTitleCase=prompt("enter your name"); 

// function convertToTitleCase(str) {
//     if (!str) {
//         return ""
//     }
//     return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
//   }
  
// let titlecase=prompt("enter your name:");

// console.log(convertToTitleCase(titlecase));
// document.write(convertToTitleCase(titlecase)+"<br>");


// let a=prompt('enter number ','');

//  console.log(Math.floor(a));
//  document.write(a.toString().replace(".","")+"<br>");



// let specialCharacters = ["@" , "!" , "," , "."];


// while (true){
//     let userInputName = prompt ("Enter Any Thing");
//     let specialChar = false
//     for(let i = 0 ; i < userInputName.length ; i++){
//     if (specialCharacters.includes(userInputName[i])){
//         // alert("Invalid input You Entered A Special Charactor @ ! . ,");
//        specialChar = true;
//        break;
//      }  
//     } if (specialChar === true){
//         alert("Invalid input You Entered A Special Charactor @ ! . ,");
//     }
//     else{
//         alert("Good Your Input Has Not contain Any Special Charactor");
//         break;
    
//     }
// }
    
// let arrayBak = ["cake", "apple pie", "cookie", "chips", "patties" ,"cake rusk" , "cold drink"];

// flags = false

// let userOrder = prompt("Enter An Item For Order");

// for ( let i = 0 ; i <= arrayBak.length ; i++){

//     if(userOrder.toLowerCase() === arrayBak[i] || userOrder.toUpperCase() === arrayBak[i]  ){
//         alert(userOrder + " available in our bakery at index : " + i);
//         flags = true
//         break;
//     }
// }

// if (!flags){
//     alert( "we are sorry"  + userOrder +" not available in our bakery ");
// } 

// let digit = false;

// let letter = false

// while (true) {
// let userPassword =prompt("Enter Your Password");

//     if (userPassword.charAt(0) >= 0 || userPassword.charAt(0) <= 9){
//     alert("password should not contain number at start");
//     // break;
//     }else if (userPassword.length < 6){
//         alert("Your Password Contain Atleast 6 Charactors");
//         // break;
     
//     }else{ for(let i = 0 ; i < userPassword.length ; i++)
//     { if (userPassword[i] >= "a" && userPassword[i] <= "z" || userPassword[i] >= "A" && userPassword[i] <= "Z"){
//         digit = true;
//             break;}
//     }
//     for(let i = 0 ; i < userPassword.length ; i++){
//     if (userPassword[i] >= '0' && userPassword[i] <= '9'){
//         letter = true;
//          break;
//     }
//     }if (digit && letter){
//         alert("correct");
//         break;
//     }else{
//         alert("password must contain letter or digit");
       
//     }
// }
// }

// let uniname=("university of karachi");
// let splituniname=uniname.split();
//  document.write(splituniname);

// let length="pakistan";

//  str=length[length.length-1];
//  console.log(str);


// let strin = "the quick brown fox jumps over the lazy dog";

// let sameValue = "the"
// words = strin.split(" ")
// count = 0

// for (let i = 0 ; i < strin.length ; i++){
//     if (words[i] === sameValue){
//         count++
//     }
// }

// document.write(strin +"<br>");
// document.write(" The Occurance Of Word 'The' In The Sentence is : " , count )