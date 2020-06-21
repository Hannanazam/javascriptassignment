// Chapter # 21
// Task 1
// 1. Write a program that takes two user inputs for first and last name using prompt



var firstName = prompt("Enter Your First Name");
var lastName = prompt("Enter Your Last Name");
var fullName = (firstName + " " + lastName);
alert(fullName)


// task 2
// 2. Write a program to take a user input about his favorite mobile phone model.


var phone = prompt("Enter Your Favourite phone");
var result = ("My favourite phone is: " + phone);
var lenghtOf = phone.length;
document.write(result + "<br>" + "Length of string: " + lenghtOf)


// task 3
// 3. Write a program to find the index of letter “n”

var city = "Pakistani";
var cityind = city.indexOf("n");
var str = ("String: " + city);
var indOf = ("Index of 'n': " + cityind);
document.write(str + "<br>" + indOf)


// task 4
// 4. Write a program to find the last index of letter

var a = "Hello World";
var aind = a.lastIndexOf("l");
var str = ("String: " + a);
var indOf = ("Index of 'l': " + aind);
document.write(str + "<br>" + indOf)


// task 5
// 5. Write a program to find the character


var city = "Pakistani";
var cityind = city.charAt("3");
var str = ("String: " + city);
var indOf = ("Character at index 3: " + cityind);
document.write(str + "<br>" + indOf)


// task 7
// 7. Write a program to replace the “Hyder” to “Islam”

var city1 = "Hyderabad";
var rep = city1.replace("Hyder" , "Islam")
var city = "City: Hyderabad";
var repl = "After replacement: " + rep;
document.write(city+ "<br>" + repl)


// task 9
// 9. Write a program that converts a string “472”

var d = "472";
var a = "Value: " + d;
var b = "<br>" +"Type: String" + "<br>";
var c = Number(d)
var e = "Value: " + c;
var f = "<br>" +"Type: number" + "<br>";
document.write(a+b+e+f)


// task 10
// 10. Write a program that takes user input. Convert and show the input in capital letters.

var inp = prompt("Enter your input");
var result = inp.toUpperCase("")
var show = "User input: " + inp + "<br>";
var cas = "Upper case: " + result;
document.write(show + cas)


// task 11
// 11. Write a program that takes user input. Convert and show the input in title case.


var inp = prompt("Enter your input");
var result = inp.slice(0,1);
var result2 = inp.slice(1);
var sss = result.toUpperCase();
var ppp = result2.toLowerCase()
var add = sss+ppp;
var use = "User input: " + inp + "<br>";
var titl = "Title case: " +  add;
document.write(use + titl);


// task 12
// 12. Write a program that converts the variable num to string.


var num = 35.36;
var a = "Number: " + num;
var conv = num.toString()
var par = parseInt(conv);
var b ="Result: " + par;
document.write(a+ "<br>" + b)


// task 13
// 13. Write a program to take user input and store username in a variable.

var userName = prompt("Enter User name");
var stor = userName;
var char = stor.charCodeAt(33 , 44 , 46)
var char2 = stor.charCodeAt(64)
if (userName === char){
    alert("Please enter a valid username")
}
else if(userName === char2){
    alert("Username is valid")
}
else{
    var vv2 = prompt("Enter a valid username")
    alert(vv2)
}


// task 14
// 14. You have an array A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]


var  a =  ["cake", "apple pie", "cookie", "chips", "patties"];
var search = prompt("Wellcome to ABC Bakery.What do you want to order sir/ma'am?");
var b =  a.indexOf(search);
if(a.indexOf(search) !== -1){
    document.write(search + " is <b> available </b> at index " + b + " in our bakery")
}
else {
    document.write("We are sorry. " + search + " is <b> not available </b> in our bakery")
}


// task 16
// 16. Write a program to convert the following string to an array using string split method.

var university = ['U','n','i','v','e','r','s','i','t','y',' ' , 'O','f', ' ' , 'K','a','r','a','c','h','i'];
for(var i = 0; i<university.length; i++){
    document.write(university[i]+"<br>")
}


