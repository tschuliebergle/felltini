class ScrollAnimation {
    constructor() {
      this.scrollAnimates = document.querySelectorAll('.scroll-animate');
      this.init();
    }
  
    init() {
      const options = {
        root: null, // Das ist der Viewport
        rootMargin: '0px',
        threshold: 0.5, // Hier können Sie den Schwellenwert anpassen, ab wann das Element als sichtbar betrachtet wird
      };
  
      const observer = new IntersectionObserver(this.handleIntersection.bind(this), options);
  
      this.scrollAnimates.forEach((animate) => {
        observer.observe(animate);
      });
    }
  
    handleIntersection(entries) {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Hier wird ein Delay basierend auf dem Index des Eintrags hinzugefügt
            const delay = index * 0.3; // Hier können Sie die Verzögerung anpassen (in Sekunden)
            
            entry.target.style.animation = `slideInRight 1s ease-out ${delay}s forwards`;
            
            // Optional: Um das Element nur einmal zu animieren, entfernen Sie das data-animate Attribut
            //entry.target.removeAttribute('data-animate');
          }
        });
    }
      
}
  
  export default ScrollAnimation;