const secondHand = document.querySelector(".second-hand")
const minHand = document.querySelector(".min-hand")
const hourHand = document.querySelector(".hour-hand")

function setDate(){
  const now = new Date()
  const seconds = now.getSeconds()
  const minuts = now.getMinutes()
  const hours = now.getHours()

  const secondsDegree = ((seconds / 60) * 360) + 90
  const minutsDegree = ((minuts / 60) * 360) + 90
  const hoursDegree = ((hours / 60) * 360) + 90

  secondHand.style.transform = `rotate(${secondsDegree}deg)`
  minHand.style.transform = `rotate(${minutsDegree}deg)`
  hourHand.style.transform = `rotate(${hoursDegree}deg)`

}
setInterval(setDate, 1000)