// task 17
// 17. Write a program to display the last character of a user input.

var inp = prompt("Enter your Input");
var lcf = inp.charAt(inp.lenght -1)
var a = "User input: " + inp;
var b = "Last character of input: " + lcf;
document.write(a + "<br>" + b)


// task 18
// 18. You have a string “The quick brown fox jumps over the lazy dog”.

var text1 = "Text: The quick brown fox jumps over the lazy dog";
var text2 = "There are 2 occurrence(s) of word 'the'"
document.write(text1+"<br>"+text2)


// chapter # 21-25 end








// chapter # 26-30

// task 1
// 1. Write a program that takes a positive integer


var int = prompt("Enter your positive integer");
var a = "number: " + int + "<br>";
var a1 = Math.round(int);
var b = "round off value: " + a1 + "<br>";
var b1 = Math.floor(int);
var c = "floor value: " + b1 + "<br>";
var c1 = Math.ceil(int)
var d = "ceil value: " + c1;
document.write(a+b+c+d)


// task 2
// 2. Write a program that takes a negative floating point


var int = prompt("Enter your negative integer");
var a = "number: " + int + "<br>";
var a1 = Math.round(int);
var b = "round off value: " + a1 + "<br>";
var b1 = Math.floor(int);
var c = "floor value: " + b1 + "<br>";
var c1 = Math.ceil(int)
var d = "ceil value: " + c1;
document.write(a+b+c+d)


// task 4
// 4. Write a program that simulates a dice using random() method of JS Math class


var a = 4;
var b = 6;
var c = Math.random() * 7;
var d = Math.floor(c);
var e = Math.round(d);
var r1 = "Random dice value: " + e;
document.write(r1);


// task 5
// 5. Write a program that simulates a coin toss

var heads = prompt("Enter heads player name");
var tails = prompt("Enter tails player name");
var tosss = Math.random() * 2;
var result = Math.floor(tosss)
 
if  (result === 0){
    alert("Heads " + heads + " win the toss")
}
else{
    alert("Tails " + tails + " win the toss")
}


// task 6
// 6. Write a program that shows a random number between 1 and 100 in your browser.


var r1 = Math.random() * 101;
var r2 = Math.round(r1);
var a = "Random number between 1 and 100: " + r2;
document.write(a);



// task 7
// 7. Write a program that asks the user about his weight.


var weight = prompt("Enter your weight in kilograms");
if (weight === weight + ' kgs' || 'kilograms' || 'kg'){
    document.write("The weight of user is " + weight + " kilograms")
}
else{
    alert(prompt("Enter your weight again"))
}


// task 8 
// 8. Write a program that stores a random secret number

var num = prompt("Enter a number between 1 to 10");
var secNum = "7";
if (num === secNum){
    alert("Congratulations you win!")
}
else{
    alert("Sorry you lose Try again!")
}


// chapter # 26-30 end


// chapter # 31-34



// task 1
// 1. Write a program that displays current date and time in
// your browser.

var a = new Date ();
document.write(a);


// task 2 
// 2. Write a program that alerts the current month in words.

var a = new Date ();
var d = a.toString();
var b = d.slice(3,7)
var c = "Current month: " + b;
document.write(c)

// task 3
// 3. Write a program that alerts the first 3 letters of the current day

var a = new Date ();
var d = a.toString();
var b = d.slice(0,3)
var c = "Today is: " + b;
document.write(c)

// task 4
// 4. Write a program that displays a message “It’s Fun day” if its Saturday or Sunday today.


var a = new Date ();
var d = a.toString();
var b = d.slice(0,3)
if (b === "sat"){
    document.write("It's Fun day")
}
else if (b === "sun"){
    document.write("It's Fun day")
}
else{
    alert("Today is not a saturday/sunday")
}


// task 5
// 5. Write a program that shows the message “First fifteen days of the month

