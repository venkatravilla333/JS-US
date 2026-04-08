


//How to create object

//Object literal way

// var person1 = {
//   name: 'sachin',
//   age: 45,
//   city: 'mumbai',
//   play: function () {
//      console.log('play')
//   }
// }

//How to manipulate obj

// console.log(person1)
// //how to access or use object properties

// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.city)
// person1.play()

// //how to add new object properties

// person1.color = 'red'
// person1.go = function () {
//   console.log('go')
// }
// console.log(person1)

// //how to update object properties value

// person1.age = 55

// console.log(person1)

// //how to delete object properties

// delete person1.color
// delete person1.go
// delete person1.play
// delete person1.name
// console.log(person1)

// var person2 = {
//   name: 'kohli',
//   age: 35,
//   city: 'delhi',
//   play: function () {
//      console.log('play')
//   }
// }

// console.log(person2)

// var person3 = {
//   name: 'dhoni',
//   age: 40,
//   city: 'ranchi',
//   play: function () {
//      console.log('play')
//   }
// }

// console.log(person3)

//How to create object dynamically

//Constructor function way (ES-5)

// function test(name, age, city) {
//   // console.log(this)
//   this.name = name
//   this.age = age
//   this.city = city
//   this.play = function () {
//     console.log('play')
//   }
// }
// var person1 = new test('sachin', 45, 'mumbai')

// //how to access
// console.log(person1)
// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.city)
// person1.play()

// //how to add new object properties

// person1.color = 'red'
// person1.go = function () {
//   console.log('go')
// }
// console.log(person1)

// //how to update object properties value

// person1.age = 55


// console.log(person1)

// //how to delete object properties

// delete person1.color
// delete person1.go
// delete person1.play
// delete person1.name
// console.log(person1)
// var person2 = new test('kohli', 35, 'delhi')
// console.log(person2)
// var person3 = new test('dhoni', 40, 'ranchi')
// console.log(person3)

//ES-6 Classical way

// class test{
//   constructor(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     this.play = () => {
//       console.log('play')
//     }
//   }
// }
// var person1 = new test('sachin', 45, 'mumbai')
// console.log(person1)
// var person2 = new test('kohli', 35, 'delhi')
// console.log(person2)
// var person3  = new test('dhoni', 40, 'ranchi')
// console.log(person3)
// console.log(typeof test)

//How to loop object properties

// var person1 = {
//   name: 'sachin',
//   age: 45,
//   city: 'mumbai',
//   play: function () {
//      console.log('play')
//   }
// }
// console.log(person1)

//without using loop
// console.log(person1.name)
// console.log(person1.age)
// console.log(person1.city)
// person1.play()

//with using loop

// for in loop

// for (var key in person1) {
//   console.log(key, person1[key])
// }

// var keys = Object.keys(person1)
// console.log(keys)
// var values = Object.values(person1)
// console.log(values)
// var entreis = Object.entries(person1)
// console.log(entreis)

//copy


// var x = 10

// var y = x
// y = 20
// console.log(x)
// console.log(y)


// var originalObj = {
//   name: 'sachin',
//   address: { road: 101 },
//   play: function () {
//     console.log('play')
//   }
// }
// import lodash from lodash

// var lodash = require('lodash')
// var copiedObj = originalObj // normal copy
// var copiedObj = JSON.parse(JSON.stringify(originalObj)) // deep copy
// var copiedObj = lodash.cloneDeep(originalObj) // deep copy
// var copiedObj = Object.assign({}, originalObj) // shallow copy (ES-5)
// var copiedObj = {...originalObj} // shallow copy (ES-6)


// copiedObj.name = 'kohli'
// copiedObj.address.road = 201
// console.log(originalObj)
// console.log(copiedObj)

//Template string

// var name = 'sachin'
// var age = 45

// console.log('Hi this is' + ' ' + name + ' ' + 'my age is' + ' ' + age  ) //ES-5
// console.log(`Hi this is ${name} my age is ${age}`) //ES-6

//Math object
// var x = 10.4
// var y = 15
// console.log(Math.min(x, y))
// console.log(Math.max(x, y))
// console.log(Math.ceil(x))
// console.log(Math.floor(x))
// console.log(Math.round(x))
// console.log(Math.random())

//Date object

// var now = new Date()
// console.log(now)

//Get methods
// console.log(now.getFullYear())
// console.log(now.getDate())
// console.log(now.getMonth())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now.getMinutes())
// console.log(now.getSeconds())

//Set Methods

// now.setFullYear(2040)
// now.setMonth(6)
// now.setHours(10)

// console.log(now)

// var date1 = new Date(2050, 10, 20, 10, 10, 10)
// console.log(date1)

