function selectOption(units) {
  document.querySelectorAll(".units-option").forEach((option) => {
    option.classList.remove("selected");
  });

  document
    .querySelectorAll(".units-option")
    [units - 1].classList.add("selected");

  // Updatess total
  const prices = [10, 18, 24];
  document.querySelector(".total").textContent = `Total: $${
    prices[units - 1]
  }.00 USD`;
}
//just provided on alert
function addtocart() {
  alert("Item Added Sucessfully");
}
