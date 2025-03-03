export function ScrollHome() {
  const element = document.getElementById("buysection");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
