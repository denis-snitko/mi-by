const sliders = () => {
  const cardPromotionSwiper = document.querySelectorAll('.card__promotion');
  cardPromotionSwiper.forEach((el) => {
    new Swiper(el, {
      el: el.querySelector('.card__promotion-swiper'),
      cssMode: true,
      mousewheel: true,
      pagination: {
        el: el.querySelector('.swiper-pagination'),
        type: 'fraction',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  });

  const galleryThumbs = new Swiper('.card__slider--thumbs', {
    direction: 'vertical',
    slidesPerView: 7,
    spaceBetween: 10,
    loop: false,
    navigation: {
      nextEl: '.swiper-button-next-th',
      prevEl: '.swiper-button-prev-th',
    },
  });

  const galleryMain = new Swiper('.card__slider--main', {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 50,
    thumbs: {
      swiper: galleryThumbs,
    },
  });

  const videoThumbs = new Swiper('.video__slider--thumbs-video', {
    slidesPerView: 2,
    spaceBetween: 17,
    loop: false,
    breakpoints: {
      576: {
        slidesPerView: 3,
      },
      769: {
        slidesPerView: 4,
        direction: 'vertical',
      },
    },
  });

  const videoMain = new Swiper('.video__slider--main-video', {
    init: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.swiper-button-next-video',
      prevEl: '.swiper-button-prev-video',
    },
    thumbs: {
      swiper: videoThumbs,
    },
    pagination: {
      el: '.swiper-pagination--video',
      type: 'fraction',
    },
    on: {
      init() {
        const sliderHeight = document.querySelector('.video__slider').clientWidth;
        const { activeIndex } = this;
        const { slides } = this;
        const { title } = this.slides[activeIndex]?.dataset || '';

        document.querySelector('.js-video__slider-title').textContent = title;

        if (slides.length === 1) {
          document.querySelector('.video__slider--thumbs-video').remove();
          document.querySelector('.video__slider-description > .divider').remove();
          document.querySelector('.video__slider-description > .swiper-button-wrapper').remove();
        }

        if (slides.length <= 4 && sliderHeight > 728) {
          document.querySelector('.video__slider-description > .divider').remove();
          document.querySelector('.video__slider-description > .swiper-button-wrapper').remove();
        }
      },

      activeIndexChange() {
        const { activeIndex } = videoMain;
        const { title } = videoMain.slides[activeIndex]?.dataset || '';

        document.querySelector('.js-video__slider-title').textContent = title;
      },
    },
  });

  const recentlySwiper = document.querySelectorAll('.recently-swiper');
  recentlySwiper.forEach((el) => {
    new Swiper(el, {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      cssMode: true,
      mousewheel: true,
      breakpoints: {
        768: {
          slidesPerView: 2,
        },
        991: {
          slidesPerView: 3,
        },
        1201: {
          slidesPerView: 4,
        },
      },
      navigation: {
        prevEl: el.previousElementSibling,
        nextEl: el.nextElementSibling,
      },
    });
  });

  new Swiper('.header__bottom-menu--swiper', {
    slidesPerView: 9,
    spaceBetween: 20,
    slidesPerView: 'auto',
    loop: true,
    cssMode: true,
    mousewheel: true,
    breakpoints: {
      768: {
        spaceBetween: 43,
      },
    },
    navigation: {
      prevEl: '.swiper-button-prev-header',
      nextEl: '.swiper-button-next-header',
    },
  });
};

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
  }
};

