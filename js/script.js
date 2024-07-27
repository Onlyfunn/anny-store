Fancybox.bind("[data-fancybox]", {
});

const anchors = document.querySelectorAll('.anchor')
if (anchors) {
   for (let anchor of anchors) {
      anchor.addEventListener('click', function (e) {
         e.preventDefault()

         const blockID = anchor.getAttribute('href').substr(1)

         document.getElementById(blockID).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
         })
      })
   }
}


const swiperTrial = new Swiper('.swiper-trial', {
   direction: 'horizontal',
   loop: false,

   slidesPerView: 1,
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },
   autoplay: {
      delay: 4000,
   },

});

const swiperGallery = new Swiper('.gallery__slider', {
   direction: 'horizontal',
   loop: false,

   slidesPerView: 3,

   navigation: {
      nextEl: '.swiper-button-next',
   },

   breakpoints: {
      320: {
         slidesPerView: 2,
         spaceBetween: 40,

      },

      600: {
         spaceBetween: 50,

      },

      1000: {
         slidesPerView: 3,
         spaceBetween: 92,

      }
   }


});

swiperTrial.on('reachEnd', function () {
   var swjsNext = document.querySelector('.swiper-trial-button-next');
   swjsNext.style.display = 'none';
});

swiperTrial.on('reachBeginning', function () {
   var swjsPrev = document.querySelector('.swiper-trial-button-prev');
   swjsPrev.style.display = 'none';
});

swiperTrial.on('fromEdge', function () {
   var swjsNext = document.querySelector('.swiper-trial-button-next');
   swjsNext.style.display = 'flex';
   var swjsPrev = document.querySelector('.swiper-trial-button-prev');
   swjsPrev.style.display = 'flex';
});

const directionPopups = document.querySelectorAll('.directions-popup')
if (directionPopups) {
   for (let directionPopup of directionPopups) {
      directionPopup.addEventListener('click', function (e) {
         for (let i of directionPopups) {
            if (i != directionPopup) i.classList.remove('_active')
         }
         directionPopup.classList.toggle('_active')
      })
   }
}


const more = document.querySelectorAll('.directions__more-btn');
const moreBody = document.querySelector('.directions__more')

if (more && moreBody) {

} for (let i = 0; i < more.length; i++) {
   more[i].addEventListener('click', function () {
      let showPerClick = 10;

      const hidden = document.querySelectorAll('.directions-mobile__item');
      for (var i = 0; i < showPerClick; i++) {
         hidden[i].classList.remove('_hidden');
      }
   });
}


const select1 = document.querySelector('#select-1')
const select2 = document.querySelector('#select-2')
const select3 = document.querySelector('#select-3')
const select4 = document.querySelector('#select-4')



const choice1 = new Choices(select1, {
   searchEnabled: false,
   itemSelectText: "",
   position: 'bottom',
})

const choice2 = new Choices(select2, {
   searchEnabled: false,
   itemSelectText: "",
   position: 'bottom',
})

const choice3 = new Choices(select3, {
   searchEnabled: false,
   itemSelectText: "",
   position: 'bottom',
})

const choice4 = new Choices(select4, {
   searchEnabled: false,
   itemSelectText: "",
   position: 'bottom',
})

