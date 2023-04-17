const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const formData = new FormData(loginForm); 
  const data = {}; 

  for (let [name, value] of formData) {
    if (!value) { 
      alert('всі поля повинні бути заповнені'); 
      return; 
    }

    data[name] = value; 
  }

  console.log(data); 
  loginForm.reset(); 
});
