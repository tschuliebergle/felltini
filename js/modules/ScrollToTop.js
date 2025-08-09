class ScrollToTop {
    constructor() {
      this.scrollToTopButton = document.getElementById('scrollToTopButton');
      this.navigation = document.querySelector('.navigation');
      this.navigationHeight = this.navigation.offsetHeight;
  
      window.addEventListener('scroll', this.toggleVisibility.bind(this));
      this.scrollToTopButton.addEventListener('click', this.scrollToTop.bind(this));
    }
  
    toggleVisibility() {
      if (window.scrollY > this.navigationHeight) {
        this.scrollToTopButton.classList.add('show');
      } else {
        this.scrollToTopButton.classList.remove('show');
      }
    }
  
    scrollToTop(event) {
      event.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }
  
  export default ScrollToTop;