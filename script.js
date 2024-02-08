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
});