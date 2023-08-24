let sonucDOM = document.getElementById('textMessage')

function sayiNe(x) {
    sonucDOM.value += x
}

function sonuc() {
    let result = sonucDOM.value.toString()
    let sonucunkendisi = eval(result)
    sonucDOM.value = sonucunkendisi
}

function temizle() {
    sonucDOM.value = ""
}

function dot(s) {
    sonucDOM.value += s
}