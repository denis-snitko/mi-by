const swiper = new Swiper('.card__promotion-swiper', {
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

//

var galleryThumbs = new Swiper('.card__slider--thumbs', {
  direction: 'vertical',
  slidesPerView: 4,
  slideToClickedSlide: false,
  spaceBetween: 10,
  // loopedSlides: 50,
  loop: false,
});

var galleryMain = new Swiper('.card__slider--main', {
  slidesPerView: 1,
  loop: true,
  loopedSlides: 50,
  navigation: {
    // nextEl: '.swiper-button-next',
    // prevEl: '.swiper-button-prev',
  },
  thumbs: {
    swiper: galleryThumbs,
  },
});

//

const openModal = () => {
  const EL_modal = document.querySelector('[data=js-modal]');
  const EL_openModal = document.querySelector('[data=js-open-modal]');
  const EL_closeModalBtn = document.querySelector('[data=js-close-modal]');

  if (EL_modal && EL_openModal && EL_closeModalBtn) {
    EL_openModal.addEventListener('click', () => {
      document.body.style.overflow = 'hidden';
      EL_modal.style.display = 'flex';
    });

    EL_closeModalBtn.addEventListener('click', () => {
      document.body.style.overflow = 'auto';
      EL_modal.style.display = 'none';
    });

    EL_modal.addEventListener('click', (event) => {
      // event.preventDefault()
      // if (!event.target.classList.contains('modal__body') ) {
      //   document.body.style.overflow = 'auto';
      //   EL_modal.style.display = 'none';
      // }
    });
  }
};

openModal();
