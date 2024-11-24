const TOKEN = "7487071292:AAFq2ZIWows1V6JW7jWbYtQyEMEtVWJGW_k";
const CHAT_ID = "-1002428568696";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

document.getElementById("tg-message").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Oky");

  let message = `<b>Замовлення з сайту</b>\n`;
  message += `<b>Ім'я відправника: </b> ${this.name.value}\n`;
  message += `<b>Номер телефону: </b> ${this.phone.value}\n`;
  message += `<b>Текст повідомлення: </b> ${this.comment.value}`;

  axios
    .post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: "html",
      text: message,
    })
    .then((res) => {
      iziToast.success({
        title: "Успішно",
        message: "Ваше повідомлення відправлено!",
        position: "topCenter",
        color: "green",
      });
      console.log("enjoy");

      this.name.value = "";
      this.phone.value = "";
      this.comment.value = "";
    })
    .catch((err) => {
      iziToast.error({
        title: "Помилка",
        message: "Не вдалося відправити повідомлення!",
        position: "topCenter",
        color: "red",
      });
      console.warn(err);
    })
    .finally(() => {
      console.log("Finish");
    });
});
