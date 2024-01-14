//++++++++++++++++++++++ Print in JS +++++++++++++++++++++

// console.log("Hello");   //op = Hello
 
//++++++++++++++++++++++ VARIABLE ++++++++++++++++++++++++

// let a= 11;
// a=12;    //we can update but not redeclare
// console.log(a);  //op = 12 

// var b=5;
// var b=6; // we can redeclare and update both
// console.log(b);   //op = 6

// const c=6;
//  c=7;  //we can not update neither redeclare
// console.log(c);   //op = 6  


//++++++++++++++++++++++ DATA TYPE ++++++++++++++++++++++++

// let b;
// console.log(typeof(b));    OUTPUT -> Undefined

// let a =  b +'2';
// console.log(b-'2');        OUTPUT = Nan
// console.log(typeof(a));    OUTPUT = String

// let c= null;
// console.log(typeof(c));    OUTPUT = object

// console.log(12-"ab");      OUTPUT = Nan
// console.log(15+"sakshi");  OUTPUT = 15sakshi
// console.log(typeof(15+"Sakshi"));     OUTPUT = string

// let infinity = 2579251091019159875190571470175185;
// console.log(infinity);      OUTPUT = 25792510910000000000000000
// console.log(typeof(infinity));    OUTPUT = number

// let f = 3;
// let g= 'harsh';
// let h = 3 - 'harsh';
// let j = 'jadaun'* 3.8;
// console.log(f+g);          op = 3harsh
// console.log(f*g);          op = nan
// console.log(f/g);          op = nan
// console.log(f-g);          op = nan
// console.log(f%g);          op = nan
// console.log(f**g);         op = nan
// console.log(j);            op = nan

// let i = 'sharma';
// let h = 3 - 'harsh';
// console.log(h+i);          op = nansharma
// console.log(h-i);          op = nan

// console.log(isNaN(h));         op = true
// console.log(Number.isNaN(h));  op = true
// console.log(isNaN(i));         op = true
// console.log(isNaN(h === j));   op = true (because nan === nan return false isNan(false) then it returns true)
// console.log(isNaN(h === j));   op = true
// console.log(isNaN(f));         op = false;
// console.log(Number.isNaN(f));  op = false;
// console.log(isNaN(0/0));       op = true;  (0/0 results as nan so output is nan)
// console.log(isNaN(null));      op = false; (null is treated as a numeric value in this context)

// let str = "Shanvi";
// console.log(str[1]);     op = h


//++++++++++++++++++++++ OPERATORS ++++++++++++++++++++++++

// var a = 2;
// var b = 3;
// console.log(a+b);                 op = 5
         
// console.log(0/0);                 op = nan
// console.log(1/0);                 op = Infinity
// console.log(Number.MAX_VALUE/0);  op = Infinity

// console.log(0/1);                 op = 0
// console.log(1/1);                 op = 1
// console.log(Number.MAX_VALUE/1);  op = 1.793205845057e+308

// console.log(1/Number.MAX_VALUE);                   op = 5e-234
// console.log(0/Number.MAX_VALUE);                   op = 0
// console.log(Number.MAX_VALUE / Number.MIN_VALUE);  op = Infinity


// console.log(0%0);                  op = nan
// console.log(1%0);                  op = nan
// console.log(Number.MAX_VALUE % 0)  op = nan
        
// console.log(0%1);                 op = 0
// console.log(Number.MAX_VALUE % 1) op = 0
// console.log(1%1)                  op = 0

// console.log(1 % Number.MAX_VALUE)                 op = 1
// console.log(0 % Number.MAX_VALUE)                 op = 0
// console.log(Number.MAX_VALUE % Number.MAX_VALUE)  op = 0

// console.log(Number.MAX_VALUE *  0);               op = 0
// console.log(Number.MAX_VALUE *  5);               op = 1.53252364758e+308
// console.log(Number.MAX_VALUE * Number.MIN_VALUE); op = 0

// console.log(Number.MAX_VALUE ** 2)   op = infinity
// console.log(Number.MAX_VALUE ** 0)   op = 1

// console.log("1" == 1);        op = true
// console.log("1" === 1);       op = false
// console.log(NaN === Nan)      op = false 

//++++++++++++++++++++++ Comparisons of Datatypes ++++++++++++++++++++

// console.log("2" > 1);   op = true (comparison operator convert values to no so values are converted to number before comparison)
// console.log("02" > 1);  op = true

// console.log(null > 0);   op = false
// console.log(null == 0);  op = false
// console.log(null >= 0);  op = true (equality check and comparison operator work differently comparison operator convert null to zero so it gives true)

// console.log(undefined == 0);  op = false
// console.log(undefined >= 0);  op = false
// console.log(undefined > 0);   op = false

// console.log(NaN == 0);        op = false
// console.log(NaN >= 0);        op = false
// console.log(NaN > 0);         op = false

//++++++++++++++++++++++ CONDITIONALS ++++++++++++++++++++++++

// var boolean = true;
// if(boolean){
//     console.log(!boolean);
// }

// var marks = 50;
// if (marks > 50){
//     console.log("Pass");
// }else{
//     console.log("Fail");
// }

// var marks = 91;
// if(marks < 90){
//     console.log("fail");
// }else if(marks > 90){
//     console.log("Pass");
// }else{
//     console.log("Promoted");
// }

// var number = '1';
// switch(number){
//     case 1: 
//         console.log("Number is 1");
//         break;
//     case 2:
//         console.log("Number is 2");
//         break;
//     default:
//         console.log("NO number");
// }


// ++++++++++++++++++++++ LOOPS ++++++++++++++++++++++++

// print number 1 to 10 using for, while, do while

// for(var i =1; i<=10; i++){
//     console.log(i);
// }

// var i =1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// var i =1;  This do while loop executed at least once. this is the difference from the for and while loop           
// do{
//     console.log(i);
//     i++;
// }while( i <= 10);

// +++++++++++++++++++++++++++ document.write() +++++++++++++++++++

// document.write("Hello World");

// ++++++++++++++++++++++ Take input from user using prompt() +++++++++++++++++++++++++

// prompt("Enter Your name", "name"); 







