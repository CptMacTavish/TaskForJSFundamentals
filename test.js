/////////////////task1 Done//////////////


// const createArr = (a, b) => {
 
//   if(a > b) {
//     const temp = a;
//     a = b;
//     b = temp;
//   }

//   const newArr = [];

//   for(i = a; i <= b; ++i) {
//     newArr.push(i);
//   }

//   return newArr
// };

// createArr(2, 9);


////////////task2 Done///////////////

// const cursedArr = (a, b)  => {

//     if(a > b) {
//     const temp = a;
//     a = b;
//     b = temp;
//   }
  
//   const newArr = [];
//   let counter = 1;


//   for(let i = a; i <= b; i++) {
//       for (let j = 0; j < counter; j++) {
//         newArr.push(i);
//       }
//       counter++
//   }

//   return newArr;
// }


////////////task3 Done////////////

// const randArr = (num) => {
   
//   const randArray = [];

//   for(let i = 0; i < num; i++) {
//     randArray.push(Math.floor(Math.random() * 501));
//   }

//   return randArray;
// }


////////////task4 Done///////////////

// const array = [5, 3, 4, 5, 6 ,7, 3, 10];

// function compact(arr) {

//     const correctArr = [];
    

    // for (let i = 0; i < arr.length; i++) {
    //     if (arr.indexOf(arr[i]) === i) {
    //         correctArr.push(arr[i]);
    //     }
    // }

//     return correctArr;
// }


///////////////task5 Done///////////////////


// let  array = [5, "Limit", 12, "a", "4308", "3", 99, 2, 147, [2, 4, 3, "33", 2 , "a", "text"], "strong", "broun", 627, "TF"];



// function divisionByType(arr) {
//     let nums = [];
//     let strings = [];
//     let arrays = [];    

//     for (let i = 0; i < arr.length; i++) {
//         if (typeof arr[i] === 'number') {
//             nums.push(arr[i]);
//         }
//         else if(typeof arr[i] === 'string') {
//             strings.push(arr[i]);
//         }
//         else if(Array.isArray(arr[i])) {
//             arrays.push(arr[i]);
//         }
//     }

//     return {nums, strings, arrays};

// }

// console.log(divisionByType(array));


//////////////task6 Done///////////////////////

// function calc(a, b, op) {
//     let result;

//     if (op === 1) {
//         result = a - b;
//     } else if (op === 2) {
//         result = a * b;
//     } else if (op === 3) {
//         result = a / b;
//     } else {
//         return "You have entered incorrect data"
//     }

//     return result;
// }

// console.log(calc(2, 5, 2));


//////////////////task7 Done///////////////////////

// const arr1 = [1, 2, 3, 5, 3];

// const arr2 = [1, 2, 3, 5, 11];


// const findUnique = (arr) => {

//     arr.sort();

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === arr[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(findUnique(arr2));


////////////////////////////////////////////////////