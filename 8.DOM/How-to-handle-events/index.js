

// var subChild = document.getElementById('subchild')

// function subChildFun(e) {
//   console.log('subchild')
//   console.log(e)
//   console.log(e.target)
//   // e.stopPropagation()
//   // console.log(e.clientX)
//   // console.log(e.clientY)
//   // console.log(e.offsetX)
//   // console.log(e.offsetY)
// }

// subChild.addEventListener('click', subChildFun, true)

// var child = document.getElementById('child')

// function childFun(e) {
//   console.log('child')
//   console.log(e)
//   console.log(e.target)
// }

// child.addEventListener('click', childFun, true)

// var parent = document.getElementById('parent')

// function parentFun(e) {
//   console.log('parent')
//   console.log(e)
//   console.log(e.target)
// }

// parent.addEventListener('click', parentFun, true)





var table = document.getElementById('table')

function tableFun(e) {
  console.log(e)
  console.log(e.target)
}

table.addEventListener('click', tableFun)