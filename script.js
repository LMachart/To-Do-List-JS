`use strict`;

const button = document.getElementById("validation");
const input = document.getElementById("imput");
const ul = document.querySelector("ul");
let li;

function inputValueLength() {
    return input.value.length;
}

function restartInput() {
    input.value = "";
}

function createLi() {
    li = document.createElement("li");
}

function CapitalizeText() {
    return input.value[0].toUpperCase() + input.value.slice(1, inputValueLength()).toLowerCase();
}

function textToLi() {
    li.append(document.createTextNode(CapitalizeText()));
}

function listToUl() {
    ul.insertAdjacentElement("beforeend", li);
}

function listInUl() {
    createLi();
    textToLi();
    listToUl();
    restartInput();
}

function addListAfterClick() {
    if (inputValueLength() > 0) {
        listInUl();
    }
}

function addListAfterKeypress(event) {
    if (inputValueLength() > 0 && event.keyCode === 13) {
        listInUl();
    }
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);










