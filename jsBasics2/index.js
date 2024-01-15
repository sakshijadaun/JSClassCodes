// ++++++++++++++++++++++++ Objects ++++++++++++++++++++++++++++++++

// let rectangle = {
//     length: 1,
//     width: 2,
//     draw: function(){
//         console.log("Hiii");
//     }
// };
// rectangle.draw();

// +++++++++++++++++++++++ Objects Using Factory Function ++++++++++++++++++++++++++++

// function createRectangle(){
//     let rectangle = {    //(or return rectangle{...})
//         length: 1,
//         width: 2,
//         draw(){        // (or draw: function(){....})
//             console.log("Hii");
//         }
//     };
//     return rectangle;
// }

// let rectangle1 = createRectangle();
// rectangle1.draw();
// console.log(typeof createRectangle());  //this will give object
// console.log(typeof createRectangle);   //this will give function
// console.log(typeof rectangle1);        //this will give object


//+++++++++++++++++++++++ FACTORY FUNCTION USING INPUT PARAMETER ++++++++++++++++++++++

//  function createRectangle(length,width){
//     return rectangle = {
//         length,    (it means length: length or we can use other variable name also)
//         width,     (it means width: width)
//         draw(){
//             console.log("Hello")
//         }
//     };

//  }
//  let rectangle1 = createRectangle(2,4);
//  console.log(rectangle1.len);
//  rectangle1.draw();

// +++++++++++++++++++++++++++++ CONSTRUCTOR FUNCTION +++++++++++++++++++++++++++++++++

// function CreateRectangle(){
//     this.length = 2,
//     this.width = 5,
//     this.draw = function(){
//         console.log("Sakshi");
//     };
// }
// let rectangle1 = new CreateRectangle();
// console.log(rectangle1.length);
// rectangle1.draw();

//++++++++++++++++++++++ Constructor function using parameter ++++++++++++++++++++++++

// function CreateRectangle2(len,wid){
//     this.lenght = len;
//     this.width = wid;
//     this.draw=function(){
//         console.log("Sakshi");
//     };
// }
// let rectangle2 = new CreateRectangle2(3,5);
// console.log(rectangle2.len);
// rectangle2.draw();
// console.log(typeof createRectangle2);

//++++++++++++++++++++ ADD AND REMOVE PROPERTIES IN OBJECT ++++++++++++++++++++++++++

// rectangle2.color = "yellow";
// console.log(rectangle2);

// delete rectangle2.color;
// console.log(rectangle2);

//+++++++++++++++++++++++ CONSTRUCTOR PROPERTY ++++++++++++++++++++++++++++++++++++++

// console.log(rectangle2.constructor);
// console.log(CreateRectangle2.constructor);

//+++++++++++++++++++++ SOME IMPORTANT NOTE ++++++++++++++++++++++++++
//difference of primitive and reference data types
//primitive are pass by value and refernce are pass by reference
// It means if we make any change in value it does not reflect in original value
// in pass by value , but In reference data types if we make any change in any value 
// than it reflects in original value.

// ++++++++++++++++++++++++++++++ PRIMITIVE DATATYPE ++++++++++++++++++++++++++++++++
// let a = 10;
// let b = a;
//  a++;
//  console.log(a);
//  console.log(b);

// let a=10;
// function inc(a){
//     a++;
//     console.log(a);
// }
// inc(a);
// console.log(a);

//+++++++++++++++++++++++++++++++++ REFERENCE DATATYPE +++++++++++++++++++++++++++++++
// let a = {value: 10};
// let b =  a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

// let a = {value: 10};
// function inc(a){
//     a.value++;
//     console.log(a.value);
// }
// inc(a);
// inc({value: 6}); //pass the different value of a object it will update value 10 to 6.)
// console.log(a.value);

//++++++++++++++++++++++ ITERATING OVER OBJECTS USING FOR-IN LOOP AND FOR-OF LOOP +++++++++++++++++++++++++

// let rec = {
//     length: 2,
//     width: 3,
//     1 : 4      //This 1 property will iterate first before the lenght and the width
// };
// rec.height = 5;  //adding a property to rec object

// ++++++++++++++++++++++++++++++ Print key and value (for-in loop) ++++++++++++++++++++++++++++++++++++++

// for(let key in rec){ 
//     here key are reflected through value variable and key and value both are reflected through rec[key]

//     console.log(key);     //this will print keys of object  1,length,width
//     console.log(rec[key]);   //this will print value of keys 4,3,2
    
// }

// print key value both at the same time of object
// for(key in rec){
//     console.log(`${key} : ${rec[key]}`);
// }

// +++++++++++++++++++++++++++++++++++++++ FOR-OF LOOP IN OBJECTS +++++++++++++++++++++++++++++++++++++++++

// this loop iterate over object values
// for(let key of Object.values(rec)){
//     console.log(key);
// }

// this loop iterate over object keys
// for(let key of Object.keys(rec)){   
//     console.log(key);
// }

// print key value both at the same time of object 
// for(let [key,value] of Object.entries(rec)){
//     console.log(`${key} : ${value}`);
// }

//++++++++++++++++++++++ Some Other ways to get key and values  of object ++++++++++++++++++++++++++++++++
// these all propertis use for the object and return the array of keys and values

let ball = {
    radius: 2,
    shape: "circle"
}

console.log(Object.getOwnPropertyNames(ball));   //this will give key including non-enumerable like symbol
console.log(ball.hasOwnProperty("radius"));      //this will give true
console.log(Object.keys(ball));                  //this will print keys of object only enumerable
console.log(Object.values(ball));                //this will print values of object
console.log(Object.entries(ball));               //this will give array of key-value pair both

