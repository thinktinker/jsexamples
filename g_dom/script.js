// DOM Manipulation:
document.body.append("Appended String.");

const pagetitle = document.getElementById("pageTitle");

// 1. element.innerHTML
// Setting HTML markup contained within the element.

// Implement Code here
// Vulnerability: XSS (Cross-site Scripting)
pagetitle.innerHTML = "<a href='https://www.google.com.sg'>Document Object Model</a>";


// 2. element.innerText
// Rendering text content of a node and its descendants.

// Implement Code here
pagetitle.innerText = "Document Object Model";

// 3. element.style
// Modifying the style of HTML elements

// Implement Code here
pagetitle.style.height = "2em";
pagetitle.style.color = "#ff0000";


// 4. getElementById
// refer to the example above (line 4)

// 5. getElementsByTagName
// Using getElementsByTagName method, search for elements that match a tag name

// Implement Code here
const spans = document.getElementsByTagName("span");
spans[0].innerText = "Element Updated.";
spans[1].innerText = "Another Element Updated.";

// Additional Example
for (let index = 0; index < spans.length; index++) {
    spans[index].innerText = "Yet another update";
}

// 6. createElement
// Adding a new HTML element in JavaScript.

// Implement Code here
const paragraph = document.createElement("p");
paragraph.innerText = "Appended paragraph";
document.body.append(paragraph);

// 7. querySelector
// Selecting the fist instance of h2 tag and adding an innerText
// querySelector targets all forms including tag name, id name and class name

// Implement Code here
const header = document.querySelector("h2");
header.innerText = "New Title";


// Using querySelectorAll method, search for elements that match a tag's class

// Implement Code here
const updateListItems = document.querySelectorAll(".menuItem");
updateListItems[0].innerText = "Eg 1";
updateListItems[1].innerText = "Eg 2"; 
updateListItems[2].innerText = "Eg 3"; 

// Challenge Statement
// Use for loop to display Example 1, Example 2, Example 3 to the list items "menuItem"
for (let index = 0; index < updateListItems.length; index++) {
   updateListItems[index].innerText = "Example " + String(index + 1) + ": "; 
}

// 8. element.append()
// Adding a new HTML element inside an existing element.

// Implement Code here
// const anchor1 = document.createElement("a");
// anchor1.href = "https://example.org";
// anchor1.innerText = "Example1.org";
// updateListItems[0].append(anchor1);

// const anchor2 = document.createElement("a");
// anchor2.href = "https://example2.org";
// anchor2.innerText = "Example2.org";
// updateListItems[1].append(anchor2);

// const anchor3 = document.createElement("a");
// anchor3.href = "https://example3.org";
// anchor3.innerText = "Example3.org";
// updateListItems[2].append(anchor3);

// Challenge Statement
// Use for loop to display Example 1, Example 2, Example 3 to the list items "menuItem"
// with each menuItem, add a newly-created anchor element respectively ("Example1.org", "Example2.org", "Example3.org")
for (let index = 0; index < updateListItems.length; index++) {
    updateListItems[index] = "Example " + String(index + 1) + ":"; 
    const anchor = document.createElement("a");
    anchor.href = "https://example" + String(index + 1) + ".org";
    anchor.innerText = "Example" + String(index + 1 ) + ".org";
    updateListItems[index].append(anchor);
}
 

// 9. parentNode.appendChild(node)
// Adding a node using appendChild

// Implement Code here
const h3Greeting = document.createElement("h3");
h3Greeting.setAttribute("id", "h3Greeting");
const greeting = document.body.appendChild(h3Greeting);

// This targets the h3 element by its id
document.getElementById("h3Greeting").innerHTML = "<em>Hello!</em>"
document.getElementById("h3Greeting").style.color = "#0000ff"

// This too, targets the h3 element - but by its returned object from calling appendChild
greeting.innerHTML = "Good Bye";
greeting.style.color = "#ff0000";

// ----------------------------------------------
// Refer to ./form/form.html and ./form/script.js
// ----------------------------------------------

// 10. element.setAttribute()
// Setting the Attributes of HTML select input

// 11. element.getAttribute()
// get the Attributes's value(s) of selected options

// 12. element.addEventListener()
// Adding an event listener to a button
