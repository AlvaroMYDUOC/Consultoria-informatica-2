$("#buscar").click(function() {
    $.getJSON('https://mindicador.cl/api', function(data) {
        var indicadores = data;

        $("#uf").html('$' + indicadores.uf.valor + ' ' + indicadores.uf.nombre);
        $("#dolar").html('$' + indicadores.dolar.valor + ' ' + indicadores.dolar.nombre);

    });



});