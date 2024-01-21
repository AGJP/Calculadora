
// Variáveis das Teclas da calculadora
// com evento de click
var num0 = window.document.getElementById("tecla0")
num0.addEventListener("click", on0)
var num1 = window.document.getElementById("tecla1")
num1.addEventListener("click", on1)
var num2 = window.document.getElementById("tecla2")
num2.addEventListener("click", on2)
var num3 = window.document.getElementById("tecla3")
num3.addEventListener("click", on3)
var num4 = window.document.getElementById("tecla4")
num4.addEventListener("click", on4)
var num5 = window.document.getElementById("tecla5")
num5.addEventListener("click", on5)
var num6 = window.document.getElementById("tecla6")
num6.addEventListener("click", on6)
var num7 = window.document.getElementById("tecla7")
num7.addEventListener("click", on7)
var num8 = window.document.getElementById("tecla8")
num8.addEventListener("click", on8)
var num9 = window.document.getElementById("tecla9")
num9.addEventListener("click", on9) 
var tc_limpar = window.document.getElementById("limpar")
tc_limpar.addEventListener("click", limpar)
var tc_negar = window.document.getElementById("negar")
tc_negar.addEventListener("click", negar) 
var tc_porcentagem = window.document.getElementById("porcentagem")
tc_porcentagem.addEventListener("click", porcentagem)
var tc_dividir = window.document.getElementById("tecla_dividir")
tc_dividir.addEventListener("click", dividir)
var tc_multiplicar = window.document.getElementById("tecla_multiplicar")
tc_multiplicar.addEventListener("click", multiplicar)
var tc_subtrair = window.document.getElementById("tecla_subtrair")
tc_subtrair.addEventListener("click", subtrair) 
var tc_somar = window.document.getElementById("tecla_somar")
tc_somar.addEventListener("click", somar) 
var tc_resultado = window.document.getElementById("tecla_resultado")
tc_resultado.addEventListener("click", resultado)
var tc_ponto = window.document.getElementById("tecla_ponto")
tc_ponto.addEventListener("click", ponto)

// Funcões das teclas numéricas com os valores 
// correspondentes validados
function on0() {
    var tela = window.document.getElementById("tela")
    tela.innerText += num0.value
}
function on1() {
    var tela = window.document.getElementById("tela")
    tela.innerText += num1.value
}
function on2() {
    var tela = window.document.getElementById("tela")
    tela.innerText += num2.value
}
function on3() {
    var tela = window.document.getElementById("tela")
    tela.innerText += num3.value
}
function on4() {
    var tela = window.document.getElementById("tela")
    tela.innerText += num4.value
}
function on5() {
    var tela = window.document.getElementById("tela")
    tela.innerText += num5.value
}
function on6() {
    var tela = window.document.getElementById("tela")
    tela.innerText += num6.value
}
function on7() {
    var tela = window.document.getElementById("tela")
    tela.innerText += num7.value   
}
function on8() {
    var tela = window.document.getElementById("tela")
    tela.innerText += num8.value
}
function on9() {
    var tela = window.document.getElementById("tela")
    tela.innerText += num9.value
}
function limpar() {
    var tela = window.document.getElementById("tela")
    tela.innerText = ""
}
function negar() {
    var tela = window.document.getElementById("tela")
    tela.innerText = -(tela.innerText)
}
function porcentagem() {
    var tela = window.document.getElementById("tela")
    tela.innerText = (tela.innerText)/100 
}
function dividir() {
    var tela = window.document.getElementById("tela")
    if (tela.innerText == ""){
        return
    }else {
        tela.innerText += tc_dividir.value
    }
}
function multiplicar() {
    var tela = window.document.getElementById("tela")
    if (tela.innerText == ""){
        return
    }else {
        tela.innerText += tc_multiplicar.value
    }
}
function subtrair() {
    var tela = window.document.getElementById("tela")
    if (tela.innerText == ""){
        return
    }else {
        tela.innerText += tc_subtrair.value
    }
}
function somar() {
    var tela = window.document.getElementById("tela")
    if (tela.innerText == ""){
        return
    }else {
        tela.innerText += tc_somar.value
    }
}
function resultado() {
    var tela = window.document.getElementById("tela")
    if(tela.innerText.includes("+")){
        var expressao_soma1 = tela.innerText
        var extraido_soma1 = expressao_soma1.slice(0, expressao_soma1.indexOf("+"))
        // Extrai uma substring até do sinal de +
        var expressao_soma2 = tela.innerText
        var extraido_soma2 = expressao_soma2.slice(expressao_soma2.indexOf("+")+1)
        // Extrai uma substring a partir do sinal de +
        tela.innerText = Number(extraido_soma1) + Number(extraido_soma2)
    } else if (tela.innerText.includes("x")){
        var expressao_vezes1 = tela.innerText
        var extraido_vezes1 = expressao_vezes1.slice(0, expressao_vezes1.indexOf("x"))
        // Extrai uma substring até do sinal de +
        var expressao_vezes2 = tela.innerText
        var extraido_vezes2 = expressao_vezes2.slice(expressao_vezes2.indexOf("x")+1)
        // Extrai uma substring a partir do sinal de +
        tela.innerText = Number(extraido_vezes1) * Number(extraido_vezes2)
    } else if (tela.innerText.includes("÷")){
        var expressao_divisao1 = tela.innerText
        var extraido_divisao1 = expressao_divisao1.slice(0, expressao_divisao1.indexOf("÷"))
        // Extrai uma substring até do sinal de +
        var expressao_divisao2 = tela.innerText
        var extraido_divisao2 = expressao_divisao2.slice(expressao_divisao2.indexOf("÷")+1)
        // Extrai uma substring a partir do sinal de +
        tela.innerText = Number(extraido_divisao1) / Number(extraido_divisao2)
    } else if (tela.innerText.includes("-")){
        var expressao_subtrair1 = tela.innerText
        var extraido_subtrair1 = expressao_subtrair1.slice(0, expressao_subtrair1.indexOf("-"))
        // Extrai uma substring até do sinal de +
        var expressao_subtrair2 = tela.innerText
        var extraido_subtrair2 = expressao_subtrair2.slice(expressao_subtrair2.indexOf("-")+1)
        // Extrai uma substring a partir do sinal de +
        tela.innerText = Number(extraido_subtrair1) - Number(extraido_subtrair2)
    }
}
function ponto () {
    var tela = window.document.getElementById("tela")
    if (tela.innerText.includes(",")){
        return
    }else if (tela.innerText != ""){
        tela.innerText += tc_ponto.value.replace(".", ",")
    } else if (tela.innerText == ""){
        tela.innerText += num0.value + tc_ponto.value.replace(".", ",")
    }
}