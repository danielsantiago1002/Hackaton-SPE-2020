
// Usando la libreria Papa Parse para formatear el formato csv y usarlo como un objeto JS
// se subieron los datos a un github y se distribuyen mediante un CDN 

Papa.parse("https://rawcdn.githack.com/danielsantiago1002/Prueba-datos-ANH-Hackaton-SPE/32fd2100ee1b4a08321190496dc0d072cbe8e023/DF/DF final.csv", {
	download: true,
	complete: function(parsed) {

        datos(parsed)

        // console.log(results);
        {
            $("#output").pivotUI(parsed.data, {
                rows: ['Departamento', 'Municipio'],
                cols: ['Año'],
                vals: ['Aceite'],
                aggregatorName: "Sum",
                rendererName: "Heatmap",
                derivedAttributes: {
                    "Año": $.pivotUtilities.derivers.dateFormat("Date", "%y", true),
                },
                renderers: $.extend(
                    $.pivotUtilities.renderers,
                    $.pivotUtilities.plotly_renderers,

                )
            } ) }
	}
});

// Mostrando en la consola el resultado de la llamada al sitio web

function datos(parsed){
    console.log(parsed)

}

