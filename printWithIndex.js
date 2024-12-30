//Print element of array with index no.s

let languages = ["Java", "Python", "C++"]

let printElements = (item, index) => String(index) + "." + item

console.log(languages.map(printElements))
