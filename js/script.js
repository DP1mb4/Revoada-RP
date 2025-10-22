// newsScroll
var newsCards = document.querySelector('#newsCards')
var intro = document.querySelector('.intro-content')
var showNews = 30
var showIntro = 10

// window.addEventListener('scroll', function(){
//   var scrowPosition = window.scrollY

//   if(scrowPosition > showNews){
//     newsCards.classList.remove('hide')
//     newsButtons.classList.remove('hide')
//   }

//   if(scrowPosition > showIntro){
//     intro.classList.remove('hide')
//   }
// })

//newsCards
var nextBtn = document.querySelectorAll('.news-btn-card')

nextBtn.forEach(button => {
  button.addEventListener('click', function(event) {
    
    nextBtn.forEach(btn => {
      btn.style.boxShadow = ""
    });

    var clickedButton = event.target;
    clickedButton.style.boxShadow = "0 4px 10px var(--primary_color)"

    var active = document.querySelector('.active')
    var next = 'card-' + this.getAttribute('data-selection')
    
    active.classList.remove('active')
    document.getElementById(next).classList.add('active')
  })
})


// loadScreen
// function scrollDeactivate() {
//   window.scrollTo({top: 0})
//   document.body.style.overflow = 'hidden'
// }
// scrollDeactivate()

// function scrollActivate() {
//   document.body.style.overflow = 'auto'
// }

// function loadAction() {
//   var loadContainer = document.querySelector('.load-container')
//   loadContainer.style.animation = 'hide-load 10s ease-in-out';
//   scrollActivate()

//   loadContainer.addEventListener('animationend', function() {
//     loadContainer.style.display ='none'
//   })
// }

// setTimeout(loadAction, 1500)

//vips

// Seleção dos elementos
var bronzeBtn = document.querySelector('.bronze-button');
var silverBtn = document.querySelector('.silver-button');
var goldBtn = document.querySelector('.gold-button');
var revoBtn = document.querySelector('.revo-button')
var bronzeVip = document.querySelector('#bronze'); // Container do VIP Bronze
var silverVip = document.querySelector('#silver'); // Container do VIP Silver
var goldVip = document.querySelector('#gold'); // Container do VIP Gold
var revoVip = document.querySelector('#revo'); // Container do VIP Revo
var closeBtn = document.querySelectorAll('.vip-close'); // Botões de fechamento

function vipShow(level) {
  var vipContainer = document.querySelector('.vip-description-container')
  vipContainer.style.zIndex = level
}

//Bronze
bronzeBtn.addEventListener('click', function() {
  vipShow(9)
  bronzeVip.classList.remove('hide')
})

//Silver
silverBtn.addEventListener('click', function() {
  vipShow(9)
  silverVip.classList.remove('hide')
})

//Gold
goldBtn.addEventListener('click', function() {
  vipShow(9)
  goldVip.classList.remove('hide')
})

//Revo
revoBtn.addEventListener('click', function() {
  vipShow(9)
  revoVip.classList.remove('hide')
})

closeBtn.forEach(button => {
  button.addEventListener('click', function() {
    bronzeVip.classList.add('hide')
    silverVip.classList.add('hide')
    revoVip.classList.add('hide')
    goldVip.classList.add('hide')
    vipShow(-1)
  })
})


//Suport

var suportBtn = document.querySelector('.form-button')
var suportForm = document.querySelector('.form-succes-container')
var suportLoad = document.querySelector('.load')
var suportMessage = document.querySelector('.suport-message')
var camps = document.querySelectorAll('.inp')


suportBtn.addEventListener('click', function() {
  formEvent()
  
  setTimeout(() => {succes()}, 2000)

  setTimeout(() => {formEnd(), resetInputs()}, 5000)
})

function formEvent() {
  suportForm.classList.remove('hide')
  window.scrollTo({top: 0, behavior: 'smooth'})
  document.body.style.overflow = 'hidden'
}

function succes() {
  suportLoad.classList.add('hide')
  suportMessage.classList.remove('hide')
}

function formEnd() {
  suportForm.classList.add('hide')
  suportLoad.classList.remove('hide')
  suportMessage.classList.add('hide')
  document.body.style.overflow = 'auto'
  camps.forEach(input => {
    input.value = ''
  })
}