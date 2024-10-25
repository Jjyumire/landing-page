(() => {
  const imgUrl1 = [
    {
      URL: "https://res.cloudinary.com/du5jifpgg/image/upload/t_opengraph_image/Surcharge-APIDAE/restaurant-la-tour-d-argent.jpg",
    },
    {
      URL: "https://tourdargent.com/wp-content/uploads/2023/10/Tour_2-1-scaled.jpg",
    },
    {
      URL: "https://www.finediningexplorer.com/wp-content/uploads/IMG_2970-1.jpg",
    },
  ];

  const swiperWrapper1 = document.querySelector(".newSwaper1");

  imgUrl1.forEach((el) => {
    const swiper1 = document.createElement("div");

    swiper1.className = "swiper-slide";
    swiper1.style.backgroundImage = `url("${el.URL}")`;

    swiperWrapper1.append(swiper1);
  });

  const swiper1 = new Swiper(".swiper-1", {
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
})();

(() => {
  const imgUrl2 = [
    {
      URL: "https://i.pinimg.com/control/474x/2a/99/c9/2a99c9e29193471996f33f4717ab7d9d.jpg",
    },
    {
      URL: "https://i.pinimg.com/474x/8c/80/74/8c8074ec789434ebe88e811c4f4ea087.jpg",
    },
    {
      URL: "https://i.pinimg.com/474x/17/27/3f/17273fccfc4ff041e84a3e3f0d8af12a.jpg",
    },
    {
      URL: "https://i.pinimg.com/474x/db/04/23/db0423c9ae0eaef8c9d059c2d744f7dc.jpg",
    },
    {
      URL: "https://i.pinimg.com/474x/bd/b1/8e/bdb18e230097fec6b4aa229fc1532470.jpg",
    },
    {
      URL: "https://i.pinimg.com/control/474x/74/74/a2/7474a20e6a581b07b5959f5877a67ccb.jpg",
    },
    {
      URL: "https://i.pinimg.com/control/474x/a6/3a/1a/a63a1a5342714fd6764cad389f6b1c64.jpg",
    },
    {
      URL: "https://i.pinimg.com/control/474x/8e/ae/b2/8eaeb2ca8d02d7c1467efb156055d60a.jpg",
    },
    {
      URL: "https://i.pinimg.com/474x/60/1d/a1/601da1dcefc051bde6aaaa435cb30e49.jpg",
    },
    {
      URL: "https://i.pinimg.com/control/474x/5f/47/a4/5f47a4e0a3484b26b457fc39e6afb88b.jpg",
    },
  ];

  const swiperWrapper2 = document.querySelector(".newSwaper2");

  imgUrl2.forEach((el) => {
    const swiper2 = document.createElement("div");

    swiper2.className = "swiper-slide";
    swiper2.style.backgroundImage = `url("${el.URL}")`;

    swiperWrapper2.append(swiper2);
  });

  const swiper2 = new Swiper(".swiper-2", {
    loop: true,
    slidesPerView: 3,
    grid: {
      rows: 2,
    },
    spaceBetween: 70,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
})();

// const imgUrl = [
//   { URL: "./photos/Image.png" },
//   { URL: "./photos/Image (1).png" },
//   { URL: "./photos/Image (2).png" },
//   { URL: "./photos/Image (3).png" },
//   { URL: "./photos/Image (4).png" },
// ];

// const swiperWrapper1 = document.querySelector(".mainSwiper");

// imgUrl.forEach((el) => {
//   const swiper1 = document.createElement("div");

//   swiper1.className = "swiper-slide";
//   swiper1.style.backgroundImage = `url("${el.URL}")`;

//   swiperWrapper1.append(swiper1);
// });

// const swiper = new Swiper(".mySwiper", {
//   cssMode: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewheel: true,
//   keyboard: true,
// });
