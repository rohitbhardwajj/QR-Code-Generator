let imagebox = document.querySelector(".imgbox");
let image = document.querySelector(".img");
let input = document.querySelector(".input");
let button = document.querySelector(".button");

button.addEventListener("click", () => {
    image.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + input.value;
});
