//////////////////////task1 Done///////////////////////////////////////////

// function upperCase(str) {
//     let pattern = /(^[A-Z][\w\.-]{1,})/g;
    
// return pattern.test(str) ? "String's starts with uppercase character" 
// : "String's not starts with uppercase character";
// }

//////////////////////task2 Done///////////////////////////////////////////

// function validateEmail(email) {
//     let pattern = /([A-Za-z0-9][\w\.\-+%_]{3,}[A-Za-z0-9]\@\w+\.[a-z\.]+\w*)/g;

//     return pattern.test(email) 
// }

//////////////////////task3 Done///////////////////////////////////////////

// let regex = /(\w+!*) (\w+)/;

//////////////////////task4 Done///////////////////////////////////////////

// let regex =/[1-9][0-9]{3}-[0-9]{4}-[0-9]{4}-[0-9]{4}/;

//////////////////////task5 Done///////////////////////////////////////////

function checkLogin(login) {
    let regex = /^[A-Za-z][A-Za-z0-9.]{1,9}$/;

    const isValid = regex.test(login);
    const numbers = login.match(/[-+]?[0-9]*\.?[0-9]+/g) || [];

  return {isValid, numbers};
}

checkLogin('userLogin');

/////////////////////////////////////////////////////////////////////////