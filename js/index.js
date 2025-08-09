// modules
import MobileMenu from "./modules/MobileMenu.js"
import ScrollToTop from "./modules/ScrollToTop.js"
import ScrollAnimation from "./modules/ScrollAnimation.js"
import Overlay from "./modules/Overlay.js"

// Instantiate a new object using modules
const mobileMenu = new MobileMenu()
const scrollToTop = new ScrollToTop()
const scrollAnimation = new ScrollAnimation()

// 10 feste Overlays, jeweils mit eigenem Trigger & ID
const overlay1 = new Overlay('overlay-1', '[data-overlay="overlay-1"]', '.close-btn');
const overlay2 = new Overlay('overlay-2', '[data-overlay="overlay-2"]', '.close-btn');
const overlay3 = new Overlay('overlay-3', '[data-overlay="overlay-3"]', '.close-btn');
const overlay4 = new Overlay('overlay-4', '[data-overlay="overlay-4"]', '.close-btn');
const overlay5 = new Overlay('overlay-5', '[data-overlay="overlay-5"]', '.close-btn');
const overlay6 = new Overlay('overlay-6', '[data-overlay="overlay-6"]', '.close-btn');
const overlay7 = new Overlay('overlay-7', '[data-overlay="overlay-7"]', '.close-btn');
const overlay8 = new Overlay('overlay-8', '[data-overlay="overlay-8"]', '.close-btn');
const overlay9 = new Overlay('overlay-9', '[data-overlay="overlay-9"]', '.close-btn');
const overlay10 = new Overlay('overlay-10', '[data-overlay="overlay-10"]', '.close-btn');