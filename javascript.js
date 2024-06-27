// basics of js

// for learning concatenation "+" in js
// var message="hello"
// var yourname= prompt("enter your name");
// alert(message + " " + yourname);

// for learning length of string in js
// var input =prompt("enter your string");
// var len=input.length;
// var remain=140-len;
// alert("you have written " +len+ " characters, you have "+remain+" characters left");

// you need "()" to calculate anything inside alert
// var input =prompt("enter your string");
// alert("you have written " +(input.length)+ " characters, you have "+(140-input.length)+" characters left");

// for learning slicing in js
// var tweet=prompt("Enter your tweet");
// var tweetunder140=tweet.slice(0,140);
// alert(tweetunder140);

// alert(prompt("enter your tweet:").slice(0,140));

// case changing
// var name=prompt("enter your name");
// name=name.toUpperCase();
// name=name.toLowerCase();
// alert(name);

// to print the name with first letter  as uppercase and rest lowercase 
// var name=prompt("enter your name");
// name=name.toLowerCase();
// var first=name.slice(0,1).toUpperCase();
// alert(first+name.slice(1,name.length));

// *+-/% operators 
// ++ -- += -= operators

// creating a function 
// function myFunction() {}
// calling a function
// myFunction();

// function with a value inside
// creating a function 
// function myFunction(bottles) {}
// calling a function
// myFunction(bottles);

// return gives output from the function




// intermediate

// generating random numbers
// var n= Math.random();       to generate a random number between 0-0.999999999
// n = n*x;                    where x is the range of numbers u
// n = Math.floor(n);          giving integer part only

//  if/else
// if(track==="yes"){                         
//    console.log("You are tracking");             
// }else {
//     console.log("you are not tracking");
// }

// comparators
// ===  values and data  type both should be same
// !==  to check for non equality
// ==   checks whether two variables have same value or not
// !=   checks whether two variables have different values
// >    greater than
// <    less than
// >=   greater than equal to
// <=   less than equal to

// combining comparators 
// && AND 
// || OR 
// !  NOT 

// array 
// var eggs=[2,4,6,8];      creating a array
// var myegg=eggs[1];       calling an element from a array
// eggs.length              gives  the length of the array
// eggs.includes (6)        returns true if it includes this
// eggs.push (10);             adds elements at last
// eggs.pop ();                removes the last element
// eggs.shift()                removes first element
// eggs.unshift(0);            adds element at beginning

// Loops
// while(true){do;}                 while loop state
// for(var i=0 ;i<n;i++) { do;}     for loop iterate

