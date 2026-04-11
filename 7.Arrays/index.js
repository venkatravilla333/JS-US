

// var arr = [1, 2, 3, 4, 5]

// console.log(arr)
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//How to add new items to array

//starting

// arr.unshift(0)

// console.log(arr)

//ending

// arr.push(6)

// console.log(arr)

//anywhere

// arr.splice(0, 0, 0)
// arr.splice(arr.length, 0, 6)
// arr.splice(2, 0, 'Hi')
// console.log(arr)

//How to remove array values

// staring
// arr.shift()
// console.log(arr)
// // ending
// arr.pop()
// console.log(arr)
// any where

// arr.splice(0, 2)
// arr.splice(arr.length-1, 4)
// console.log(arr)

// let arr = [1, 2, 3, 4, 5];

// console.log(arr)

// arr.splice(arr.length - 1, 1);
// arr.splice(arr.length - 2, 1);

// console.log(arr); // [1]

//How to delete all values from array

// var arr = [1, 2, 3, 4, 5]

// console.log(arr)
// console.log(arr.length)

// arr.length = 0
// arr.splice(0, arr.length)
// arr = []

// console.log(arr)


//How to find array values

// var arr = [1, 2, 3, 4, 5, 2]
// var arr = [{course: 'java'},{course: 'css'}, {course: 'react'}, {course: 'java'}]

// console.log(arr)
// console.log(arr.indexOf(2))
// console.log(arr.indexOf(20))
// console.log(arr.lastIndexOf(2))
// console.log(arr.lastIndexOf(20))
// console.log(arr.includes(2))
// console.log(arr.includes(20))

// var findRes = arr.find((obj) => {
// //  return obj.course === 'java'
//  return obj.course === 'html'
// })

// console.log(findRes)

// var findIndexRes = arr.findIndex((obj) => {
// //  return obj.course === 'java'
//  return obj.course === 'html'
// })

// console.log(findIndexRes)

// var findLastIndexRes = arr.findLastIndex((obj) => {
// //  return obj.course === 'java'
//  return obj.course === 'html'
// })

// console.log(findLastIndexRes)

// var arr1 = [1, 2, 3, 4, 5]
// var arr2 = [6, 7, 8, 9, 10]
// var arr3 = [11, 12, 13, 14, 15]

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)

//ES-5

// var combineArr = arr3.concat(arr2, arr1)
// console.log(combineArr)

//ES-6
// var combineArr = [...arr1, ...arr2, ...arr3]
// console.log(combineArr)

//How to loop array

//without using loop

// var arr = [1, 2, 3, 4, 5]

// console.log(arr)

//without using loop

// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
// console.log(arr[3])
// console.log(arr[4])

//with using loop

// for of loop

// for (var value of arr) {
//   console.log(value)
// }

// //forEach

// arr.forEach((v, i) => {
//   console.log(v, i)
// })


//How to filter array values

// var arr = [1, 2, 3, 4, 5]

// var filterRes = arr.filter((value) => {
//  return value > 3
// })
// console.log(filterRes)

//How to map array values with other values

// var mapRes = arr.map((value) => {
//   return value * 100
// })

// console.log(mapRes)

// var forEachRes = arr.forEach((value) => {
// return value*100
// })
// console.log(forEachRes)


//how to reduce array values into single value

// var arr = [1, 2, 3, 4, 5]

// var reduceRes = arr.reduce((cum, cur) => {
//   //  return cum + cur
//   console.log(cum, cur)
// }, 0)
// console.log(reduceRes)











