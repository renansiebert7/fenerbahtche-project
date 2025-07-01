const form = document.querySelector(".form-camisas")
const mascara = document.querySelector(".mascara-formulario")


function cliqueiNoBotao() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function fecharFormulario() {
    form.style.left = "-350px"
    form.style.transform = "translateX(0%)"
    mascara.style.visibility = "hidden";
}
