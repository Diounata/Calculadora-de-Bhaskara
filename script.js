let resultado = document.querySelector('div.resultado')

function start() {
    var valores = [
        document.querySelector('input.valor-a').value,
        document.querySelector('input.valor-b').value,
        document.querySelector('input.valor-c').value
    ]

    var verificar_formularios = 0

    var delta = (valores[1] ** 2) - (4 * valores[0] * valores[2])
    var resultado1 = ((valores[1] * -1) + Math.sqrt(delta)) / (2 * valores[0])
    var resultado2 = ((valores[1] * -1) - Math.sqrt(delta)) / (2 * valores[0])

    for (pos in valores) {
        if (valores[pos].length == 0) {
            resultado.innerHTML = `
                <div class="alert alert-danger"> 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16"> <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>
                    Os campos de formulário não foram totalmente preenchidos.
                </div>
            `
        } else {
            verificar_formularios++
        }

        if (verificar_formularios == 3) {
            resultado.innerHTML = `
                <p class="alert alert-primary p-1 my-2 mx-auto col-12 col-md-6 text-center rounded-pill">
                    Equação: ${valores[0]}x² + ${valores[1]}x + ${valores[2]}
                </p>

                <p class="h5"> Descobrir delta </p>
                <ol>
                 <li> &Delta; = ${valores[1]}² - 4 &times; ${valores[0]} &times; ${valores[2]} </li>
                 <li> &Delta; = ${valores[1] ** 2} - 4 &times; ${valores[0] * valores[2]} </li>
                 <li> &Delta; = ${valores[1] ** 2} - ${valores[0] * valores[2] * 4} </li>
                 <li> &Delta; = ${delta} </li>
                </ol>
                `

            if (delta < 0) {
                resultado.innerHTML += `
                    <div class="alert alert-danger py-1 px-2 my-1">
                        • Equação sem solução <br>
                        • Motivo: &Delta; < 0
                    </div>
                `
            } else {
                resultado.innerHTML += `
                <p class="alert alert-success py-1 px-2 my-1">
                    x' = ${resultado1} <br>
                    x" = ${resultado2}
                </p>
                `
            }
        }
    }
}

function resetar() {
    resultado.innerHTML = ``
}