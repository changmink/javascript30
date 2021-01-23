window.addEventListener('keydown',(e) => {
    console.log(e.keyCode)
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.add("playing")
    audio.play()
})
window.addEventListener('keyup', (e) => {
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    key.classList.remove("playing")
})