import Swiper from 'swiper'
import { Navigation, Pagination } from 'swiper/modules'

const configSwiper = {
  modules: [Navigation, Pagination],
  slidesPerView: 'auto',
  spaceBetween: 10,
  loop: true,
  slideClass: 'card',
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
}

window.addEventListener('DOMContentLoaded', () => {
  const resizableSwiper = (
    breakpoint,
    swiperClass,
    swiperSettings,
    callback
  ) => {
    let swiper

    breakpoint = window.matchMedia(breakpoint)

    const enableSwiper = function (className, settings) {
      swiper = new Swiper(className, settings)

      if (callback) {
        callback(swiper)
      }
    }

    const checker = function () {
      if (breakpoint.matches) {
        return enableSwiper(swiperClass, swiperSettings)
      } else {
        if (swiper !== undefined) {
          swiper.destroy(true, true)
        }
        return
      }
    }

    breakpoint.addEventListener('change', checker)
    checker()
  }

  resizableSwiper('(max-width: 768px)', '.swiper-1', configSwiper)
  resizableSwiper('(max-width: 768px)', '.swiper-2', configSwiper)
  resizableSwiper('(max-width: 768px)', '.swiper-3', configSwiper)
})
