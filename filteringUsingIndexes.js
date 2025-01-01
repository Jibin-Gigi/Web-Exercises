let visitors = [222, 244, 555, 8888, 44, 333, 5534, 343, 32, 4235, 4325]
const SUN = 0, MON = 1, TUE = 2, WED = 3, THURS = 4, FRI = 5, SAT = 6

//Here in visitors array, each element is no.of visitors in a day in a consecutive way, ie., 0 and 7 th indexed values are visitors in SUN

console.log("List of visitors in Sundays are: " + visitors.filter((count, index) => index % 7 === SUN))

