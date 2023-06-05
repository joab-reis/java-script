function contar() {
    let ini = window.document.getElementById("txti")
    let fim = window.document.getElementById("txtf")
    let passo = window.document.getElementById("txtp")
    let res = window.document.getElementById("res") 

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        res.innerHTML = "impossivel contar, preencha todos os dados.!"
    } else {
        res.innerHTML = "contando: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            p = 1
        }
        if (i < f) {
            //contagem crescente
            for (let c = i; c <= f; c = c + p) {
                res.innerHTML += c
            }
        } else {
            for (let c = i; c >= f; c = c - p) {
                res.innerHTML += c
            }
        }
    }
}