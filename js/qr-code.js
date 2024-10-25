(() => {
  const websiteUrl = "http://127.0.0.1:5500/index.html";
  const qrcode = new QRCode(document.querySelector(".qrcode"), {
    text: websiteUrl,
    width: 200,
    height: 200,
  });
})();
