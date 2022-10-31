/* Case Sensitive = reconhce letras maiusculas e maiuculas1 */

let nome = window.document.getElementById('nome')
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')

let nomeOk = false
let emailOk = false
let assuntoOk = false

let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'
assunto.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.Value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido!'
        txtNome.style.color = 'red'
    } else {
        txtNome.innertHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}
function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') == -1) {   /* se ele retornar -1 é que NÃO existe o elemento dentro da string | caso retorne 1 quer dizer que existe.(dentro dos parenteses onde tem o @ pe tipo a "aba de pesquisa")*/
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'

    } else {
        txtEmail.innertHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}
function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length >=100) {
        txtAssunto.innerHTML = "Texto é muito grande, digite no máximo 100 caracteres!"
        txtAssunto.style.color = 'red'
        txtAssunto.style.color = 'Block'

    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulario corretamente antes de enviar')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal () {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
