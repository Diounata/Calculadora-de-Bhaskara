var resultado, valor, verificar_formularios, delta, resultado_1, resultado_2
resultado = document.querySelector('div.resultado')

function start() {
    // Atribuir valores de A, B e C
    valor = {
        a: document.querySelector('input.valor-a').value,
        b: document.querySelector('input.valor-b').value,
        c: document.querySelector('input.valor-c').value,
    }

    // Encontrar valor de delta e x' e x"
    delta = (valor.b ** 2) - (4 * valor.a * valor.c)
    resultado_1 = ((valor.b * -1) + Math.sqrt(delta)) / (2 * valor.a)
    resultado_2 = ((valor.b * -1) - Math.sqrt(delta)) / (2 * valor.a)

    verificar_formularios = 0

    // Verificar se os campos de formulário foram preenchidos corretamente
    for (pos in valor) {
        if (valor[pos].length == 0) {
            resultado.innerHTML = `
                <div class="alert alert-danger">
                    <svg xmlns="http://www.w3.org/2000/svg"
                         width="16"
                         height="16"
                         fill="currentColor"
                         class="bi bi-exclamation-triangle-fill"
                         viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                    </svg>

                    Os campos de formulário não foram preenchidos corretamente.
                </div>
            `
        } else {
            verificar_formularios++
        }

        if (verificar_formularios == 3) {
            // Adicionar o valor de delta na div resultado
            resultado.innerHTML = `
                    <p class="alert alert-primary p-1 my-2 mx-auto col-12 col-md-6 text-center rounded-pill">
                        Equação: ${valor.a}x² + ${valor.b}x + ${valor.c}
                    </p>

                    <p class="h5"> Descobrir delta </p>
                    <ol>
                        <li> &Delta; = ${valor.b}² - 4 &times; ${valor.a} &times; ${valor.c} </li>
                        <li> &Delta; = ${valor.b ** 2} - 4 &times; ${valor.a * valor.c} </li>
                        <li> &Delta; = ${valor.b ** 2} - ${valor.a * valor.c * 4} </li>
                        <li> &Delta; = ${delta} </li>
                    </ol>
                `

            if (delta < 0) {
                // Equação sem solução
                resultado.innerHTML += `
                    <div class="alert alert-danger py-1 px-2 my-1">
                        • Equação sem solução <br>
                        • Motivo: &Delta; < 0
                    </div>
                `

            } else {
                // Equação com solução
                resultado.innerHTML += `
                    <p class="alert alert-success py-1 px-2 my-1">
                        x' = ${resultado_1} <br>
                        x" = ${resultado_2}
                    </p>
                `
            }
        }
    }
}

// Resetar a calculadora
function resetar() {
    resultado.innerHTML = ``
}