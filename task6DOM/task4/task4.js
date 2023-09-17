const inputData = document.querySelectorAll(".arr");
const btn = document.querySelector(".btn");
const output = document.querySelector(".out");

btn.onclick = () => {
    output.innerHTML = " ";

    inputData.forEach((element) => {
        output.innerHTML += `${element.value} </br>`
    })
}