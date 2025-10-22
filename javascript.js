// //  SEND MESSAGE

const form = document.getElementById("contactForm");
const popup = document.getElementById("successPopup");
const closePopup = document.getElementById("closePopup");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  popup.style.display = "flex"; // ✅ show popup
  form.reset();
});

closePopup.addEventListener("click", function () {
  popup.style.display = "none"; // ✅ close popup
});
