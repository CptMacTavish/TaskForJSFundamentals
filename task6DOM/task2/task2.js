let title = document.querySelector("h1");
title.style.backgroundColor = "aqua";

let list = document.getElementById("myDiv")
let paragraphs = list.getElementsByTagName("p");

paragraphs[0].style.fontWeight = "bold";
paragraphs[1].style.color = "red";
paragraphs[2].style.textDecoration = "underline";
paragraphs[3].style.fontStyle = "italic";

let string = document.getElementById("myList")
string.style = " display: flex; list-style: none;";

const invisible = document.querySelector("span").hidden = true;
