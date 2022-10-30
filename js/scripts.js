let dateNow = new Date()
let dateEnd = new Date("2022/11/13")
let MSLeft = dateEnd - dateNow
let seconds = MSLeft / 1000
let minutes = seconds / 60
let hours = minutes / 60
let days = Math.floor(hours / 24)
let s = (hours / 24) - days

let elDays = document.getElementById("days")

console.log(elDays)
elDays.innerHTML = days