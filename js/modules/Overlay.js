class Overlay {
    constructor(overlayId, triggerSelector, closeSelector) {
      this.overlay = document.getElementById(overlayId);
      this.trigger = document.querySelector(triggerSelector);
      this.closeBtn = this.overlay.querySelector(closeSelector);
      this.body = document.body;
  
      this.registerEvents();
    }
  
    open() {
      this.overlay.classList.remove('hidden');
      this.body.classList.add('overlay-open');
    }
  
    close() {
      this.overlay.classList.add('hidden');
      this.body.classList.remove('overlay-open');
    }
  
    registerEvents() {
      // Öffnen des Overlays bei Klick auf den Trigger
      if (this.trigger) {
        this.trigger.addEventListener('click', () => this.open());
      }
  
      // Schließen des Overlays bei Klick auf den Close-Button
      if (this.closeBtn) {
        this.closeBtn.addEventListener('click', () => this.close());
      }
  
      // Schließen des Overlays bei Klick auf den Hintergrund (also außerhalb des Inhaltsbereichs)
      if (this.overlay) {
        this.overlay.addEventListener('click', (e) => {
          // Verhindern, dass der Klick auf den inneren Content das Overlay schließt
          if (e.target === this.overlay) {
            this.close();
          }
        });
      }
  
      // Overlay mit der Escape-Taste schließen
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') this.close();
      });
    }
  }
  
  export default Overlay;
  