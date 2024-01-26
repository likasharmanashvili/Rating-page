const hoverContainer = document.querySelector (".hoverContainer")
const button= document.querySelector (".button") 
const maincontainer = document.querySelector (".maincontainer")
const rating = document.querySelector(".rating");
const batn = document.querySelectorAll(".batn");



button.addEventListener("click", () => {
    maincontainer.style.display = "none";
    hoverContainer.style.display = "block";
  });
  batn.forEach((rate) => {
    rate.addEventListener("click", () => {
      rating.innerHTML = rate.innerHTML;
    });
  });
