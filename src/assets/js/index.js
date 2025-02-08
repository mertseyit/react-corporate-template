//All funtional React inline css.

//open-close mobile menu
export const toggleMobileMenu = (isOpen) => {
  const mobileNavMenu = document.querySelector('.mobile-nav-menu');
  if (isOpen) {
    mobileNavMenu.classList.remove('close');
    mobileNavMenu.classList.add('open');
  } else {
    mobileNavMenu.classList.add('close');
    mobileNavMenu.classList.remove('open');
  }
};
