const u1 = {
    name: "Felix",
    age: 22,
    dept: "CS",
}
console.log(u1) // { name: 'Felix', age: 22, dept: 'CS' }

let user = new Object();
console.log(user) // {}

user.name = "Nagu";
user.experience = { years: 4, skills: "Python, Javascripts" };
console.log();
console.log(user);
/**
   {
       name: 'Nagu',
       experience: { years: 4, skills: 'Python, Javascripts' }
   }
*/
console.log(user['experience']); // { years: 4, skills: 'Python, Javascripts' }

user.experience.projects = 56;
console.log();
console.log(user);
/**
   {
       name: 'Nagu',
       experience: { years: 4, skills: 'Python, Javascripts', projects: 56 }
   }
*/

user.experience['projects'] = 54;
console.log();
console.log(user);
/**
   {
       name: 'Nagu',
       experience: { years: 4, skills: 'Python, Javascripts', projects: 54 }
   }
*/

user['experience']['skills'] = "Java, Python, Javascript";
console.log();
console.log(user);
/**
   {
       name: 'Nagu',
       experience: { years: 4, skills: 'Java, Python, Javascript', projects: 54 }
   }
*/

console.log();
console.log(Object.values(user));
/**
   [
       'Nagu',
       { years: 4, skills: 'Java, Python, Javascript', projects: 54 }
   ]
*/
console.log(Object.keys(user)); // [ 'name', 'experience' ]

// Merging
console.log;
const u2 = {
    ...u1,
    salary: 78789,
    address: "not found"
}
console.log(u2);
/**
   {
       name: 'Felix',
       age: 22,
       dept: 'CS',
       salary: 78789,
       address: 'not found'
   }
*/

// Freezing - No changes allowed - no deletion, addition, updation
Object.freeze(u2);
delete u2.address;
u2.age = 29;
console.log(u2);
/**
   {
       name: 'Felix',
       age: 22,
       dept: 'CS',
       salary: 78789,
       address: 'not found'
   }
*/

console.log(Object.isFrozen(u2)); // true
// also no direct way for unfreezing

// Sealing - values can be updated but no change in structure of object
Object.seal(u2);
delete u2.address;
u2.age = 29;
console.log(u2); // Since a frozen object is already immutable, sealing it doesn't change its state.
/**
    {
        name: 'Felix',
        age: 22,
        dept: 'CS',
        salary: 78789,
        address: 'not found'
    }
 */
console.log(Object.isSealed(u2)); // still true

Object.seal(u1);
u1.salary = 88888;
u1.dept = "IT";
console.log(u1); // { name: 'Felix', age: 22, dept: 'IT' }
console.log(Object.isSealed(u1)); // true
