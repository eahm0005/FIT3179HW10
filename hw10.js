var vg_1 = "2012_smoking_map.json";

vegaEmbed("#choropleth_map_smoking", vg_1).then(function(result) {
    // Access the Vega view instance https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);
