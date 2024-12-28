let languages = ["Kotlin", "Javascript", "Ruby"];

let result = [];

let addListItems = (value) => result.push("<li>" + value + "</li>");

languages.forEach(addListItems);

let ulElement = document.getElementById("languages");

ulElement.innerHTML = ulElement.innerHTML + result.join("\n");
