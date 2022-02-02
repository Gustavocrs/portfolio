function Limpar() {
    document.getElementById("nomeForm").value = "";
    document.getElementById("mailForm").value = "";
    document.getElementById("msgForm").value = "";
}

function Enviar() {

    var nome = document.getElementById("nomeForm");
    var email = document.getElementById("mailForm");
    var msg = document.getElementById("msgForm");

    if (nome.value == "" | email.value == "" | msg.value == "") {
        alert('Todos os campos são obrigatórios');
    }
    if (nome.value !== "" && email.value !== "" && msg.value !== "") {
        alert('Obrigado sr(a) ' + nome.value + ' sua mensagem foi encaminhados com sucesso');
        Limpar();
    }
}

//ABRIR E FECHAR O MENU RESPONSIVO
const menu = document.querySelector(".menu");
const btnMenuOpen = document.querySelector(".btnMenu_open");
const btnMenuClose = document.querySelector(".btnMenu_close");

btnMenuOpen.addEventListener('click', () => menu.classList.add("menu_open"));
btnMenuClose.addEventListener('click', () => menu.classList.remove("menu_open"));
menu.addEventListener('click', () => menu.classList.remove("menu_open"));