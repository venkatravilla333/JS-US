

// console.log(window)

var storeBtn = document.getElementById('storedata')

function storeDataFun() {
  window.localStorage.setItem('name', 'sachin')
  window.localStorage.setItem('age', 45)
  window.sessionStorage.setItem('city', 'mumbai')
  window.sessionStorage.setItem('cash', 100000)
}

storeBtn.addEventListener('click', storeDataFun)

//get data

var getBtn = document.getElementById('getdata')

var body = document.getElementById('body')

function getDataFun() {
  // var name = window.localStorage.getItem('name')
  var name = window.sessionStorage.getItem('city')
  var h3 = document.createElement('h3')
  console.log(h3)
  h3.textContent = name
  body.appendChild(h3)
}

getBtn.addEventListener('click', getDataFun)

//remove data

var removeBtn = document.getElementById('removedata')

function removeDataFun() {
  //  localStorage.removeItem('name')
  //  localStorage.removeItem('age')
  localStorage.clear()
  //  sessionStorage.removeItem('city')
  //  sessionStorage.removeItem('cash')
  sessionStorage.clear()
}

removeBtn.addEventListener('click', removeDataFun)