document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Aquí solo mostramos un mensaje por ahora.
  if (email && password) {
    alert(`Bienvenido, ${email}`);
    // Redirigir a otra página o continuar el flujo...
  } else {
    alert("Por favor completa todos los campos.");
  }
});
