//code to check users age
// let num=prompt("number dal bhai");

// if(num===null){
//     console.log("number kab dalega tu?");
// }
// else{

//     if(num.trim()===""){
//         console.log("spaces ku dale tune?");
//     }
//     else{
//         age=Number(num.trim());
//         if(isNaN(age)){
//             console.log("string dale hai tune");
//         }
//         else{
//             console.log("numbr recieved");
//         }
//     }
// }


// code for counting no greter than 8
// count =0;
// for(let i=0;i<16;i++){

//     if(i>8) count++;

// }
// console.log(count);


// code the user is accessible or not

// let password ="Vedant";
// let asked=prompt("please tell what is the password? :");

// if(asked===null){
//     console.log("cancel kiya tune ");
// }
// else{

//       if(asked.trim()===password) console.log("you are welcome");
//       else console.log("wrong password bhai")
// }



// code to give user 3 chance to open an account

// let att = 0;

// let pass = "vedant";
// let sahi = false;

// let input = prompt("bhai enter ka password : ");
// att++;

// if (input === pass) {
//     sahi = true;
// }

// while (input !== pass) {
//     if (att === 3) {
//         console.error("you are blocked");
//         break;
//     }

//     input = prompt("bhai enter ka password : ");
//     if (input === pass) {
//         sahi = true;

//     }
//     att++;



// }
// if (sahi = true) console.log("account recovered succesfully");


// sum of all odd numbers between 1 to 30
// let sum=0;
// for(let i=0;i<31;i++){
    
//     if(i%2===1){
//         sum=sum+i;
//     }
    
// }
// console.log(sum);


// print numbers between the asked numbers to user

// let start=+prompt("starting number bata?: ");
// let end=+prompt("ending numbers bata? : ");

// for(let i=start;i<=end;i++){
//     console.log(i);
// }


//using functions add all the values


// method 1
// function addAll(...nums){{
//     let sum =0;
//     nums.forEach(function(val){
//         sum=sum+val;
//     })
//     console.log(sum);
// }}

// addAll(1,2,3,4,5,6,7,8)

// method 2
// function sumAll(...nums){
//     let sum=0;
//     for(let i=0;i<nums.length;i++){
//         sum=sum+nums[i];
//     }
//     console.log(sum);
// }

// sumAll(1,2,3,4,5,6,7,8)


// method 3
// function sumAll(...nums){
//     let ans=nums.reduce(function(acc, val){
//         return acc+val;
//     },0);
//     console.log(ans);
// }


// sumAll(1,2,3,4,5,6,7,8)


// let obj={
// 	name:"vedant",
// 	fnc: function(){
// 		console.log(this);
// 	},
// 	fnc2:()=>{
// 		console.log(this);
// 	},
// };

// obj.fnc();
// obj.fnc2();

// Demonstrate the difference between normal function and arrow function when used as object methods (this issue)
// let obj={
// 	name:"vedant",
// 	fnc: function(){
// 		console.log(this);
// 	},
// 	fnc2:()=>{
// 		console.log(this);
// 	},
// };

// obj.fnc();
// obj.fnc2();


// given an array of numbers use map() to create a new array where each number is squared
// let arr=[1,2,3,4];
// let newarr= arr.map((val)=>{
//    return val*val;
// });

// console.log(newarr);


// Use filter() to get only even numbers from and array
// let arr=[1,2,3,4,5,6];
// let newarr=arr.filter((val)=>{
// 		return val%2===0;
// });

// console.log(newarr);



// Use reduce() to find the total salary from and array of numbers
// let salary=[10000,20000,50000];
// let sum=salary.reduce(function(acc,val){
// 		return acc+val;
// },0);
// console.log(sum)


// Create an object user and test the behavior of object.freeze() and Object.seal() by adding/changing keys
// // let user={
// // 	name:"vedant",
// // 	age:22,
// // 	email:"vedant.h@gmail.com",
// // };

// // Object.freeze(user);

// // user.name="vhvhd";
// // console.log(user.name);



// let user={
// 	name:"vedant",
// 	age:22,
// 	email:"vedant.h@gmail.com",
// };

// Object.seal(user);

// user.name="vhvhd";
// console.log(user.name);



// let increase=document.querySelector('inc');
// let decrese=document.querySelector('dec');
// let head=document.querySelector('h2');
// let count=0;

// inc.addEventListener('click',function(){
//     count++;
//     head.innerHTML= count;
// })

// dec.addEventListener('click',function(){
//     count--;
//     head.innerHTML= count;
// })



// ipl prediction of next year

let arr=[
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue',
        fullName:'Chennai Supper Kings',
        trophies: '5',
        captain: 'MSD'
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold',
        fullName:'Mumbai Indians',
        trophies: '5',
        captain: 'Hardik Pandya'
    },
    {
        team: 'DC',
        primary: 'blue',
        secondary: 'red',
        fullName:'Delhi Capitals',
        trophies: '0',
        captain: 'Axar Patel'
    },
    {
        team: 'GT',
        primary: 'light blue',
        secondary: 'dark blue',
        fullName:'Gujrat Titans',
        trophies: '1',
        captain: 'Shubhman Gill'
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'golden',
        fullName:'Kolkata Knight Riders',
        trophies: '3',
        captain: 'MSD'
    },
    {
        team: 'PBKS',
        primary: 'white',
        secondary: 'red',
        fullName:'Punjab Kings',
        trophies: '0',
        captain: 'Shreyas Iyer'
    },
    {
        team: 'RR',
        primary: 'pink',
        secondary: 'blue',
        fullName:'Rajasthan Royals',
        trophies: '1',
        captain: 'Sanju Samson'
    }

]

let h1=document.querySelector('h1');

let back=document.querySelector('main');

let trophies=document.querySelector('h2');

let sec=document.querySelector('section');

let captain=document.querySelector('h3');

let btn=document.querySelector('button');


btn.addEventListener('click', function(){
    let num= arr[Math.floor(Math.random()*arr.length)];

    h1.innerHTML= num.team;
    back.style.background= num.primary;
    sec.style.background= num.secondary;
    trophies.innerHTML=num.trophies;
    captain.innerHTML=num.captain;
})