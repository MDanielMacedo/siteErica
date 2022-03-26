let time = 4000,
  currentImageIndex = 0,
  images = document.querySelectorAll('.slider img'),
  max = images.length;


function nextImage(){

  images[currentImageIndex].classList.remove('selected');

  currentImageIndex++;

  if(currentImageIndex >= max){
    currentImageIndex = 0;
  }

  images[currentImageIndex].classList.add('selected');
}

function start(){
  setInterval(() => {
  //troca de imagem
  nextImage();
  }, time)
}

window.addEventListener('load', start);

$(document).ready(function(){
  var botao = $('.dropdown-toggler');
  var btnDown = $('.dropdown');
  botao.on('click', function(event){
    btnDown.stop(true,true).slideToggle();
    event.stopPropagation();
  });
});