++++++++++++++++++++++++++++++++ object.FromEntries(obj) Method ++++++++++++++++++++++++++++++++++++++++

const newBall = Object.entries(ball);
console.log(newBall);                        //this will print array of key-value pair

console.log((Object.fromEntries(newBall)));  //this will print object of key-value pair

const arr = [[1,4,6,7],["One","Two","Three"],["Hello"],[]];

return only first two elements of array as key and value if only one element then value is undefined like hello. if empty array then key and value both is undefined.
console.log((Object.fromEntries(arr)));  
                                    
                                        

//+++++++++++++++++++++++++++++++++++++ Search key in object ++++++++++++++++++++++++++++++++++++++++++++ 

// let rec ={
//     length: 1,
//     width: 2,
//     color: "Yellow"
// };

// if('color' in rec){
//     console.log("Present");
// }else{
//     console.log("Absent");
// }

//+++++++++++++++++++++++++++++++++++++++ Object Cloning +++++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++++++++++++++++ Using iteration +++++++++++++++++++++++++++++++++++++++++++++++

// let src={
//     a: 10,
//     b: 11,
//     c: 12
// };
// let dest = {};

// for(var key in src){
//     dest[key]=src[key];
//     console.log(key,src[key]);
// }
// console.log(dest);
// checking it copy in dest object or points to reference number so it copy in dest object
// src.a++;
// console.log(src)
// console.log(dest);

//+++++++++++++++++++++++++++++++++++++ Object cloning using  assign +++++++++++++++++++++++++++++++++++++

// let src ={
//     a: 10,
//     b: 11, 
//     c: 12
// };

// let src2 = { d: 13};

// let dest = Object.assign({},src,src2);
// console.log(dest);

// src.a++;
// console.log(dest);

//+++++++++++++++++++++++++++++++++++++++ Object cloning using spread ++++++++++++++++++++++++++++++++++++

// let src ={
//     a: 10,
//     b: 11, 
//     c: 12
// };

// let dest ={...src};   
// console.log(dest);

// src.a++;
// console.log(dest);

//+++++++++++++++++++++++++++++++++ Maps ++++++++++++++++++++++++++++++++++++++++++++

//+++++++++++++++++++++++++++++++++ create maps +++++++++++++++++++++++++++++++++++++
// const fruits = new Map([
//     ["apples",500],
//     ["bananas", 300],
//     ["oranges", 200]
// ]);

//+++++++++++++++++++++++++++++++ Methods on Maps +++++++++++++++++++++++++++++++++++

//+++++++++++++++++++ set() method ++++++++++++++++++
// fruits.set("mango",400);   //this sets the property to fruits map

//+++++++++++++++++++ get() method ++++++++++++++++++
// console.log(fruits.get("apples"));      //this will return the value of apples key

//+++++++++++++++++++ size property  ++++++++++++++++++
// console.log(fruits.size);

//++++++++++++++++++ delete() method ++++++++++++++++++
// fruits.delete("apples");   //this will delete apple key and value associated with this key
// console.log(fruits);       //this will print the map after delete the apples key

//+++++++++++++++++++ clear() method ++++++++++++++++++
// fruits.clear();              //this will remove all elements from a map
// console.log(fruits);         //this will print empty map

//+++++++++++++++++++ has() method ++++++++++++++++++
// console.log(fruits.has("apples"));         //this will return true because fruits map has apples property

//+++++++++++++++++++ typeof() method ++++++++++++++++++
// console.log(typeof(fruits));     //this will print object because map are objects

//+++++++++++++++++++ instanceof() method ++++++++++++++++++
// console.log(fruits instanceof Map);   //return true because fruits is a map object

//+++++++++++++++++++ forEach() method ++++++++++++++++++
// fruits.forEach(function(value,key){
//     console.log(`${key} = ${value}`);
// });                                    //this will print map like apples = 500

//+++++++++++++++++++ entries() method ++++++++++++++++++
// let text = "";
// for(const x of fruits.entries()){
//     text += x;
// };
// console.log(text);   //this will print output apples,500

//++++++++++++++++++++++++ Note +++++++++++++++++++++++++
//Here also methods like keys() which can access keys of map
//values() mehtod which can access values of a map


//++++++++++++++++++++++++++ Objects as keys-> objects can add as a key in maps ++++++++++++++++++++++++++++++++

//create Objects 
// const apples = {name: 'Apples'};
// const bananas = {name: 'Bananas'};
// const oranges = {name: 'Oranges'};

// //create a map
// const fruits = new Map();

// //add object keys to the map
// fruits.set(apples, 500);
// fruits.set(bananas, 300);
// fruits.set(oranges, 200);

// console.log(fruits.get(apples));   //print 500
// console.log(fruits.get(bananas));  //print 300
// console.log(fruits.get(oranges));  //print 200

//+++++++++++++++++++++++++++++++++++++++++++ Iterate over Maps ++++++++++++++++++++++++++++++++++++++++

// let map = new Map([
//     ["father","mother"],
//     ["brother","sister"]

// ]);

//++++++++++++++++++ for-of loop +++++++++++++++++++++++++
// for (const key of map) {
//   console.log(key);   //this will print map
//   console.log(map[key]);  //this will print undefined
// }

//+++++++++++++++++++++++++++++ for-in loop +++++++++++++++++++++
// for(const key in map){
//     console.log(key);    //can not directly use for-in loop 
// }






