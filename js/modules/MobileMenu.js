class MobileMenu {
  constructor() {
    this.menuToggle = document.querySelector('.menu-toggle');
    this.mobileMenu = document.querySelector('.mobile-menu');
    this.navigation = document.querySelector('.left-container');
    this.navigationLinks = document.querySelectorAll('.left-container a');

    window.addEventListener('DOMContentLoaded', this.setMobileMenuTop.bind(this));
    this.menuToggle.addEventListener('click', this.toggleMobileMenu.bind(this));
    document.addEventListener('click', this.closeMobileMenu.bind(this));
    this.navigationLinks.forEach(link => {
      link.addEventListener('click', this.handleNavigationClick.bind(this));
    });
  }

  setMobileMenuTop() {
    const navigationHeight = this.navigation.offsetHeight;
    this.mobileMenu.style.top = navigationHeight + 'px';
  }

  toggleMobileMenu() {
    this.mobileMenu.classList.toggle('open');
  }

  closeMobileMenu(event) {
    const target = event.target;
    const isMenuToggle = target.closest('.menu-toggle');
    const isMobileMenu = target.closest('.mobile-menu');

    if (!isMenuToggle && !isMobileMenu) {
      this.mobileMenu.classList.remove('open');
    }
  }

  handleNavigationClick(event) {
    event.preventDefault();
    const targetId = event.target.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      this.scrollToElement(targetElement);
      this.mobileMenu.classList.remove('open'); // Schließt das mobile Menü nach dem Klick
    }
  }

  scrollToElement(element) {
    window.scrollTo({
      top: element.offsetTop,
      behavior: 'smooth'
    });
  }
}

export default MobileMenu;