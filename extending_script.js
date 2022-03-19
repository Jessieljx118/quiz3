window.onload = () => {
  render();
};//load the Places

const models = [
  {
    url: './assets/myModel/scene.gltf',
    scale: '0.5 0.5 0.5',
    rotation: '0 250 0'
  },//creat a model
];

let modelIndex = 0;//add model position
const setModel = (model, entity) => {
  if (model.position) {
    entity.setAttribute('position', model.position);
  }

  entity.setAttribute('gltf-model', model.url);
};

function render() {
  const scene = document.querySelector('a-scene');//In order to find the object a-scene in the index.html 

  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    const model = document.createElement('a-entity');//add model gps position
    model.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude};`);

    setModel(models[modelIndex], model);

    model.setAttribute('animation-mixer', '');

    scene.appendChild(model);
  });
}
