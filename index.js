document.getElementById("submit-button").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const country = document.getElementById("country").value;
  const city = document.getElementById("city").value;
  const zip = document.getElementById("zip").value;

  const isValid =
    email.length > 0 && country.length > 0 && city.length > 0 && zip.length > 0;

  if (isValid) {
    document.getElementById("sent").classList.replace("sent", "show-sent");
    setTimeout(() => {
      document.getElementById("sent").classList.replace("show-sent", "sent");
    }, 3000);
  }
});
