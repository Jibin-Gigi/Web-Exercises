let languages = ["Kotlin", "Javascript", "Ruby"];

let result = [];

// Function to format each language as a list item and add it to the result array
let addListItems = (value) => result.push("<li>" + value + "</li>");

languages.forEach(addListItems);

// Get the HTML element with the ID 'languages' (assumes this element exists in the DOM)
let ulElement = document.getElementById("languages");


// Update the innerHTML of the 'languages' element by appending the formatted list items
// The result array is joined into a single string with newlines (\n) for better readability in the HTML source
ulElement.innerHTML = ulElement.innerHTML + result.join("\n");
//innerHTML is contents of HTML element
