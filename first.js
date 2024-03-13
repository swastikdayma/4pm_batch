// let age = prompt("enter your age: ")
const prompt = require("prompt-sync")()

// let age = prompt(" enter age: ")
// if(age >= 18 && age < 70){
//   console.log("you can vote")
// }
// else if(age >=70){
//   console.log("akele mat aana baccho ke saath aana")
// }
// else{
//   console.log("no you cannot")
// }


// let Number1= parseFloat(prompt("enter first number: "));
// let operator = prompt("enter operator +, -, /, * : ");
// let Number2 =  parseFloat(prompt("enter sceond number: "));


// let result;

// if(operator == "+"){
//  result =  Number1 + Number2
// }
// else if(operator== "-"){
//   result = Number1 - Number2
// }
// else if(operator == "/"){
// result=   Number1 / Number2
// }
// else{
//   result = Number1 * Number2
// }
// console.log("The answer is "+ Number1 + " "+ operator + " "+ Number2 + " "+ "=" + " "+result)
// console.log(`The answer is ${Number1} ${operator} ${Number2} = ${result}`)



// o	JS Strings methods
// o	.length
// o	.slice
// o	.trim
// o	.trimStart
// o	.trimEnd
// o	.replace
// o	.replaceAll
// o	.split
// o	.charAt
// o	.concat
// o	ToUpperCase()
// o	ToLowerCase
// o	.includes
// o	.match
// o	.matchAll
// o	.lastIndexOf



// let a  = 'swastik';
// let b = '45';
// console.log(typeof(b));



// let length = str.length;

// console.log(length)

// let trimmed = str.trimEnd();
// // console.log(str)
// console.log(trimmed.length);

// let sliced = str.slice(4, 9);
// console.log(sliced)
// console.log(str)

// let str = "The Quick brown Fox Jumps Over The Lazy Dog brown BROWN";


// let replaced = str.replace(/Brown/gi, "Black" );
// console.log(replaced);


// let splitted=  str.split(' ');
// console.log(splitted)


// let char = str.charAt(20)
// console.log(char)

// let concat = str.concat(str2, str3)
// console.log(concat)


// let upper = str.toLocaleLowerCase();
// console.log(upper)


// let include = str.includes("browns");
// console.log(include)


// let indexing = str.lastIndexOf(/brown/gi)
// console.log(indexing)


// let match = str.match("own");
// console.log(match)


// let height = prompt("enter animal height: short(<1)/ tall(>=1): ");

// if(height <1){
//     console.log("animal might be short");
//   let voice =   prompt("can squeak->  yes / no : ");
//   if(voice == "yes"){
//     console.log("might be a rat")
//   }else{
//     console.log("might be a squirrel")
//   }

// }
// else{
//     console.log("animal is big / tall")
//   let neck =   prompt("neck size of animal-> short/ long : ");
//   if(neck == "long"){
//     console.log("might be a giraffe")
//   }else{
//    let nose = prompt("enter nose size-> short/ long: ");
//    if(nose== "long"){
//     console.log("might be an elephant")
//    }else{
//     let live = prompt("where does it live: land / water: ");
//     if(live== "land"){
//         console.log("might be a rhino")
//     }else{
//         console.log("might be a hippo")
//     }
//    }
//   }
// }


// console.log("swastik")

// console.log("swastik")
// console.log("swastik")
// console.log("swastik")
// console.log("swastik")
// console.log("swastik")
// console.log("swastik")
// console.log("swastik")
// console.log("swastik")
// console.log("swastik")



// for(let i = 1; i <= 10; i++){
//   console.log(i)
// }


// for(let i = 0; i<10; i=i+1){
//     console.log("swastik")
// }


// let str = "swastik dayma";

// for(let i = 0; i < str.length; i++ ){
//   console.log(str[i])
// }


// let j = 0;

// while(j < 10)
//   {
//     console.log("swastik")
//     j++
//   }



// let i = 0;
// do{
//   console.log("first")
//   i++
// }
// while(i< 10)


// const arry  = [1, 2, 4 ,5,6,7, 4, 6, 7]

// let length = arry.splice(2, 0, "hello");
// console.log(length);
// arry[1]= "hello"
// console.log(arry);



// const arr =[1,2,4,5,6,7] ;
// arr.forEach((value)=>{
//     console.log(value*2)
// })
// console.log(arr)



// let name2 = arr.map((value,index)=>{
//     return value
// })
// console.log(name2)

// let arr2= arr.filter((value)=>{
//  return value==2;
// })

// console.log(arr2)


// const arr =[1,2,2,3,2,2,2,2,4,5,6,7,8];

// let arr2 = arr.reduce((prev,current)=>{
//     return prev + current
// })
// console.log(arr2)



//hoisting 

//-----------------------------------------
// add()

// function add(){
//     add2()
//    function add2(){
//     let a = 'swastik';
//     console.log(a)
//    }
//    function add3(){
//     console.log(a)
//    }
// add3()
 

// }




const obj = {
    firstName: "swastik",
    lastName:"dayma",
   
   }

 function fullname(){
    return this.firstName + " "+ this.lastName
}

let print = fullname.call(obj)
console.log(print)












































































