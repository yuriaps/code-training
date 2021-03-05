let box1
let a

// cannot use "let 1a" (starting with a number)

box1 = 33

box1 = box1 + 2

// console.log(box1);

// box1 --> 35

a = 4
box1 = 3

a = box1 + a

// console.log(box1);
// console.log(a);

// box1 --> 3
// a --> 7

let bool = true
let bool2 = false

let a1 = a > box1

// if (3>5){
//   console.log("3 is bigger then 2");
// }
// else if(4> 3){
//   console.log("second block");
// }
// else if(4> 3){
//   console.log("second block");
// }
// else {
//   console.log("every one failed");
// }

// AND and OR --------
// t-shirt OR (||) pant --> only false if both is false
// coca AND (&&) burguer --> only true if both is true

let aa = 4
let bb = 3
let cc = 7

if (aa > bb || bb > cc) {
  // console.log("first block");
}




// // let name = 7
// // let age = 78
// // let adrrs

// // if (age && typeof(age) == "number"){
// //   console.log("Lets continue");
// // }
// // else{
// //   console.log("wrong type of argument or is missing");
// // }

// // console.log("My name is Anna and I have 27 years old");
// // console.log("My name is Tom and I have 19 years old");
// // console.log("My name is Erick and I have 18 years old");
// // console.log("My name is Josh and I have 28 years old");

// function sayMy(name, age){
//   console.log("My name is " + name + " and I have " + age + " years old");
//   return "OK"
// }

// let result = sayMy("Anna", 27)
// sayMy("Tom", 19)
// console.log(result)









// function personIsAdult(age, name, addrs){
//   console.log(name, addrs);
//   if(age && age >= 18) {return true}
//   else {return false}
// }


// let perssonAge = 17
// personIsAdult(perssonAge)
// personIsAdult(perssonAge)
// personIsAdult(perssonAge)

// console.log(age);


// if(personIsAdult(perssonAge)){
//   console.log("you can enter")

// }
// // else {
// //   console.log("not allowed");
// // }

// //             // 0 1 2 3 4 
// // let numList = [3,6,1,4,9]

// // numList[0] = 88

// // // console.log(numList.indexOf(9));

// // (numList);


// // function a(num){
// //   console.log(num);
// // }

// // let a = (num) => {
// //   console.log(num);
// // }



// let arr = [3,1,6,2,9,7,0]

// function bubbleSort(arr) {

//   let swap = -1

//   while(swap != -1){

//     for(let i = 0; i < arr.length; i++){


//     }

//   }

// }

// function order(array) {
//   for (let swap = -1; swap!==0;swap+){
//       for (let i = 0; i < array.length; i++) {
//           if (array[i] > array[i + 1]) {
//               let temp = array[i]
//               array[i] = array[i + 1]
//               array[i + 1] = temp 
//               swap = 1
//           }
//       }
//   console.log(array)
//   }
// }


// for (let i = 1;i<6;i++){
//   console.log("value of i: ", i);
//   for(let j = 1; j<4;j++){
//     console.log("value of j:", j);
//   }
// }


function isValid(num) {

  if (num != 2 && num > 8 && type0f(num == "number")) {
    return true
  }
  else {
    return false
  }
}

if(isValid(3)){
  console.log("hello");
}

