// var person = {
//     name : "Abhishek",
//     age :20
// }
// console.log(typeof person)

// var str = JSON.stringify(person)
// console.log(str)
// console.log(typeof str)

// localStorage.setItem('person' ,str)


var arr =[]
// for (var i =0; i<10; i++){
//     arr.push(i)
// }

// console.log(arr)
// var str  = JSON.stringify(arr)
// localStorage.setItem('data',str)

var data = localStorage.getItem('data')
arr.JSON.parse(data) || []
arr.push(new Date)
console.log(arr)
var str = JSON.stringify(arr)
localStorage.setItem('data',str)