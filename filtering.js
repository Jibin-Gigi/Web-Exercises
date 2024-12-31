let songs = [
    {album: "a1", name: "song1", year: 2020}, 
    {album: "a2", name: "song2", year: 2023}, 
    {album: "a1", name: "song3", year: 2020}
]

let filtered = songs.filter(item => item.album === "a1") //callback function in filter function should return only True or False

console.log(filtered)
