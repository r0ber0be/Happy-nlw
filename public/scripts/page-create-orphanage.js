// create map 
const map = L.map('mapid').setView([-27.2264143,-49.6444913], 15);

//create and add tilelayer
L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',).addTo(map);

// create icon
const icon = L.icon({
  iconUrl: "/images/map-marker.svg",
  iconSize: [58, 68],
  iconAnchor: [29, 68]
});

let marker;

//create and add markers
map.on('click', (event) => {
  const lat = event.latlng.lat;
  const lng = event.latlng.lng;

  document.querySelector("[name=lat]").value = lat;
  document.querySelector("[name=lng]").value = lng;
  //remove icon
  marker && map.removeLayer(marker);

  //add icon layer
  marker = L.marker([lat, lng], { icon }).addTo(map);
})

//photos add
function addPhotoField() {
  //pegar o container de fotos #images
  const  container = document.querySelector('#images')
  //pegar o container para duplicar .new-image
  const fieldsContainer = document.querySelectorAll('.new-upload');
  //realizar o clone da última imagem adicionada
  const newFieldsContainer = fieldsContainer[fieldsContainer.length -1].cloneNode(true);
  
  //verificar se o campo esta vazio, se seim então não adicionar ao container de imagens
  const input = newFieldsContainer.children[0];

  if(input.value == "") {
    return
  }
  //limpar o campo antes de adicionar ao container de imagens
  input.value = "";
  //adicionar o clone ao container de #images
  container.appendChild(newFieldsContainer);
}

function deleteField(event) {
  const span = event.currentTarget;
  const fieldsContainer = document.querySelectorAll('.new-upload');

  if(fieldsContainer.length <= 1) {
    //Limpar o valor do campo
    span.parentNode.children[0].value = "";  
    return
  }

  //deletar o campo
  span.parentNode.remove();
}

//selecionar do sim e não
function toggleSelect(event) {
  //retirar a class .active dos botoes
  document.querySelectorAll('.button-select button')
  .forEach(button => button.classList.remove('active'))

  // colocar a class .active
  const button = event.currentTarget;
  button.classList.add('active');

  // atualizar o input hidden com o valor selecionado
  const input = document.querySelector('[name="open_on_weekends"]');
  //verificar se sim ou não
  input.value = button.dataset.value;
  //pegar o botão clicado 
}

//function validate(event) {
  //validar se lat e len estão preenchidos  
  //const needsLatAndLng = true;
  //if(needsLatAndLng) {
    //event.preventDefault()
    //alert("Selecione um ponto no mapa")
  //}
//}