if (select1 && select2 && select3 && select4) {
   select1.addEventListener('change', function (e) {
      if (e.target.value == '4') {
         e.target.parentNode.parentNode.parentNode.childNodes[5].innerHTML = "<span>Срок действия:</span> 30 дней"
         e.target.parentNode.parentNode.parentNode.childNodes[9].innerHTML = "<span>Cтоимость 1 посещения</span> – 1250 руб. / занятие"
         e.target.parentNode.parentNode.parentNode.childNodes[11].innerHTML = "<div class='item-price__price'>5 000</div>"
      }
      if (e.target.value == '8') {
         e.target.parentNode.parentNode.parentNode.childNodes[5].innerHTML = "<span>Срок действия:</span> 45 дней"
         e.target.parentNode.parentNode.parentNode.childNodes[9].innerHTML = "<span>Cтоимость 1 посещения</span> – 1100 руб. / занятие"
         e.target.parentNode.parentNode.parentNode.childNodes[11].innerHTML = "<div class='item-price__price'>8 800</div>"
      }
      if (e.target.value == '12') {
         e.target.parentNode.parentNode.parentNode.childNodes[5].innerHTML = "<span>Срок действия:</span> 60 дней"
         e.target.parentNode.parentNode.parentNode.childNodes[9].innerHTML = "<span>Cтоимость 1 посещения</span> – 1000 руб. / занятие"
         e.target.parentNode.parentNode.parentNode.childNodes[11].innerHTML = "<div class='item-price__price'>12 000</div>"
      }
   })

   select2.addEventListener('change', function (e) {
      if (e.target.value == '8') {
         e.target.parentNode.parentNode.parentNode.childNodes[5].innerHTML = "<span>Срок действия:</span> 180 дней"
         e.target.parentNode.parentNode.parentNode.childNodes[9].innerHTML = "<span>Cтоимость 1 посещения</span> – 1150 руб. / занятие"
         e.target.parentNode.parentNode.parentNode.childNodes[11].innerHTML = "<div class='item-price__price'>9 200</div>"
      }
      if (e.target.value == '12') {
         e.target.parentNode.parentNode.parentNode.childNodes[5].innerHTML = "<span>Срок действия:</span> 180 дней"
         e.target.parentNode.parentNode.parentNode.childNodes[9].innerHTML = "<span>Cтоимость 1 посещения</span> – 1100 руб. / занятие"
         e.target.parentNode.parentNode.parentNode.childNodes[11].innerHTML = "<div class='item-price__price'>13 200</div>"
      }
      if (e.target.value == '18') {
         e.target.parentNode.parentNode.parentNode.childNodes[5].innerHTML = "<span>Срок действия:</span> 180 дней"
         e.target.parentNode.parentNode.parentNode.childNodes[9].innerHTML = "<span>Cтоимость 1 посещения</span> – 1000 руб. / занятие"
         e.target.parentNode.parentNode.parentNode.childNodes[11].innerHTML = "<div class='item-price__price'>18 000</div>"
      }
   })

   select3.addEventListener('change', function (e) {
      if (e.target.value == '63') {
         e.target.parentNode.parentNode.parentNode.childNodes[5].innerHTML = "<span>Срок действия:</span> 365 дней"
         e.target.parentNode.parentNode.parentNode.childNodes[9].innerHTML = "<span>Cтоимость 1 посещения</span> – 775 руб. / занятие"
         e.target.parentNode.parentNode.parentNode.childNodes[11].innerHTML = "<div class='item-price__price'>48 800</div>"
      }
      if (e.target.value == '36') {
         e.target.parentNode.parentNode.parentNode.childNodes[5].innerHTML = "<span>Срок действия:</span> 365 дней"
         e.target.parentNode.parentNode.parentNode.childNodes[9].innerHTML = "<span>Cтоимость 1 посещения</span> – 800 руб. / занятие"
         e.target.parentNode.parentNode.parentNode.childNodes[11].innerHTML = "<div class='item-price__price'>28 800</div>"
      }
   })

   select4.addEventListener('change', function (e) {
      if (e.target.value == '1') {
         e.target.parentNode.parentNode.parentNode.childNodes[5].innerHTML = ""
         e.target.parentNode.parentNode.parentNode.childNodes[9].innerHTML = ""
         e.target.parentNode.parentNode.parentNode.childNodes[11].innerHTML = "<div class='item-price__price'>800</div>"
      }
      if (e.target.value == '4') {
         e.target.parentNode.parentNode.parentNode.childNodes[5].innerHTML = "<span>Срок действия:</span> 30 дней"
         e.target.parentNode.parentNode.parentNode.childNodes[9].innerHTML = "<span>Cтоимость 1 посещения</span> – 750 руб. / занятие"
         e.target.parentNode.parentNode.parentNode.childNodes[11].innerHTML = "<div class='item-price__price'>3 000</div>"
      }
      if (e.target.value == '8') {
         e.target.parentNode.parentNode.parentNode.childNodes[5].innerHTML = "<span>Срок действия:</span> 45 дней"
         e.target.parentNode.parentNode.parentNode.childNodes[9].innerHTML = "<span>Cтоимость 1 посещения</span> – 700 руб. / занятие"
         e.target.parentNode.parentNode.parentNode.childNodes[11].innerHTML = "<div class='item-price__price'>5 600</div>"
      }
      if (e.target.value == '12') {
         e.target.parentNode.parentNode.parentNode.childNodes[5].innerHTML = "<span>Срок действия:</span> 60 дней"
         e.target.parentNode.parentNode.parentNode.childNodes[9].innerHTML = "<span>Cтоимость 1 посещения</span> – 650 руб. / занятие"
         e.target.parentNode.parentNode.parentNode.childNodes[11].innerHTML = "<div class='item-price__price'>7 800</div>"
      }
   })
}


const oneTime = document.querySelector('.one-time')
if (oneTime) {
   oneTime.addEventListener('click', function (e) {
      oneTime.classList.toggle('_active')
   })
}


const priceItems = document.querySelectorAll('.body-price__item')
if (priceItems) {
   for (let priceItem of priceItems) {
      priceItem.addEventListener('click', function (e) {
         if (!e.target.classList.contains('choices__list') &&
            !e.target.classList.contains('choices__inner') &&
            !e.target.classList.contains('choices__item')) {
            priceItem.classList.toggle('_active')

         }
      })
   }

}

const accordeons = document.querySelectorAll('.accordeon-kinds__title')
if (accordeons) {
   for (let accordeon of accordeons) {
      accordeon.addEventListener('click', function (e) {
         e.target.parentNode.classList.toggle('_closed')
      })
   }

}

const slidesGallery = document.querySelectorAll('.gallery__slider>.swiper-wrapper>.swiper-slide')

if (slidesGallery) {
   for (let slide of slidesGallery) {
      slide.addEventListener('click', function (e) {
         if (slide.classList.contains('swiper-slide-next')) {
            slide.classList.toggle('_hover')
         }
      })
   }

}


