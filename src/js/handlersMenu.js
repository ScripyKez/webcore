window.addEventListener('DOMContentLoaded', () => {
  const btnMenuOpen = document.querySelector('.nav__burger')
  const btnMenuClose = document.querySelector('.menu__nav-icon--close')
  const menu = document.querySelector('.menu')
  let bgDiv = document.createElement('div')
  bgDiv.className = 'bg-modal'

  const menuOpen = () => {
    menu.before(bgDiv)
    menu.classList.toggle('menu--isOpen')
  }
  const menuClose = () => {
    menu.previousElementSibling.remove()
    menu.classList.toggle('menu--isOpen')
  }
  btnMenuOpen.addEventListener('click', menuOpen)
  btnMenuClose.addEventListener('click', menuClose)

  document.addEventListener('click', (e) => {
    const menuIsOpen = menu.classList.contains('menu--isOpen')
    if (
      menuIsOpen &&
      e.target != btnMenuClose &&
      e.target != btnMenuOpen &&
      e.target !== menu &&
      menu.contains(e.target) === false
    ) {
      menu.classList.remove('menu--isOpen')
      menu.previousElementSibling.remove()
    }
  })
})
