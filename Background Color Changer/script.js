const changerBtn = document.querySelector(".color-changer");

changerBtn.addEventListener("click", function changeColor() {

    let rgbValue1 = Math.floor(Math.random() * 255 + 1);
    let rgbValue2 = Math.floor(Math.random() * 255 + 1);
    let rgbValue3 = Math.floor(Math.random() * 255 + 1);
    
    document.body.style.backgroundColor = `rgb(${rgbValue1}, ${rgbValue2}, ${rgbValue3})`;

})