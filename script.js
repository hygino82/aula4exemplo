let txtEntrada = document.getElementById('valor-entrada');
let btnCalcular = document.getElementById('btn-calcular');
let btnLimpar = document.getElementById('btn-limpar');
let txtDesejos = document.getElementById('txt-desejos');
let txtNecessidades = document.getElementById('txt-necessidades');
let txtInvestimentos = document.getElementById('txt-investimentos');

function limparCampos() {
    txtEntrada.value = '';
    txtDesejos.value = '';
    txtNecessidades.value = '';
    txtInvestimentos.value = '';
}

function calcularValores() {
    const valorEntrada = Number(txtEntrada.value);
    const desejos = 0.3 * valorEntrada;
    const necessidades = 0.5 * valorEntrada;
    const investimentos = 0.2 * valorEntrada;

    txtInvestimentos.value = `${investimentos.toFixed(2)}`;
    txtNecessidades.value = `${necessidades.toFixed(2)}`;
    txtDesejos.value = `${desejos.toFixed(2)}`;
}

btnCalcular.addEventListener('click', calcularValores, false);

btnLimpar.addEventListener('click', limparCampos, false);