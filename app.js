const numbers = document.getElementById("numbers")
const secondsHand = document.getElementById("seconds-hand")
const minutesHand = document.getElementById("minutes-hand")
const hoursHand = document.getElementById("hours-hand")

function printNumbers() {
  for (let i = 1; i <= 12; ++i) {
    const number = document.createElement("div")
    number.className = "number"
    number.style.transform = `rotate(${
      i * 30
    }deg) translate(0, -135px) rotate(-${i * 30}deg)`
    number.textContent = i
    numbers.appendChild(number)
  }
}

printNumbers()

function getTime() {
  const now = new Date()
  const seconds = now.getSeconds()
  const minutes = now.getMinutes()
  const hours = now.getHours()

  const timeInterval = 6
  const hoursInterval = 30

  secondsHand.style.transform = "rotate(" + seconds * timeInterval + "deg)"
  minutesHand.style.transform =
    "rotate(" + (minutes * timeInterval + seconds / 10) + "deg)"
  hoursHand.style.transform =
    "rotate(" + (hours * hoursInterval + minutes / 2) + "deg)"
}

setInterval(getTime, 100)