var a = new Date ();
var b = a.toString();
var c = b.slice(8,10);
var d = "First fifteen days of the month";
var e = "Last days of the month";
if (c <= "15"){
    document.write(d)
}
else {
    document.write(e)
}


// task 6
// 6. Write a program that determines the minutes


// var curDat = new Date ();
// var a = "Current Date: " + curDat;
// var sin = new Date ();
// var str = sin.toString();
// var sli = str.slice(18,26)
// var b = "Elapsed miliseconds since January 1, 1970: " + elaMs;
// var elaMn = sli.getMinutes();
// var c = "Elapsed minutes since January 1, 1970: " + elaMn;
// document.write(a + "<br>" + b + "<br>" + c)

var dob = new Date("Thu Jan 01 1970 12:00:01 GMT+0500 (Pakistan Standard Time)");
var dobmili = dob.getMilliseconds();
var today = new Date("Thu Jan 01 1970 12:00:01 GMT+0500 (Pakistan Standard Time)");
var todaymili = today.getMinutes();
var d = new Date () + "<br>";
var a = "Current date: " + d;
var b = "Elapsed miliseconds since January 1, 1970: " + dobmili + "<br>";
var c = "Elapsed minutes since January 1, 1970: " + todaymili;
document.write(a+b+c)



// task 7
// 7. Write a program that tests whether it's before noon


var a = new Date ();
if (a <= 12){
    alert("It's AM")
}
else {
    alert("It's PM")
}


// task 8
// 8. Write a program that creates a Date object


var a = new Date ("Dec 31, 2020");
var b = "Later date: " + a;
document.write(b)

// task 9
// 9. Create a date object of the starting date of this Ramadan

var newDaat = new Date ("Apr 24, 2020");
var a = newDaat.getMonth();
var b = newDaat.getDate();
var c = newDaat.getFullYear();
var arr = [a,b,c]
var newDate = new Date ();
var e = newDate.getMonth();
var f = newDate.getDate();
var g = newDate.getFullYear();
var arr1 = [e,f,g]
var min6 = arr1-arr;
var i = min6 + " days have passed since 1st Ramadan,2020";
document.write(i)



// task 10
// 10. Write a program that displays in your browser the seconds

var newDate = new Date("Sat Dec 05 2015 22:50:16 GMT+0500 (Pakistan Standard Time)")
var a = newDate.getTime();
var newDate2 = new Date();
var b = newDate2.getTime();
var c = b-a;
var result = "On refrence date " + newDate + "<br>";
var result2 = c + " seconds had passed since beginning of 2015";
document.write(result+result2);


// task 11
// 11. Create a Date object for the current date and time.


var dates = new Date()
var a = "current date " + dates + "<br>"
var date2 = new Date ()
var b = date2.getHours() + 1;
var c = "1 hour ago,it was " + "Thu Jun 18 2020 " + b + ":23:49 GMT+0500 (Pakistan Standard Time)";
document.write(a+c)

// task 12
// 12. Write a program that creates a date object

var dates = new Date()
var a = "current date " + dates + "<br>";
var newDate = new Date();
var back = newDate.getUTCFullYear();
var min = back - 100;
var b = "100 years back,it was Thu Jun 18 " + min + " 13:23:49 GMT+0500 (Pakistan Standard Time)";
document.write(a + b)

// task 13
// 13. Write a program to ask the user about his age


var age = prompt("Enter your age");
var a = "Your age is " + age  + "<br>";
var date = new Date ();
var min = date.getFullYear()
var min1 = min - age;
var b = "Your birth year is " + min1;
document.write(a+b);


// task 14
// 14. Write a program to generate your K-Electric bill in your browser


var h1 = "<h1>K-Electric Bill</h1>";
var cn = "Customer Name: ABC Customer" + "<br>";
var nD = new Date ();
var ndm = nD.getMonth();
var mn = "Month: " + ndm + "<br>";
var noU = "Number of unite: " + 410 + "<br>";
var cpu = "Charges per unit: " + 16 + "<br>";
var naP =  "<br>" + "Net Amount Payable (within Due Date): " + (410*16) + "<br>";
var lps = "Late Payment surcharge: 350"  + "<br>";
var gaP = "Gross Amount Payable (after Due Date): " + (410*16+350);
var a = (h1+cn+mn+noU+cpu+naP+lps+gaP)
document.write(a);




