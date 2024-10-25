(() => {
  const menu = {
    burgers: [
      {
        name: "super burger",
        img: "https://ichef.bbci.co.uk/food/ic/food_16x9_832/recipes/black_and_blue_burger_95881_16x9.jpg",
        price: 100,
      },
      {
        name: "pro burger",
        img: "https://images.immediate.co.uk/production/volatile/sites/30/2013/05/Cheeseburger-3d7c922.jpg",
        price: 150,
      },
      {
        name: "extra burger",
        img: "https://insanelygoodrecipes.com/wp-content/uploads/2020/02/Burger-and-Fries.jpg",
        price: 180,
      },
    ],
    pizzas: [
      {
        name: "italian pizza",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1a/7b/99/6f/pizzas-de-ate-40cm-com.jpg",
        price: 300,
      },
      {
        name: "meat pizza",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/1d/74/13/63/pizzas-garage-medellin.jpg",
        price: 400,
      },
    ],
    drinks: [
      {
        name: "pivo",
        img: "https://media-cdn.tripadvisor.com/media/photo-s/11/b9/6d/b0/nase-rezane-pivo.jpg",
        price: 500,
      },
      {
        name: "vino",
        img: "https://www.tastingtable.com/img/gallery/the-best-way-to-drink-chilled-red-wine/l-intro-1660412521.jpg",
        price: 1000,
      },
      {
        name: "Vodka",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4zJnVB3ClNwB4qV_mSiepqNfI6eQaidjLyw&usqp=CAU",
        price: 2000,
      },
      {
        name: "tequila",
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/15-09-26-RalfR-WLC-0244.jpg/220px-15-09-26-RalfR-WLC-0244.jpg",
        price: 3000,
      },
    ],
  };

  const generateAllItems = (menu) => {
    return Object.entries(menu).reduce((acc, [category, products]) => {
      const productsWithCategory = products.map((el) => ({
        ...el,
        category,
      }));
      return [...acc, ...productsWithCategory];
    }, []);
  };
  const allItemsWithCategory = generateAllItems(menu);

  const generateUniqueCategories = (allItemsWithCategory) => {
    return allItemsWithCategory.reduce(
      (acc, rec) => {
        if (!acc.includes(rec.category)) {
          return [...acc, rec.category];
        }
        return acc;
      },
      ["all menu"]
    );
  };
  const uniqueCategories = generateUniqueCategories(allItemsWithCategory);

  // transform
  const getCategoryProducts = (allMenu, category) => {
    if (category === "all menu") {
      return allMenu;
    }
    return allMenu.filter((el) => el.category === category);
  };
  // transform

  // dom queries
  const output = document.querySelector(".outputSelect");
  const categorySelect = document.querySelector(".categorySelect");
  const search = document.querySelector(".form input");
  // dom queries

  //List UI render
  const renderProducts = (data) => {
    output.innerHTML = "";

    data.forEach((el) => {
      const box = document.createElement("div");
      const img = document.createElement("img");
      const title = document.createElement("p");
      const price = document.createElement("p");

      img.src = el.img;
      title.textContent = el.name;
      price.textContent = el.price;

      box.append(img, title, price);
      output.append(box);
    });
  };
  renderProducts(allItemsWithCategory);
  //List UI render

  // Select UI render and event
  const renderSelectOptions = () => {
    uniqueCategories.forEach((category) => {
      const option = document.createElement("option");
      option.value = category;
      option.textContent = category;

      categorySelect.append(option);
    });

    categorySelect.addEventListener("change", () => {
      search.value = "";
      const selectedCategory = categorySelect.value;

      const result = getCategoryProducts(
        allItemsWithCategory,
        selectedCategory
      );
      renderProducts(result);
    });
  };
  renderSelectOptions();
  // Select UI render and event

  const form = document.querySelector(".form");
  const clear = document.querySelector(".clear");

  const searchForm = () => {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const result = allItemsWithCategory.filter((el) =>
        el.name.toLowerCase().includes(search.value.toLowerCase())
      );

      if (result.length === 0) {
        output.innerHTML = "";
        const message = document.createElement("p");
        message.textContent = "Продуктов в базе данных нет";
        output.append(message);
        return;
      }

      if (search.value.trim() === "") {
        alert("Введите запрос для поиска!");
        return;
      }

      renderProducts(result);
    });

    clear.addEventListener("click", () => {
      search.value = "";
    });
  };
  searchForm();

  // dynamic search
  const dynamicSearch = () => {
    search.addEventListener("input", () => {
      const filteredByCategory = getCategoryProducts(
        allItemsWithCategory,
        categorySelect.value
      );

      const result = filteredByCategory.filter((el) =>
        el.name.toLowerCase().includes(search.value.toLowerCase())
      );

      renderProducts(result);
    });
  };
  dynamicSearch();
  // dynamic search
})();
