const form = document.querySelector(".notifyForm");
const submitBtn = document.querySelector(".submitBtn");
const confirmItem = document.querySelector(".confirmation");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();

  const valueForm = form.value;

  if (/^[^\s@]+@[^\s@]+\.\S+/.test(valueForm)) {
    confirmItem.style.background = "green";
    confirmItem.style.display = "block";
    confirmItem.innerHTML = "Your email address saved! Thank you!";
  } else {
    confirmItem.style.background = "#b60c02";
    confirmItem.style.display = "block";
    confirmItem.innerHTML = "Invalid email address!";
  }
});

confirmItem.addEventListener("click", (e) => {
  confirmItem.style.display = "none";
});
