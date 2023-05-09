const elements = document.querySelectorAll('div.scroll-toggle_video-wrapper');

function setElementStyles() {
  if (window.innerHeight < 946 && window.innerHeight >= 801) {
    elements.forEach(element => {
      element.style.width = '80%';
      element.style.margin = 'auto';
    });
  } else if (window.innerHeight < 800 && window.innerHeight >= 721) {
    elements.forEach(element => {
      element.style.width = '60%';
      element.style.margin = 'auto';
    });
  } else if (window.innerHeight < 720 && window.innerHeight >= 651) {
    elements.forEach(element => {
      element.style.width = '45%';
      element.style.margin = 'auto';
    });
  } else if (window.innerHeight < 650) {
    elements.forEach(element => {
      element.style.width = '30%';
      element.style.margin = 'auto';
    });
  } else {
    elements.forEach(element => {
      element.style.width = '';
      element.style.margin = '';
    });
  }
}

window.addEventListener("load", () => {
  // console.log("View height on load:", window.innerHeight);
  // console.log("View width on load:", window.innerWidth);
  setElementStyles();
});

window.addEventListener("resize", () => {
  // console.log("View height on resize:", window.innerHeight);
  // console.log("View width on resize:", window.innerWidth);
  setElementStyles();
});