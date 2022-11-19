const tablePagosIniciales = $('#pagos-iniciales');
const montoPagoInicial = $('#monto');
const conceptoPagoInicial = $('#concepto');
const desembolsoPagoInicial = $('#desembolso');
let pagosIniciales = [];

function agregarPagoInicial() {
    console.log(montoPagoInicial.val());
    if (!montoPagoInicial.val()) {
        return;
    }

    let newPago = {
        "monto": parseFloat(montoPagoInicial.val()).toFixed(2),
        "concepto": conceptoPagoInicial.val(),
        "desembolso": desembolsoPagoInicial.val()
    }
    pagosIniciales.push(newPago);
    let index = pagosIniciales.length - 1;
    tablePagosIniciales.append(`<tr id="pago-inicial-${index}">
                                    <td>${newPago.monto}</td>
                                    <td>${newPago.concepto}</td>
                                    <td>${newPago.desembolso}</td>
                                    <td><button onclick="eliminarPagoInicial(${index})" type="button" class="btn btn-primary"><i class="bi bi-trash"></i></button></td>
                                </tr>`);
    console.log(pagosIniciales);

    montoPagoInicial.val('');
    conceptoPagoInicial.val(conceptoPagoInicial.children("option").eq(0).val());
    desembolsoPagoInicial.val(desembolsoPagoInicial.children("option:first").eq(0).val());
}

function eliminarPagoInicial(index) {
    pagosIniciales.splice(index, 1);
    $(`#pago-inicial-${index}`).remove();
    console.log(pagosIniciales);
}

const tablePagosPeriodo = $('#pagos-periodo');
const montoPagoPeriodo = $('#monto-por-periodo');
const conceptoPagoPeriodo = $('#concepto-por-periodo');
let pagosPorPeriodo = [];

function agregarPagoPorPeriodo() {
    if (!montoPagoPeriodo.val()) {
        return;
    }

    let newPago = {
        "monto": parseFloat(montoPagoPeriodo.val()).toFixed(2),
        "concepto": conceptoPagoPeriodo.val()
    }

    pagosPorPeriodo.push(newPago);
    let index = pagosPorPeriodo.length - 1;
    tablePagosPeriodo.append(`<tr id="pago-periodo-${index}">
                                    <td>${newPago.monto}</td>
                                    <td>${newPago.concepto}</td>
                                    <td><button onclick="eliminarPagoPeriodo(${index})" type="button" class="btn btn-primary"><i class="bi bi-trash"></i></button></td>
                                </tr>`);

    montoPagoPeriodo.val('');
    conceptoPagoPeriodo.val(conceptoPagoPeriodo.children('option').eq(0).val());
    console.log(pagosPorPeriodo);
}

function eliminarPagoPeriodo(index) {
    pagosPorPeriodo.splice(index, 1);
    $(`#pago-periodo-${index}`).remove();
    console.log(pagosPorPeriodo);
}
