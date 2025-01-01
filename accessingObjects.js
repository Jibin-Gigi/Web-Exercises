//key is always a string
let u1 = {
    name : "Felix",
    age : 22,
    dept : "CS",
}

//using dot operation
console.log(u1.age)

//using []
//console.log(u1[age]) // Error since it is not a string

console.log(u1['age'])

u1[23] = "twenty three"

//console.log(u1.23) //Error 23 is not a string

console.log(u1[23]) // O/P : twenty three

u1['date of birth'] = 20/2/20

console.log(u1)
