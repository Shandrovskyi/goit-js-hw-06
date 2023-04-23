const changeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");


const onStartFontSize = changeControl.value;
text.style.fontSize = `${onStartFontSize}px`;


changeControl.addEventListener("input", () => {

    text.style.fontSize = `${changeControl.value}px`;
    console.log(text.style.fontSize)

});