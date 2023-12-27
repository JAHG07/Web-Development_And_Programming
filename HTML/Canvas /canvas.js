const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")


canvas.width = window.innerWidth
canvas.height = window.innerHeight

addEventListener('resize', () => {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
})

const mouse = {
  x: undefined,
  y: undefined
}

canvas.addEventListener('mousemove', (event) => {
  mouse.x = event.x
  mouse.y = event.y
  drawCircle()
})

function drawCircle() {
  ctx.fillStyle = "green"
  ctx.beginPath()
  ctx.arc(mouse.x - 5, mouse.y - 5, 5, 0, 360)
  ctx.fill()
}