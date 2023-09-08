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

// const slider = document.querySelector('.swiper')
// let mySwiper

// function mobileSlider(elemName) {
//   if (window.innerWidth <= 768 && elemName.dataset.mobile == 'false') {
//     mySwiper = new Swiper(elemName, {
//       modules: [Navigation, Pagination],
//       slidesPerView: 'auto',
//       spaceBetween: 10,
//       loop: true,
//       slideClass: 'card',
//       pagination: {
//         el: '.swiper-pagination',
//         clickable: true
//       }
//     })

//     elemName.dataset.mobile = 'true'
//   }
//   if (window.innerWidth > 768) {
//     elemName.dataset.mobile = 'false'
//     if (elemName.classList.contains('swiper-initialized')) {
//       console.log(`click`, mySwiper)
//       mySwiper.destroy(true, true)
//     }
//   }
// }

// mobileSlider()

// window.addEventListener('resize', () => {
//   mobileSlider(slider)
// })
