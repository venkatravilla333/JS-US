


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

var person1 = {
  name: 'sachin',
  age: 45,
  city: 'mumbai',
  play: function () {
     console.log('play')
  }
}
console.log(person1)

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




