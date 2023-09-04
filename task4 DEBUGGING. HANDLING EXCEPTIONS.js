//////////////task1 Done//////////////////////////////////////////////////////////////

// let arr = [1, 5, 10, 20, 13, 16, 25];


// function sumSliceArray(arr, first, second) {
//     let sum = arr[first- 1] + arr[second - 1];

//     if(typeof first !== 'number' || typeof second !== 'number')
//     {
//         throw new TypeError('you have entered not a number')
//     }
//     else if (first >= arr.length || first < 0 || second >= arr.length || second < 0){
//         throw new RangeError('you have entered number which is out of range') 
//     }
//     else {
//     return sum;
//     }
// }


// console.log(sumSliceArray(arr, 2, 5));


///////////////////////////////task 2 Done////////////////////////////////////////////////////

// const checkAge = () => {
//     try{

//         let name = prompt('please enter your name');
//         if(!name) {
//             throw new Error('please enter your name');
//         }

//         let age = +prompt ('enter your age');
//         if (!age) throw new TypeError("Age must be a number");
//         if(age < 18 || age > 70) {
//             throw new RangeError('you have entered incorrect age');
//         } 

//         let status = prompt ('enter your status');
//         if (!status) throw new Error("The field is empty, please enter your status.");
//         if (status !== 'admin' && status !== 'moderator' && status !== 'user') {
//             throw new EvalError('Your status is incorrect');
//         }

//         alert('Congrats, you have access!')
//     } 
    
//     catch (error) {
//         alert("Error: " + error.name + "\n" + error.message);
//     }

// }

// checkAge()


///////////////////////////task3 Done//////////////////////////////////////////////////////////
// const calcRectangleArea = (width, height) => {
//     try {
//         if(typeof width !== 'number'|| typeof height !== 'number') {
//             throw new EvalError('parameters must be numbers')
//         }

//         if(width <= 0 || height <= 0) {
//             throw new RangeError('You have entered wrong parameters')
//         }
//         let S;
//         S = width * height
//         return S;
//     } catch (error) {
//         console.warn(`${error.name} ${error.message}`);
//     }
// }

// console.log(calcRectangleArea(2, 7));

///////////////////////////task 4 Done////////////////////////////////////////////////////////////////

// class MonthException extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'MonthException';
//     }
// }

// function showMonthName(month) {
//     const months = [
//         "Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень",
//         "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"
//     ];
       
//     if (month >= 1 && month <= 12) {
//         return months[month - 1];
//     } else {
//         throw new MonthException("Такого місяця не існує!");
//     }
// }

// try {
//     const monthNumber = parseInt(prompt("Введіть номер місяця"));
//     console.log(showMonthName(monthNumber));
// } catch (error) {
//         console.error(error.name, error.message);
// }

//////////////////////////////task5 Done////////////////////////////////////////////////////////////////

// class NewId {
//     constructor(_id) {
//         this.identity = _id;
//     }
// }

// let arr = [7, -12, 'sdaf', 44, 22, 1241];

// const showUser = (id) => {       
//         if(id < 0) {
//             throw new RangeError(`Number cant be negative! ${id}`)
//          }
//          else if (typeof id !== 'number') {
//             throw new TypeError(`Id must be a number! ${id}`)
//          }
//          else {
//             return new NewId(id)
//          }
// }

// const showUsers = (ids) => {
//     let correctArr = [];
//     ids.forEach(element => {    
//         try {
//             let guy = showUser(element);
//             correctArr.push(guy);
//         } catch (error) {
//             console.log(error.message);
//         }
//         });
//     console.log(correctArr);
// }

// showUsers(arr);

///////////////////////////////////////////////////////////////////////////////////////////////////////