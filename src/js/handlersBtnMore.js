window.addEventListener('DOMContentLoaded', () => {
  const btnTextMore = document.querySelector('.article__read-more')

  btnTextMore.addEventListener('click', (e) => {
    if (
      btnTextMore.previousElementSibling.classList.contains(
        'article__text--full'
      )
    ) {
      btnTextMore.previousElementSibling.classList.toggle('article__text--full')
      btnTextMore.innerHTML = 'Читать далее'
    } else {
      btnTextMore.previousElementSibling.classList.toggle('article__text--full')
      btnTextMore.innerHTML = 'Скрыть текст'
    }
  })
})
