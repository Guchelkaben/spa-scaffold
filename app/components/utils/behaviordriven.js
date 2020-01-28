const scrollToTop = (topPixel) => {
  if (window) {
    window.scrollTo({top: topPixel, behavior: 'smooth'});
  }
};

const scrollToDown = (downPixel) => {
  if (window) {
    window.scrollTo({top: downPixel, behavior: 'smooth'});
  }
};

export default {
  scrollToTop,
  scrollToDown
}
