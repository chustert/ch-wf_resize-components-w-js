window.addEventListener("load", () => {
  console.log("View height on load:", window.innerHeight);
  console.log("View width on load:", window.innerWidth);
});

window.addEventListener("resize", () => {
  console.log("View height on resize:", window.innerHeight);
  console.log("View width on resize:", window.innerWidth);
});