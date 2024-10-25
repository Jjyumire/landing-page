(() => {
  const dataRegular = [
    {
      title: "Our Story",
      info: "Founded in 2020, Le Chêne Doré was born from a dream to create an authentic French dining experience. Our name, which translates to “The Golden Oak,” symbolizes strength, tradition, and a deep connection to the earth. We believe that the best meals come from quality ingredients and time-honored techniques, passed down through generations.",
    },
    {
      title: "Our Philosophy",
      info: "At Le Chêne Doré, we are dedicated to sustainability and ethical sourcing. We work closely with local farmers and artisans to bring you the freshest ingredients, ensuring each dish reflects the season's bounty. Our menu is a celebration of classic French cuisine with a modern twist, offering both traditional favorites and innovative creations.",
    },
  ];

  const dataSelfClosed = [
    {
      title: "Our Team",
      info: "Our talented team, led by Executive Chef Julien Laurent, is passionate about delivering an exceptional dining experience. With years of experience in renowned kitchens around the world, Chef Julien infuses creativity and precision into every dish. Our attentive staff is committed to providing warm, personalized service that makes each visit memorable.",
    },
    {
      title: "Join Us",
      info: "We invite you to experience the essence of French dining at Le Chêne Doré. Whether it’s a romantic dinner for two, a special celebration, or a casual gathering with friends, we strive to create an atmosphere that feels like home. Come and savor the flavors of France in a setting that is as inviting as it is elegant.",
    },
  ];

  // Функция создания аккордеона
  const accordionCreator = (data, containerSelector) => {
    const accordion = document.querySelector(containerSelector);
    data.forEach((el) => {
      const accordionWrap = document.createElement("div");
      const accordionHeader = document.createElement("div");
      const accordionContent = document.createElement("div");

      const accordionHeaderText = document.createElement("p");
      const accordionContentText = document.createElement("p");
      const accordionHeaderArrow = document.createElement("img");

      accordionWrap.className = "accordion__wrap";
      accordionContent.className = "accordion__content";
      accordionHeader.className = "accordion__name";
      accordionHeaderArrow.className = "accordion__arrow";

      accordionHeaderArrow.src = "../photos/plus.png";
      accordionHeaderText.textContent = el.title;
      accordionContentText.textContent = el.info;

      accordionContent.append(accordionContentText);
      accordionHeader.append(accordionHeaderText, accordionHeaderArrow);
      accordionWrap.append(accordionHeader, accordionContent);
      accordion.append(accordionWrap);
    });
  };

  // Обычный аккордеон
  const regularAccordion = () => {
    const accordionHeader = document.querySelectorAll(
      ".accordion--regular .accordion__name"
    );
    accordionHeader.forEach((data) => {
      data.addEventListener("click", () => {
        data.parentElement.classList.toggle("accordion__wrap--active");
      });
    });
  };

  // Самозакрывающийся аккордеон
  const selfClosingAccordion = () => {
    const accordionHeader = document.querySelectorAll(
      ".accordion--self-closed .accordion__name"
    );
    const accordionWrap = document.querySelectorAll(
      ".accordion--self-closed .accordion__wrap"
    );

    accordionHeader.forEach((data, headerIndex) => {
      data.addEventListener("click", () => {
        accordionWrap.forEach((wrap, wrapIndex) => {
          if (headerIndex === wrapIndex) {
            wrap.classList.toggle("accordion__wrap--active");
          } else {
            wrap.classList.remove("accordion__wrap--active");
          }
        });
      });
    });
  };

  // Вызов функции для каждого аккордеона с разными данными
  accordionCreator(dataRegular, ".accordion--regular");
  accordionCreator(dataSelfClosed, ".accordion--self-closed");
  regularAccordion();
  selfClosingAccordion();
})();
