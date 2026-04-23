

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


// function fetchData(num) {
//  return new Promise((res, rej) => {
//     setTimeout(() => {
//       // var data = 'data from db'
//       var data = num*num
//       res(data)
//     }, 4000)
//   })
// }


// async function displayData() {
//   var data1 = await fetchData(2)
//   console.log(data1)
//   var data2 = await fetchData(data1)
//   console.log(data2)
//   var data3 = await fetchData(data2)
//   console.log(data3)
//   var data4 = await fetchData(data3)
//   console.log(data4)
  
// }

// displayData()


// var pr1 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej('pr-1')
//   }, 4000)
// })
// var pr2 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej('pr-2')
//   }, 1000)
// })
// var pr3 = new Promise((res, rej) => {
//   setTimeout(() => {
//     rej('pr-3')
//   }, 2000)
// })


// Promise.all([pr1, pr2, pr3]).then((res)=>console.log(res))
// Promise.allSettled([pr1, pr2, pr3]).then((res)=>console.log(res))
// Promise.race([pr1, pr2, pr3]).then((res)=>console.log(res))
// Promise.any([pr1, pr2, pr3]).then((res)=>console.log(res))

// https://jsonplaceholder.typicode.com/posts


var getallBtn = document.getElementById('getalldata')

var body = document.getElementById('body')

function getallData() {
  fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
       return res.json()
    }).then((posts) => {
      posts.forEach((post) => {
        var para = document.createElement('p')
        console.log(para)
        para.textContent = post.title
        body.appendChild(para)
       })
    }).catch((err) => {
       console.log(err)
     })
}

getallBtn.addEventListener('click', getallData)

//get single data

var getsingleBtn = document.getElementById('getsingledata')

function getSingleData() {
  fetch('https://jsonplaceholder.typicode.com/posts/10')
    .then((res) => {
      console.log(res)
     return res.json()
    }).then((post) => {
     console.log(post)
    }).catch((err) => {
     console.log(err)
  })
}

getsingleBtn.addEventListener('click', getSingleData)

//send data

var newpost = {
  userId: 110,
  title: 'my title',
  body: 'my body'
}

var senddataBtn = document.getElementById('senddata')

function sendDataFun() {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(newpost)
  }).then((res) => {
    return res.json()
  }).then((post) => {
    console.log(post)
  }).catch((err) => {
    console.log(err)
  })
}

senddataBtn.addEventListener('click', sendDataFun)

//update data

var updateBtn = document.getElementById('updatedata')

function updateDataFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/10', {
    method: 'PUT',
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(newpost)
  }).then((res) => {
    console.log(res)
    return res.json()
  }).then((post) => {
    console.log(post)
  }).catch((err) => {
    console.log(err)
  })
}

updateBtn.addEventListener('click', updateDataFun)

//delete data

var deleteBtn = document.getElementById('deletedata')

function deleteDataFun() {
  fetch('https://jsonplaceholder.typicode.com/posts/10', {
     method: 'DELETE'
  }).then((res) => {
    console.log(res)
    return res.json()
  }).then((post) => {
     console.log(post)
  }).catch((err) => {
     console.log(err)
   })
}

deleteBtn.addEventListener('click', deleteDataFun)






















