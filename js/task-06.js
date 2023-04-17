


const inputElement = document.getElementById("validation-input");

inputElement.addEventListener( "blur", () => {
 
     const properLength = parseInt(inputElement.getAttribute("data-length"));
     const actualeLength = inputElement.value.length;


     if(actualeLength === properLength){
        inputElement.classList.add('valid');
        inputElement.classList.remove('invalid');
     } else {
        inputElement.classList.add('invalid');
        inputElement.classList.remove('valid');
     }

});