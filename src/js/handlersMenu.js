window.addEventListener('DOMContentLoaded', () => {
  const btnMenuOpen = document.querySelector('.nav__burger')
  const btnMenuClose = document.querySelector('.menu__nav-icon--close')
  const menu = document.querySelector('.menu')

  const handlerMenu = () => {
    menu.classList.toggle('menu--isOpen')
  }
  btnMenuOpen.addEventListener('click', handlerMenu)
  btnMenuClose.addEventListener('click', handlerMenu)

  document.addEventListener('click', (e) => {
    const menuIsOpen = menu.classList.contains('menu--isOpen')
    if (
      menuIsOpen &&
      e.target != btnMenuClose &&
      e.target != btnMenuOpen &&
      e.target !== menu &&
			menu.contains(e.target) === false
    ) {
      console.log(`upali`, menu.contains(e.target))
      menu.classList.remove('menu--isOpen')
    }
  })
})
