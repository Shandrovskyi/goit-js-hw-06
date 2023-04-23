// const loginForm = document.querySelector('.login-form');

// loginForm.addEventListener('submit', (event) => {
//   event.preventDefault(); 

//   const formData = new FormData(loginForm); 
//   const data = {}; 

//   for (let [name, value] of formData) {
//     if (!value) { 
//       alert('всі поля повинні бути заповнені'); 
//       return; 
//     }

//     data[name] = value; 
//   }

//   console.log(data); 
//   loginForm.reset(); 
// });


// ================================NEW=========================

const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const emailInput = form.elements.email;
  const passwordInput = form.elements.password;

  if (emailInput.value === '' || passwordInput.value === '') {
    alert('всі поля повинні бути заповнені');
    return;
  }

  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };

  console.log(formData);
  form.reset();
});