// chapter 31-34 end







// chapter 35-38
// task 1
// 1. Write a function that displays current date & time in your browser.


function time(){
    var time = new Date (); 
    document.write(time);
}
time();


// task 2
// Write a function that takes first & last name

function fullName(){
    var firstName = prompt("Enter your first name");
    var lastName = prompt("Enter your last name");
    var fullName = (firstName + " " + lastName);
    alert(fullName)
}

fullName()



// tassk 3
// 3. Write a function that adds two numbers (

function add(){
    var val1 = +prompt("Enter first value");
    var val2 = +prompt("Enter second value");
    var ans = val1 + val2;
    alert(ans)
}
add();


// task 4
// 4. Calculator:

function calculator(){
    var val1 = +prompt('your first value');
    var sign = prompt('Your operator');
    var val2 = +prompt('your secound value');
    if(sign === '+'){
    document.write("Sum of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1+val2))
    }
    else if(sign === '-'){
    document.write("Subtraction of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1-val2))
    }
    else if(sign === '*'){
    document.write("Multiplication of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1*val2))
    }
    else if(sign === '/'){
    document.write("Division of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1/val2))
    }
    else if(sign === '%'){
    document.write("Percentage of" + " " + val1 + " " + "and" + " " + val2 + " " + "is" + " " + (val1/val2*100+'%'))
    }
}

calculator();



// task 5
// 5. Write a function that squares its argument




// task 7
// 7. Write a function that take start and end number as inputs


function counting(){
    var a = prompt("Enter your first value?")
    var b = prompt("Enter your last value?")
    for (var a = 1; a >= a.length; a+10){
        for(var b = a; b >= a+9 ; b++){
            document.write(b + " " + " ");
        }
        document.write("<br>")
    }
}
counting()


// task 8
// 8. Write a nested function that computes hypotenuse of a right angle triangle.


function hypotenuse(){
    var a = prompt("Enter base of triangle");
    var b = prompt("Enter perpendicular of triangle");
    var calc = a*a;
    var calc1 = b*b;
    var plus = calc+calc1;
    var hypote = "Hypotenuse<sup>2</sup>  = " + plus;
    document.write(hypote);

}
hypotenuse();

// task 9
// 9. Write a function that calculates the area of a rectangle


function recArea(){
    var width = prompt("Enter width of rectangle");
    var height = prompt("Enter height of rectangle");
    var mult = width*height;
    var radius = mult;
    var finMult = 3.147*radius*radius;
    document.write("Area of rectangle is = " + finMult)
}
recArea();



// task 10
// 10. Write a JavaScript function that checks whether a passed string is palindrome or no


function palindrome(){
    var word = prompt("Enter your word");
    var check = "";
    for(var i = word.length - 1; i >= 0 ; i--){
        check += word[i]
    }
    if (word === check){
        alert(word + " is palindrome word")
    }
    else{
        alert(word + " is not palindrome word")
    }
}
palindrome();


// task 11
// 11. Write a JavaScript function that accepts a string as a parameter


function upperCase(){
    var a = prompt("Enter some words")
    var b = a.slice(0,1)
    var c = a.slice(1)
    var d = b.toUpperCase();
    var e = c.toLowerCase();
    document.write(d+e)
}

upperCase();


// task 12
// 14. The Geometrizer


function calcCircumference(){
    var radius = prompt("Enter a radius");
    var circumFerence = (2*3.142*radius);
    var c = "The circumference is: " + circumFerence + "<br>";
    var arEa = (3.142*radius*radius)
    var d = "The area is: " + arEa;
    var e = (c+d);
    document.write(e);
}
calcCircumference();



// chapter 35-38 end






