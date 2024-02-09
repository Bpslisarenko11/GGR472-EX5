mapboxgl.accessToken = "pk.eyJ1Ijoic3BibGlzYXJlbmtvMTIiLCJhIjoiY2xzMjlodmljMGthcjJrbXRibnRwZ2d3eCJ9.gxylQolcBDuJTH_WfI6MrA";

const map = new mapboxgl.Map({
    container: "my-map", //map container ID
    style: "mapbox://styles/spblisarenko12/cls2a6ak501qx01qs4kfu5n97", //style URL
    center: [-79.41390704282365, 43.64777081498133], //starting position (lon, lat)
    zoom: 12 //starting zoom

});

map.on('load',() => {

    //Add a data source containing GeoJSON data
    map.addSource('uoft-data', {
        type: 'geojson',
        data: {
            "type": "FeatureCollection",
            "features": [
                {
                    "type": "Feature",
                    "properties": {
                        "name": "Sidney Smith Hall"
                    },
                    "geometry": {
                        "coordinates": [
                            -79.39865237301687,
                            43.662343395037766
                        ],
                        "type": "point"
                    }
                }
            ]
        }
    });

    map.addLayer({
        'id': 'uoft-pnt',
        'type': 'circle',
        'source': 'uoft-data',
        'paint': {
            'circle-radius': 6,
            'circle-colour': '#B4222'
        }
    });

    map.addSource("buildings-data", {
        type: "geojson",
        data: "https://bpslisarenko11.github.io/GGR472-EX5/buildings.geojson",
    
    });

    map.addLayer({
        "id": "buildings-point",
        "type": "circle",
        "source": "buildings-data",
        "paint": {
            "circle-radius": 5,
            "circle-colour": "#007cbf",

        }
    });

    map.addSource("toronto-census-tracts", {
        "type": "vector",
        "url": "https://studio.mapbox.com/tilesets/spblisarenko12.bi0wzc60"
    });

    map.addLayer({
        "id": "census-tract",
        "type": "fill",
        "source": "toronto-census-tracts",
        "paint": {
            "fill-color": "#888888",
            "fill-opacity": 0.4,
            "fill-outline-colour": "black",

        },
        "source-layer": "torontoct-43fpbe"

    })
        "uoft-buildings"
});