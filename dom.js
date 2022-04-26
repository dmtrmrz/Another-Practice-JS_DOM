// Examine the DOCUMENT OBJECT //

// console.dir(document);

// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// // document.all[10].textContent = "Hello";
// console.log(document.forms);
// console.log(document.links);
// console.log(document.images);

// Selectors

// GET ELEMENT BY ID //

// console.log(document.getElementById("header-title"));
// let headerTitle = document.getElementById("header-title");
// let header = document.getElementById("main-header");
// console.log(headerTitle);
// headerTitle.textContent = "Hello";
// headerTitle.innerText = "Goodbye";
// console.log(headerTitle.textContent);
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = "<h3>Hello</h3>";
// header.style.borderBottom = "solid 3px #000";

//  GET ELEMENTS BY CLASS //

// let items = document.getElementsByClassName("list-group-item");
// console.log(items);
// console.log(items[1]);
// items[1].textContent = "Hello 2";
// items[1].style.fontWeight = "bold";
// items[1].style.backgroundColor = "yellow";

// for (let i = 0; i < items.length; i++) {
//   items[i].style.backgroundColor = "#f4f4f4";
// }

// GET ELEMENTS BY TAG NAME //

// let li = document.getElementsByTagName("li");
// console.log(li);
// console.log(li[1]);
// li[1].textContent = "Hello 2";
// li[1].style.fontWeight = "bold";
// li[1].style.backgroundColor = "yellow";

// for (let i = 0; i < li.length; i++) {
//   li[i].style.backgroundColor = "#f4f4f4";
// }

//  QUERYSELECTOR //

// let header = document.querySelector("#main-header");
// header.style.borderBottom = "solid 4px #ccc";

// let input = document.querySelector("input");
// input.value = "Hello World";

// let submit = document.querySelector("input[type='submit']");

// submit.value = "SEND";

// let item = document.querySelector(".list-group-item");
// item.style.color = "red";

// let lastItem = document.querySelector(".list-group-item:last-child");
// lastItem.style.color = "blue";

// let secondItem = document.querySelector(".list-group-item:nth-child(2)");
// secondItem.style.color = "coral";

//  QUERYSELECTORALL //

// let titles = document.querySelectorAll(".title");

// console.log(titles);
// titles[0].textContent = "Hello";

// let odd = document.querySelectorAll("li:nth-child(odd");
// let even = document.querySelectorAll("li:nth-child(even");

// for (let i = 0; i < odd.length; i++) {
//   odd[i].style.backgroundColor = "#f4f4f4";
//   even[i].style.backgroundColor = "#ccc";
// }

//  TRAVERSING THE DOM //
// let itemList = document.querySelector("#items");
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentNode.parentNode);
// console.log(itemList.parentNode.parentNode.parentNode);

//  parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement);

//  childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// itemList.children[1].style.backgroundColor = "yellow";

// //firstChild
// console.log(itemList.firstChild); // #text

// // firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent = "Hello 1";

// // lastChild
// console.log(itemList.lastChild); // #text /n in HTML

// lastElementChild
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = "Goodbye 4";

// // nextSibling
// console.log(itemList.nextSibling);

// // nextElementSibling
// console.log(itemList.nextElementSibling);
// previousSibling //

// previousElementSibling
// console.log(itemList.previousElementSibling);

//

// createElement

// Create a div

// let newDiv = document.createElement("div");

// // Add class
// newDiv.className = "new-class";

// // Add id
// newDiv.id = "new-id";

// // Add attr
// newDiv.setAttribute("title", "Hello Div");

// // Create text node

// let newDivText = document.createTextNode("Hello World");

// // Add text to div
// newDiv.appendChild(newDivText);

// // Add Div to the DOM

// let container = document.querySelector("header .container");
// let h1 = document.querySelector("header h1");
// newDiv.style.fontSize = "25px";
// console.log(newDiv);

// container.insertBefore(newDiv, h1);

//

// EVENTS

// let button = document
//   .getElementById("button")
//   .addEventListener("click", buttonClick);

// function buttonClick(e) {
//console.log("Button Clicked");
//   document.getElementById("header-title").textContent = "Changed";
//   document.querySelector("#main").style.backgroundColor = "#f4f4f4";
//   console.log(e);
//   console.log(e.target);
//   console.log(e.target.id);
//   console.log(e.target.className);
//   console.log(e.target.classList);
// let output = document.getElementById("output");
// output.innerHTML = "<h3>" + e.target.id + "</h3>";
//   console.log(e.type);
//   console.log(e.clientX);
//   console.log(e.clientY);
//   console.log(e.offsetX);
//   console.log(e.offsetY);
//   console.log(e.altKey);
//   console.log(e.ctrlKey);
//   console.log(e.shiftKey);
// }

//
// let button = document.getElementById("button");
// let box = document.getElementById("box");
// button.addEventListener("click", runEvent);
// button.addEventListener("dblclick", runEvent);
// button.addEventListener("mousedown", runEvent);
// button.addEventListener("mouseup", runEvent);
// button.addEventListener("mouseover", runEvent);

// box.addEventListener("mouseenter", runEvent);
// box.addEventListener("mouseleave", runEvent);
// box.addEventListener("mouseover", runEvent);
// box.addEventListener("mouseout", runEvent);
// box.addEventListener("mousemove", runEvent);

let itemInput = document.querySelector("input[type='text']");
let form = document.querySelector("form");
let select = document.querySelector("select");

// itemInput.addEventListener("keydown", runEvent);
// itemInput.addEventListener("keyup", runEvent);
// itemInput.addEventListener("keypress", runEvent);

// itemInput.addEventListener("focus", runEvent);
// itemInput.addEventListener("blur", runEvent);

// itemInput.addEventListener("cut", runEvent);
// itemInput.addEventListener("copy", runEvent);
// itemInput.addEventListener("paste", runEvent);

// itemInput.addEventListener("input", runEvent);
// select.addEventListener("change", runEvent);
// select.addEventListener("input", runEvent);

// form.addEventListener("submit", runEvent);

// function runEvent(e) {
//   e.preventDefault();
//   console.log("EVENT TYPE: " + e.type);

//   console.log(e.target.value);
//   document.getElementById("output").innerHTML =
//     "<h3>" + e.target.value + "</h3>";
//   let output = document.getElementById("output");
//   output.innerHtml =
//     "<h3>MouseX: " + e.offsetX + "</h3><h3>MouseY: " + e.offsetY + "</h3>";
//   document.body.style.backgroundColor =
//     "rgb(" + e.offsetX + "," + e.offsetY + ",40)";
// }
