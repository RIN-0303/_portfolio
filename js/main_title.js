const letters = "Welcome to yerin's portfolio :)"
const text = document.querySelector('.hello')
const speed = 200
let i = 0

const typing = async () => {
  const letter = letters.split('')

  while (letter.length) {
    await wait(speed)
    text.innerHTML += letter.shift()
  }

  await wait(100)
}

function wait(ms) {
  return new Promise((res) => setTimeout(res, ms))
}

setTimeout(typing, 200)
