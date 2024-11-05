/* eslint-disable no-unused-vars */
/* eslint-disable prefer-rest-params */
function Carousel(containerId = '#carousel') {
  this.container = document.querySelector(containerId)
}

Carousel.prototype = {
  _initProps() {
    this.slides = this.container.querySelectorAll('.slide')
    this.indicatorsContainer = this.container.querySelector('#indicators-container')
    this.indicatorItems = this.container.querySelectorAll('.indicator')
    this.pauseBtn = this.container.querySelector('#pause-btn')
    this.prevBtn = this.container.querySelector('#prev-btn')
    this.nextBtn = this.container.querySelector('#next-btn')

    this.CODE_ARROW_LEFT = 'ArrowLeft'
    this.CODE_ARROW_RIGHT = 'ArrowRight'
    this.CODE_SPACE = 'Space'
    this.FA_PAUSE = '<i class="fas fa-pause-circle"></i>'
    this.FA_PLAY = '<i class="fas fa-play-circle"></i>'
    this.INTERVAL = 2000

    this.currentSlide = 0
    this.isPlaying = true
  },

  _initListeners() {
    this.pauseBtn.addEventListener('click', this.pausePlay.bind(this))
    this.prevBtn.addEventListener('click', this.prev.bind(this))
    this.nextBtn.addEventListener('click', this.next.bind(this))
    this.indicatorsContainer.addEventListener('click', this._indicate.bind(this))
    document.addEventListener('keydown', this._pressKey.bind(this))
  },

  _gotoNth(n) {
    this.slides[this.currentSlide].classList.toggle('active')
    this.indicatorItems[this.currentSlide].classList.toggle('active')
    this.currentSlide = (n + this.slides.length) % this.slides.length
    this.slides[this.currentSlide].classList.toggle('active')
    this.indicatorItems[this.currentSlide].classList.toggle('active')
  },

  _gotoPrev() {
    this._gotoNth(this.currentSlide - 1)
  },

  _gotoNext() {
    this._gotoNth(this.currentSlide + 1)
  },

  _tick() {
    this.timerId = setInterval(() => this._gotoNext(), this.INTERVAL)
  },

  _indicate(e) {
    const { target } = e // <- це сучасний синтаксис -> const target = e.target
    if (target && target.classList.contains('indicator')) {
      this.pause()
      this._gotoNth(+target.dataset.slideTo)
    }
  },

  _pressKey(e) {
    const { code } = e // <- це сучасний синтаксис -> const code = e.code
    if (code === this.CODE_ARROW_LEFT) this.prev()
    if (code === this.CODE_ARROW_RIGHT) this.next()
    if (code === this.CODE_SPACE) {
      e.preventDefault()
      this.pausePlay()
    }
  },

  pause() {
    if (!this.isPlaying) return
    this.pauseBtn.innerHTML = this.FA_PLAY
    this.isPlaying = !this.isPlaying
    clearInterval(this.timerId)
  },

  play() {
    this.pauseBtn.innerHTML = this.FA_PAUSE
    this.isPlaying = !this.isPlaying
    this._tick()
  },

  pausePlay() {
    this.isPlaying ? this.pause() : this.play()
  },

  prev() {
    this.pause()
    this._gotoPrev()
  },

  next() {
    this.pause()
    this._gotoNext()
  },

  init() {
    this._initProps()
    this._initListeners()
    this._tick()
  },
}

Carousel.prototype.constructor = Carousel
