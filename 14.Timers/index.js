

// console.log(window)

var timeOut = setTimeout(() => {
  console.log('timeout')
}, 4000)

var interValTime = setInterval(() => {
  console.log('interval')
}, 4000)


var clearBtn = document.getElementById('cleartime')

function clearTimerFun() {
  clearTimeout(timeOut) 
}

clearBtn.addEventListener('click', clearTimerFun)

var clearIntervalBtn = document.getElementById('clearinterval')

function clearIntervalFun() {
  clearInterval(interValTime)
}

clearIntervalBtn.addEventListener('click', clearIntervalFun)