function atualizarContadores() {
    document.getElementById("count-dev").innerText =
        document.getElementById("dev").children.length;

    document.getElementById("count-teste").innerText =
        document.getElementById("teste").children.length;

    document.getElementById("count-aprovado").innerText =
        document.getElementById("aprovado").children.length;
}

function salvarDados() {
    const dados = {
        dev: document.getElementById("dev").innerHTML,
        teste: document.getElementById("teste").innerHTML,
        aprovado: document.getElementById("aprovado").innerHTML
    };
    localStorage.setItem("kanban", JSON.stringify(dados));
    atualizarContadores();
}

function carregarDados() {
@@ -15,6 +27,8 @@ function carregarDados() {
        document.getElementById("teste").innerHTML = dados.teste;
        document.getElementById("aprovado").innerHTML = dados.aprovado;
    }

    atualizarContadores();
}

window.onload = carregarDados;
