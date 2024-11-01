(function () {
  const container = document.querySelector('#carousel')
  const slides = container.querySelectorAll('.slide')
  const indicatorsContainer = container.querySelector('#indicators-container')
  const indicatorItems = container.querySelectorAll('.indicator')
  const pauseBtn = container.querySelector('#pause-btn')
  const prevBtn = container.querySelector('#prev-btn')
  const nextBtn = container.querySelector('#next-btn')

  const CODE_ARROW_LEFT = 'ArrowLeft'
  const CODE_ARROW_RIGHT = 'ArrowRight'
  const CODE_SPACE = 'Space'
  const FA_PAUSE = '<i class="fas fa-pause-circle"></i>'
  const FA_PLAY = '<i class="fas fa-play-circle"></i>'
  const INTERVAL = 2000

  let currentSlide = 0
  let isPlaying = true
  let timerId = null
  let startPosX = null
  let endPosX = null

  function gotoNth(n) {
    slides[currentSlide].classList.toggle('active')
    indicatorItems[currentSlide].classList.toggle('active')
    currentSlide = (n + slides.length) % slides.length
    slides[currentSlide].classList.toggle('active')
    indicatorItems[currentSlide].classList.toggle('active')
  }

  function gotoPrev() {
    gotoNth(currentSlide - 1)
  }

  function gotoNext() {
    gotoNth(currentSlide + 1)
  }

  function tick() {
    timerId = setInterval(gotoNext, INTERVAL)
  }

  function pauseHandler() {
    if (!isPlaying) return
    pauseBtn.innerHTML = FA_PLAY
    isPlaying = !isPlaying
    clearInterval(timerId)
  }

  function playHandler() {
    pauseBtn.innerHTML = FA_PAUSE
    isPlaying = !isPlaying
    tick()
  }

  function pausePlayHandler() {
    isPlaying ? pauseHandler() : playHandler()
  }

  function prevHandler() {
    pauseHandler()
    gotoPrev()
  }

  function nextHandler() {
    pauseHandler()
    gotoNext()
  }

  function indicateHandler(e) {
    const { target } = e // <- це сучасний синтаксис -> const target = e.target
    if (target && target.classList.contains('indicator')) {
      pauseHandler()
      gotoNth(+target.dataset.slideTo)
    }
  }

  function pressKeyHandler(e) {
    const { code } = e // <- це сучасний синтаксис -> const code = e.code
    if (code === CODE_ARROW_LEFT) prevHandler()
    if (code === CODE_ARROW_RIGHT) nextHandler()
    if (code === CODE_SPACE) {
      e.preventDefault()
      pausePlayHandler()
    }
  }

  function swipeStartHandler(e) {
    startPosX = e instanceof MouseEvent
      ? e.pageX // MouseEvent
      : e.changedTouches[0].pageX // TouchEvent
  }

  function swipeEndHandler(e) {
    endPosX = e instanceof MouseEvent
      ? e.pageX // MouseEvent
      : e.changedTouches[0].pageX // TouchEvent
    if (endPosX - startPosX > 100) prevHandler()
    if (endPosX - startPosX < -100) nextHandler()
  }

  function initListeners() {
    pauseBtn.addEventListener('click', pausePlayHandler)
    prevBtn.addEventListener('click', prevHandler)
    nextBtn.addEventListener('click', nextHandler)
    indicatorsContainer.addEventListener('click', indicateHandler)
    container.addEventListener('touchstart', swipeStartHandler)
    container.addEventListener('mousedown', swipeStartHandler)
    container.addEventListener('touchend', swipeEndHandler)
    container.addEventListener('mouseup', swipeEndHandler)
    document.addEventListener('keydown', pressKeyHandler)
  }

  function init() {
    initListeners()
    tick()
  }

  init()
}())
