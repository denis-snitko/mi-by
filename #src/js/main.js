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
  slidesPerView: 7,
  // slideToClickedSlide: false,
  spaceBetween: 10,
  // loopedSlides: 50,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next-th',
    prevEl: '.swiper-button-prev-th',
  },
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

const activeTab = () => {
  const EL_tabs = document.querySelectorAll('[name="card-info"]');

  if (EL_tabs) {
    EL_tabs.forEach((currentElement) => {
      currentElement.addEventListener('click', () => {
        document.querySelectorAll('.js-tabs-label').forEach((el) => el.classList.remove('active'));
        document.querySelector(`[for="${currentElement.id}"]`).classList.add('active');
      });
    });
  }
};

const popupTimeOpen = () => {
  const EL_btnOpen = document.querySelectorAll('.js-popup-open');

  if (EL_btnOpen) {
    EL_btnOpen.forEach((currentElement) => {
      currentElement.addEventListener('click', () => {
        currentElement.classList.toggle('active');
      });
    });
  }
};

const badgesHandler = () => {
  const EL_hiddenBadges = document.querySelector('.js-badges__hidden');
  const EL_showMoreBtn = document.querySelector('.js-show-more');

  if (EL_hiddenBadges && EL_showMoreBtn) {
    EL_showMoreBtn.addEventListener('click', () => {
      EL_showMoreBtn.classList.toggle('active');
      EL_hiddenBadges.classList.toggle('hidden');
    });
  }
};

openModal();
activeTab();
popupTimeOpen();
badgesHandler();
