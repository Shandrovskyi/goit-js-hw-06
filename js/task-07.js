const changeControl = document.getElementById("font-size-control");
const text = document.getElementById("text");



changeControl.addEventListener("input",   ()=> {

    text.style.fontSize = `${changeControl.value}px`;
    console.log(text.style.fontSize)

});