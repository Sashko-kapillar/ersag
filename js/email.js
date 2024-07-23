(function () {
  emailjs.init("YOUR_USER_ID"); // Замініть на ваш User ID
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    emailjs.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", this).then(
      function () {
        document.getElementById("response").innerText =
          "Повідомлення успішно відправлено!";
      },
      function (error) {
        document.getElementById("response").innerText =
          "Помилка при відправленні: " + JSON.stringify(error);
      }
    );
  });
