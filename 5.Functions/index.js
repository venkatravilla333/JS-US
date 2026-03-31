

// function test() {
  
// }

// test()

// var x = function test() {
  
// }
// x()

// var y = function () {
  
// }
// y()

// var z = () => {
  
// }
// z()

//params vs arguments

// function test(a, b, c) {
//   console.log(a, b,c)
// }
// test(10, 20, 30)

//default param

// function test(a=10, b=20) {
//   console.log(a, b)
// }
// test()

// function test() {
//   console.log(arguments, typeof arguments)
//   //without using loop
//   // console.log(arguments[0])
//   // console.log(arguments[1])
//   // console.log(arguments[2])
//   // console.log(arguments[3])
//   // console.log(arguments[4])
//   var sum = 0
//   for (var value of arguments) {
//       sum += value
//   }
//   return sum
// }

// console.log(test(1, 2, 3, 4, 5))

// function test(...rest) {
//   console.log(rest)
//   // console.log(rest[0])
//   // console.log(rest[1])
//   // console.log(rest[2])
//   // console.log(rest[3])
//   // console.log(rest[4])
// var sum = 0
//   for (var value of rest) {
//     sum += value
//   }
//   return sum
// }

// console.log(test(1, 2, 3, 4, 5))

//global scope
//storage
// var a = 1

// let b = 2

// const c = 3

// //access
// console.log(a)
// console.log(b)
// console.log(c)

// function test() {
//   console.log(a)
//   console.log(b)
//   console.log(c)
//   //storage
//   var d = 4
//   let e = 5
//   const f = 6

//   console.log(d)
//   console.log(e)
//   console.log(f)

//   if (true) {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(d)
//     console.log(e)
//     console.log(f)
//     //storage
//     var g = 7
//     let h = 8
//     const i = 9
//     console.log(g)
//     console.log(h)
//     console.log(i)
//   }

//   console.log(g)
//   // console.log(h)
//   // console.log(i)
// }

// test()
// // console.log(d)
// // console.log(e)
// // console.log(f)
// // console.log(g)
// // console.log(h)
// // console.log(i)


// function test(){
//   var a = 10
//   if (true) {
//     let b = 20
//     return b
//   }
  

//   // return a
// }
// console.log(test())
// console.log(res)


//Hoisting
// console.log(a)
// var a = 'kohli'
// console.log(b)
// let b = 'sachin'

// console.log(a)

// console.log(b)
// var b = 40
// console.log(b)

// console.log(c)
// var c = true
// console.log(c)

// console.log(d)
// var d
// console.log(d)

// console.log(e)
// var e = null
// console.log(e)

// console.log(f)
// var f = {value : 100}
// console.log(f)

// console.log(g)
// var g = [1, 2, 3]
// console.log(g)

// console.log(declare)
// declare()
// function declare() {
//   console.log('declare')
// }
// console.log(declare)
// // declare()

// console.log(h)
// // h()
// var h = function test() {
//   console.log('named')
// }
// console.log(h)
// // h()

// console.log(i)
// var i = function () {
//   console.log('Anonymous')
// }
// console.log(i)
// // i()

// console.log(j)
// var j = () => {
//   console.log(x)
//   var x = 10
  
//   console.log('Arrow')
// }
// console.log(j)

// // j()


// var vs let vs const

// scope

// hoisting

//redeclaration

// var x = 10
// let x = 10
// const x = 10
// let x = 10
// const x = 10
// console.log(x)
// console.log(x)
// console.log(x)
// var x = 20
// let x = 20
// const x = 20
// console.log(x)
// console.log(x)
// console.log(x)
// console.log(x)

//reassignment

// var x = 10
// let x = 10
// const x = 10
// console.log(x)
// console.log(x)
// x = 20
// console.log(x)
// console.log(x)


//initialization

// var x
// let x
// const x
// console.log(x)

//closure

// function outer() {
//   var x = 10
//   var y = 20
//  return function inner() {
//        console.log(x)
//   }
// }
// var inner = outer()
// inner()

//IIFE

// (function () {
//   var a = 100
// })()
// console.log(a)

// var x = 10

// const a = 100

//function currying

//with out curry

// function test(a,b,c) {
//   console.log(a + b + c)
  
// }
// test(1,2,3)

//with curry

// function funA(a) {
//   return function funB(b) {
//     return function funC(c) {
//       console.log(a+b+c)
//     }
//   }
// }
// funA(1)(2)(3)


//without curry

// function calDis(price, dis) {
//   var disAmount = price * dis
//   console.log(disAmount)
// }
// calDis(1000, .1)
// calDis(1000, .2)
// calDis(1000, .3)
// calDis(1000, .4)
// calDis(1000, .5)

//with curry

// function calPrice(price) {
//   return function calDis(dis) {
//     var disAmount = price * dis
//     console.log(disAmount)
//   }
// }
// var calDis = calPrice(1000)
// calDis(.1)
// calDis(.2)
// calDis(.3)
// calDis(.4)
// calDis(.5)

// First class function

// var a = function (cb) {
//   console.log(cb)
//   return ()=>{}
//  }
// a(function(){})


// function test(cb) {
//   console.log('test')
//   cb()
//   return function hello() {
//     console.log('hello')
//   }
// }
// var hello = test(() => {
//   console.log('CB')
// })
// hello()

//pure vs impure

// function pure(a,b,c) {
//   console.log(a + b + c)
  
// }
// pure(1, 2, 3)

// function impure(a, b, c) {
//   var d = Math.random()
//   console.log(a + b + c + d)
  
// }
// impure(1,2,3)


//recursion function


// function factorial(n) {
//   if (n <= 0) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }

// let result = factorial(5);
// console.log(result);













