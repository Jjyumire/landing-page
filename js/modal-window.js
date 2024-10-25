// modal elements
const open = document.querySelector(".open");
const modalBackdrop = document.querySelector(".modal-backdrop");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
// modal elements

// content elements
const apply = document.querySelector(".apply");
const inputGroup = document.querySelector(".modal-content");
const modalGreeting = document.querySelector(".modal-greeting");
const form = document.querySelector(".telegram-form");
const username = document.querySelector(".username");
const tel = document.querySelector(".tel");
// content elements

// global variable
let timeout;
// global variable

// modal events
const removeModalClasses = () => {
  modal.classList.remove("show-modal");
  modalBackdrop.classList.remove("show-modal-backdrop");
};

const checkContentClasses = () => {
  return (
    inputGroup.classList.contains("hide-content") &&
    modalGreeting.classList.contains("show-content")
  );
};

const removeContentClasses = () => {
  inputGroup.classList.remove("hide-content");
  modalGreeting.classList.remove("show-content");
};

const checkAndClearTimeout = () => {
  if (timeout) {
    clearTimeout(timeout);
    timeout = undefined;
  }
};

const clearFormFields = () => {
  username.value = "";
  tel.value = "";
};

open.addEventListener("click", () => {
  modal.classList.add("show-modal");
  modalBackdrop.classList.add("show-modal-backdrop");
  clearFormFields();
});

modalBackdrop.addEventListener("click", () => {
  removeModalClasses();

  if (checkContentClasses()) {
    removeContentClasses();
  }
  checkAndClearTimeout();
});

close.addEventListener("click", () => {
  removeModalClasses();
  if (checkContentClasses()) {
    removeContentClasses();
  }
  checkAndClearTimeout();
});

modal.addEventListener("click", (event) => {
  event.stopPropagation();
});
// modal events

// Telegram API configuration
const BOT_CONFIG = {
  TOKEN: "7905125815:AAGed3UadmIh7lQo5UEllW1XJ4IPUDkMCw8",
  CHATID: "-4599685267",
};
// Telegram API configuration

// content events
form.addEventListener("submit", (e) => {
  e.preventDefault();
  inputGroup.classList.add("hide-content");
  modalGreeting.classList.add("show-content");

  const telegramMessage = `Username: ${username.value}, telephone: ${tel.value}`;
  fetch(
    `https://api.telegram.org/bot${BOT_CONFIG.TOKEN}/sendMessage?chat_id=${BOT_CONFIG.CHATID}&text=${telegramMessage}`
  )
    .then((res) => res.json())
    .then((res) => {
      console.log(res);
      if (res.ok) {
        alert(
          `Сообщение: "${res.result.text}" успешно доставлено в группу "${res.result.chat.title}". Оператор вам перезвонит!`
        );
      } else {
        throw new Error(res.description);
      }
    })
    .catch((error) => alert(error));

    timeout = setTimeout(() => {
      removeModalClasses();
      removeContentClasses();
    }, 2000);
});
// content events