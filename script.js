window.onload = () => {
     let places = staticLoadPlaces();
     renderPlaces(places); //load  the (Places) underneath renderPlaces  
};

function staticLoadPlaces() {//load latitude and longitude
    return [
        {
            name: 'MyModel',
            location: {
                lat: <your-latitude>, 
                lng: <your-longitude>, 
            }
        },
    ];
}

function renderPlaces(places) {
    let scene = document.querySelector('a-scene');//In order to find the object a-scene in the index.html  

    places.forEach((place) => {
        let latitude = place.location.lat;//Assign latitude to it
        let longitude = place.location.lng;//Assign longitude to it

        let model = document.createElement('a-entity'); //Create a Model object, create 'a-Entity' in document
        model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);//GPS-coordinates
        model.setAttribute('gltf-model', './assets/MyModel/scene.gltf');//add 3d model
        model.setAttribute('rotation', '0 180 0');
        model.setAttribute('animation-mixer', '');
        model.setAttribute('scale', '0.5 0.5 0.5');

        model.addEventListener('loaded', () => {
            window.dispatchEvent(new CustomEvent('gps-entity-place-loaded'))//load model
        });

        scene.appendChild(model);
    });
}