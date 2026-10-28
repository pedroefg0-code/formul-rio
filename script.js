const URL_PLANILHA = "https://script.google.com/macros/s/AKfycbxsox0wfv1zSQTdN4dXDQ4h7v2zMNhbXqWbfQHm40em1O9lJLdWpea7HJc1ODujZdjeSg/exec";
const form = document.getElementById("formulario");
const aviso = document.getElementById("aviso");

form.addEventListener("submit", function (evento) {
    evento.preventDefault();

    aviso.textContent = "Enviando...";
    aviso.style.color = "#1976d2";

    fetch(URL_PLANILHA, {
        method: "POST",
        mode: "no-cors",
        body: new FormData(form)
    })

    .then(function () {
        aviso.textContent = "Enviado com sucesso!";
        aviso.style.color = "#1976d2";
        form.reset();
    })

    .catch(function () {
        aviso.textContent = "Erro ao enviar. Tente de novo.";
        aviso.style.color = "#d32f2f";
    });
});
