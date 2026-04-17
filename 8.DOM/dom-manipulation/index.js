

var data = 'sachin'

var h1 = document.createElement('h1')

console.log(h1)

h1.textContent = data

var body = document.getElementById('body')


var addBtn = document.getElementById('add')

function addBtnFun() {
  body.appendChild(h1)
}
addBtn.addEventListener('click', addBtnFun)

// var para = document.createElement('p')
// console.log(para)

// para.textContent = 'This is para'

// body.insertBefore(para, h1)

//update

var h5 = document.createElement('h5')
console.log(h5)

h5.textContent = 'kohli'


var updateBtn = document.getElementById('update')

function updateBtnFun() {
  body.replaceChild(h5, h1)
}

updateBtn.addEventListener('click', updateBtnFun)


//how to remove element from dom

// var deleteBtn = document.getElementById('delete')

// function deleteBtnFun() {
//   body.removeChild(h1)
// }

// deleteBtn.addEventListener('click', deleteBtnFun)


