window.addEventListener('DOMContentLoaded', () => {
  const btnMenuOpen = document.querySelector('.nav__burger')
  const btnMenuClose = document.querySelector('.menu__nav-icon--close')
  const menu = document.querySelector('.menu')
  const body = document.querySelector('body')
  let bgDiv = document.createElement('div')
  bgDiv.className = 'bg-modal'

  const btnSupport = document.querySelectorAll('.nav__repair')
  const btnCall = document.querySelector('.nav__call')
  const btnCall1 = document.querySelector('.menu__nav-icon--call')
  const btnCall2 = document.querySelector('.call-btn')
  const btnSupportClose = document.querySelector('.modal__nav-icon')
  const modal = document.querySelector('.modal-bg')
  const inputs = document.querySelectorAll('.modal-input')
  const title = document.querySelector('.modal__title')

  const modalCallOpen = (e) => {
    e.preventDefault()

    title.innerHTML = 'Заказать звонок'

    inputs.forEach((input) => {
      if (input.getAttribute('type') !== 'tel') {
        input.style.display = 'none'
      }
    })

    modal.classList.toggle('modal-wrapper--is-open')
    body.classList.toggle('scroll-block')
  }
  const modalCallClose = (e) => {
    e.preventDefault()
    if (title.innerHTML == 'Заказать звонок') {
      title.innerHTML = 'Обратная связь'

      inputs.forEach((input) => {
        input.style.display = 'block'
      })
    }

    modal.classList.remove('modal-wrapper--is-open')
    body.classList.remove('scroll-block')
  }

  const modalSupportOpen = (e) => {
    e.preventDefault()

    modal.classList.toggle('modal-wrapper--is-open')
    body.classList.toggle('scroll-block')
  }
  const modalSupportClose = (e) => {
    e.preventDefault()
    modal.classList.remove('modal-wrapper--is-open')
    body.classList.remove('scroll-block')
  }

  const menuOpen = (e) => {
    e.preventDefault()
    menu.before(bgDiv)
    body.classList.toggle('scroll-block')
    menu.classList.toggle('menu--isOpen')
  }
  const menuClose = (e) => {
    e.preventDefault()
    menu.previousElementSibling.remove()
    body.classList.remove('scroll-block')
    menu.classList.remove('menu--isOpen')
  }

  btnMenuOpen.addEventListener('click', menuOpen)
  btnMenuClose.addEventListener('click', menuClose)

  btnSupport.forEach((btn) => {
    btn.addEventListener('click', modalSupportOpen)
  })
  btnSupportClose.addEventListener('click', modalCallClose)

  btnCall.addEventListener('click', modalCallOpen)
  btnCall1.addEventListener('click', modalCallOpen)
  btnCall2.addEventListener('click', modalCallOpen)

  document.addEventListener('click', (e) => {
    const menuIsOpen = menu.classList.contains('menu--isOpen')
    const modalIsOpen = modal.classList.contains('modal-wrapper--is-open')

    if (
      menuIsOpen &&
      e.target != btnMenuClose &&
      e.target != btnMenuOpen &&
      e.target !== menu &&
      menu.contains(e.target) === false
    ) {
      menu.classList.remove('menu--isOpen')
      body.classList.remove('scroll-block')
      menu.previousElementSibling.remove()
      return
    }
  })
})
