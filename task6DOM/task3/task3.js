const main = document.createElement("main");
main.classList.add("mainClass", "check", "item");

const div = document.createElement("div");
div.id = "nyDiv";

const p = document.createElement("p");
p.innerText = "First paragraph";

document.body.append(main);
main.append(div);
div.append(p);