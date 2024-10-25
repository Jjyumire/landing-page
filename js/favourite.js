(() => {
  const images = [
    {
      name: "Margarita",
      imageUrl:
        "https://www.thecocktaildb.com/images/media/drink/5noda61589575158.jpg",
    },
    {
      name: "Blue Lagoon",
      imageUrl:
        "https://www.thecocktaildb.com/images/media/drink/5wm4zo1582579154.jpg",
    },
    {
      name: "Mojito",
      imageUrl:
        "https://www.thecocktaildb.com/images/media/drink/rxtqps1478251029.jpg",
    },
    {
      name: "Tequila Sunrise",
      imageUrl:
        "https://www.thecocktaildb.com/images/media/drink/quqyqp1480879103.jpg",
    },
    {
      name: "Mai Tai",
      imageUrl:
        "https://www.thecocktaildb.com/images/media/drink/twyrrp1439907470.jpg",
    },
  ];

  const output = document.querySelector(".mini-images");

  images.forEach((el) => {
    const images = document.createElement("img");

    images.className = "name";

    images.src = el.imageUrl;
    images.alt = el.name;

    images.addEventListener("click", () => {
      const large = document.querySelector(".large");
      large.src = el.imageUrl;
    });

    output.append(images);
  });
})();
