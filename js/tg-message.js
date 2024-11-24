const TOKEN = "7387360375:AAHk8V7iqtSG7ZQrFcR3KquXvmB5xUcGNAw";
const CHAT_ID = "-1002343393160";

document.getElementById("tg-message").addEventListener("submit", function (e) {
  e.preventDefault();
  console.log("Oky");

  let message = `<b>Замовлення з сайту</b>\n`;
  message += `<b>Ім'я відправника: </b> ${this.name.value}\n`;
  message += `<b>Номер телефону: </b> ${this.phone.value}`;

  console.log(message);
});
