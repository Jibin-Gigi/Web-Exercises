let languages = ["Kotlin", "Javascript", "Ruby"];

let logItem = (value, index) => console.log( String(index+1) + ". " + value);

languages.forEach(logItem);
