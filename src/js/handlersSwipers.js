window.addEventListener('DOMContentLoaded', () => {
  const btnsSwiperMore = document.querySelectorAll(
    '.swiper-container__read-more'
  )
  function onClick(e) {
    const cards = e.target.previousElementSibling.querySelectorAll(`.card`)

    cards.forEach((card) => {
      card.classList.toggle('card--visible')
    })

    e.target.innerHTML =
      e.target.innerHTML == 'Показать всё' ? 'Скрыть' : 'Показать всё'
  }

  btnsSwiperMore.forEach((e) => {
    e.addEventListener('click', onClick)
  })
})
