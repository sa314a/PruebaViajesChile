// creamos una instancia del objeto modal para usar el metodo show de este.
const myModal = new bootstrap.Modal(document.getElementById("modal"));

//Selección de Formularios
const forms = document.querySelectorAll(".needs-validation");

//usamos la validacion por defecto de HTML5 y en caso de que el formulario sea válido, se muestra un modal y se resetea el formulario a su estado inicial
Array.from(forms).forEach((form) => {
  form.addEventListener(
    "submit",
    (event) => {
      event.preventDefault();
      if (!form.checkValidity()) {
        event.stopPropagation();
      } else {
        myModal.show();
        form.reset();
      }
    },
    false
  );
});
