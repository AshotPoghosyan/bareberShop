const spinner = () => {
  setTimeout(() => {
    const spinnerElement = document.querySelector("#spinner");
    if (spinnerElement) {
      spinnerElement.classList.remove("show");
    }
  }, 1);
};
spinner();

function makePhoneCall() {
  const phoneNumber = "+37498494648";

  if (confirm("Do you want to call " + phoneNumber + "?")) {
    window.location.href = "tel:" + phoneNumber;
  }
}

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href").substr(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        behavior: "smooth",
        top: targetElement.offsetTop - 100,
      });
    }
  });
});
