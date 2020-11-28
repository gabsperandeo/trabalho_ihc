var global_aval_banha = 0;
var global_aval_banha_cont = 0;

function adicionarTexto() {
    var texto = document.getElementById('textbox').value
    var aval = document.getElementById('aval').value
    if (texto.localeCompare("") == 0 || aval == "") {
        alert("Erro! Preencha o comentario e deixe sua avaliação.")
    }
    else {
        var nome = document.getElementById('nome').value
        var recebe_comentarios = document.getElementById('recebe_comentarios')
        var data = new Date()
        const option = {
            year: 'numeric',
            month: 'long',
            weekday: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: 'numeric',
            second: 'numeric',
        }
        if (nome.localeCompare("") == 0) {
            nome = "Anônimo/a"
        }
        data = (data.toLocaleDateString('pt-br', option)).italics()
        var conteudo = document.createElement('div')
        conteudo.innerHTML = "<b> Comentário</b>: " + texto + "<br /> <b>Escrito por</b>: " + nome + "<br />" +
                             "<b>Avaliação do usuário</b>: " + aval + "<br />" + data + "<br /><br />"
        conteudo.style = "margin-left: 5%;"
        recebe_comentarios.appendChild(conteudo)
        global_aval_banha += parseInt(aval)
        global_aval_banha_cont++
        var media = global_aval_banha / global_aval_banha_cont
        document.getElementById("candidato").innerHTML = "<b>Avaliação geral</b>: " + media.toFixed(1) +
                                                     "<br /><b>Total de avaliações</b>: " + global_aval_banha_cont
    }
}

function changeNavigation(id) { document.getElementById('main').innerHTML = document.getElementById(id).innerHTML }
