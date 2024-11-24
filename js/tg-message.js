const TOKEN = "7387360375:AAHk8V7iqtSG7ZQrFcR3KquXvmB5xUcGNAw";
const CHAT_ID = "-1002343393160";
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
      this.name.value = "";
      this.phone.value = "";
      this.comment.value = "";
      iziToast.info({
        message: "Повідомлення успішно відправилося...",
        position: "topCenter",
        color: "green",
      });
    })
    .catch((err) => {
      console.warn(err);
    })
    .finally(() => {
      console.log("Finish");
    });
});
