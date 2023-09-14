window.addEventListener('DOMContentLoaded', () => {
  const btnTextMore = document.querySelector('.article__read-more')

  btnTextMore.addEventListener('click', (e) => {
    btnTextMore.previousElementSibling.classList.toggle('article__text--full')
    btnTextMore.innerHTML =
      btnTextMore.innerHTML == 'Читать далее' ? 'Скрыть' : 'Читать далее'
  })
})
