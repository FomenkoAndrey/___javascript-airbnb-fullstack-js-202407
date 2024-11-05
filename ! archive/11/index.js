import SwipeCarousel from './swipe-carousel.js'

const carousel = new SwipeCarousel({
  containerId: '#mycarousel',
  // slideID: '.slide',
  interval: 1000,
  // isPlaying: false,
})
carousel.init()