const reviewsModal = () => {
  const EL_modal = document.querySelector('[data=js-modal-reviews]');
  const EL_openModal = document.querySelector('[data=js-open-reviews-modal]');
  const EL_closeModalBtn = document.querySelector('[data=js-close-reviews-modal]');

  if (EL_modal && EL_openModal && EL_closeModalBtn) {
    EL_openModal.addEventListener('click', () => {
      document.body.style.overflow = 'hidden';
      EL_modal.style.display = 'flex';
    });

    EL_closeModalBtn.addEventListener('click', () => {
      document.body.style.overflow = 'auto';
      EL_modal.style.display = 'none';
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
  const EL_hiddenBadges = document.querySelectorAll('.js-badges__hidden');
  const EL_showMoreBtn = document.querySelectorAll('.js-show-more');

  if (!EL_hiddenBadges && !EL_showMoreBtn) return;

  EL_showMoreBtn.forEach((currentItem) => {
    currentItem.addEventListener('click', () => {
      currentItem.classList.toggle('active');
      currentItem.previousElementSibling.classList.toggle('hidden');
    });
  });
};

const selectPaymentVariants = () => {
  const EL_paymentVariants = document.querySelector('.js-payment-variants');
  const EL_currentPaymentVariant = document.querySelector('.js-current-payment-variant');
  const EL_selectItem = document.querySelectorAll('.js-select-item');

  if (EL_paymentVariants && EL_currentPaymentVariant) {
    EL_paymentVariants.addEventListener('click', () => {
      EL_paymentVariants.classList.contains('open')
        ? EL_paymentVariants.classList.remove('open')
        : EL_paymentVariants.classList.add('open');
    });
  }

  if (EL_selectItem) {
    EL_selectItem.forEach((element) => {
      element.addEventListener('click', () => {
        document.querySelectorAll('.payment-variants__select-text').forEach((el) => el.classList.remove('selected'));
        element.querySelector('.payment-variants__select-text').classList.add('selected');

        const currentValue = element.querySelector('.payment-variants__select-text').textContent;

        EL_currentPaymentVariant.textContent = currentValue;
      });
    });
  }
};

function init() {
  myMap = new ymaps.Map('map', {
    center: [53.9, 27.56],
    zoom: 11,
  });
  myMap.geoObjects.add(
    new ymaps.Circle(
      [
        // Координаты центра круга.
        [53.9, 27.56],
        1,
      ],
      {},
      {
        // Цвет заливки.
        fillColor: '#ffffff',
        // Цвет обводки.
        strokeColor: '#FF6700',
        // Ширина обводки в пикселях.
        strokeWidth: 17,
      }
    )
  );
}

const customSelectHandler = () => {
  const EL_sort = document.querySelector('.js-custom-select');
  const EL_currentSort = document.querySelector('.js-custom-select-variant');
  const EL_selectItem = document.querySelectorAll('.js-select-item');
  const EL_selectInput = document.querySelector('.js-custom-select-input');
  const EL_searchInput = document.querySelector('.js-search input');

  if (EL_sort && EL_currentSort) {
    EL_sort.addEventListener('click', () => {
      EL_sort.classList.contains('open') ? EL_sort.classList.remove('open') : EL_sort.classList.add('open');

      EL_searchInput.focus();
    });
  }

  if (EL_selectItem) {
    EL_selectItem.forEach((element) => {
      element.addEventListener('click', () => {
        document.querySelectorAll('.custom-select__select-text').forEach((el) => el.classList.remove('selected'));
        element.querySelector('.custom-select__select-text').classList.add('selected');

        const currentValue = element.querySelector('.custom-select__select-text').textContent.trim();

        EL_selectInput.value = currentValue;
        EL_currentSort.textContent = currentValue;
      });
    });
  }
};

const mapModal = () => {
  const EL_modal = document.querySelector('[data=js-modal-map]');
  const EL_openModal = document.querySelectorAll('[data=js-open-map-modal]');
  const EL_closeModalBtn = document.querySelector('[data=js-close-map-modal]');

  if (!EL_modal || !EL_openModal || !EL_closeModalBtn) return;

  EL_openModal.forEach((element) => {
    element.addEventListener('click', (event) => {
      event.preventDefault();
      document.body.style.overflow = 'hidden';
      EL_modal.style.display = 'flex';
    });
  });

  EL_closeModalBtn.addEventListener('click', () => {
    document.body.style.overflow = 'auto';
    EL_modal.style.display = 'none';
  });

  ymaps.ready(init);
};

const footerMenuHandler = () => {
  const EL_footerBtn = document.querySelectorAll('.js-footer-title');

  if (!EL_footerBtn) return;

  EL_footerBtn.forEach((element) => {
    element.addEventListener('click', () => {
      element.classList.toggle('open');
    });
  });
};

addEventListener('DOMContentLoaded', () => {
  sliders();
  reviewsModal();
  openModal();
  activeTab();
  popupTimeOpen();
  badgesHandler();
  selectPaymentVariants();
  customSelectHandler();
  mapModal();
  footerMenuHandler();
});
