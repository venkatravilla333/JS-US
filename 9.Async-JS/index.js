

// // console.log('hi')
// // console.log('hello')
// // console.log('bye')

// console.log('hi')

// setTimeout(() => {
//   console.log('Timer-1')
// }, 2000)

// console.log('hello')

// setTimeout(() => {
//   console.log('timer-2')
// }, 4000)

// console.log('kohli')

// Promise.resolve().then(() => { console.log('PR-1') }).then(() => { console.log('PR-2') })

// console.log('sachin')

// setTimeout(() => {
//   console.log('TImer-3')
// }, 0)

// console.log('Bye')

// function fetchData(num, displayData) {
//   setTimeout(() => {
//     // var data = 'data from db'
//     var data = num * num
//     displayData(data)
//   }, 4000)
// }
// fetchData(2, (data1)=> {
//   console.log(data1)
//    fetchData(data1, (data2) => {
//      console.log(data2)
//        fetchData(data2, (data3) => {
//          console.log(data3)
//             fetchData(data3, (data4) => {
//               console.log(data4)
//                  fetchData(data3, (data4) => {
//                    console.log(data4)
//               })
//           })
//       })
//    })
// })

// function fetchData(num) {
//  return new Promise((res, rej) => {
//   setTimeout(() => {
//     // var data = 'data from db'
//     var data = num*num
//     res(data)
//   }, 4000)
// })  
// }
// fetchData(2).then((data1)=> {
//   console.log(data1)
//   return fetchData(data1)
// }).then((data2) => {
//   console.log(data2)
//   return fetchData(data2)
// }).then((data3) => {
//   console.log(data3)
//   return fetchData(data3)
// }).then((data4) => {
//   console.log(data4)
// })


















