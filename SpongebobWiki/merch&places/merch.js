document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.querySelector('.email-form input');
    const textarea = document.querySelector('.feedback-form textarea');
    const submitBtn = document.querySelector('.submit-btn');

    const popUp = document.querySelector('.pop-up');
    const closeBtn = document.querySelector('.pop-up-close');
    const popUpAllow = document.querySelector('.pop-up-btn-allow');
    const popUpDeny = document.querySelector('.pop-up-btn-deny');

    if(form && emailInput && textarea && submitBtn){
        form.addEventListener('submit', (e) => e.preventDefault());

        emailInput.addEventListener('input', () => {
            const email = emailInput.value;
            const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            emailInput.classList.toggle('error', !isValid);
            toggleSubmit();
        });

        textarea.addEventListener('input', () => {
            const feedback = textarea.value.trim();
            const isValid = feedback.length >= 5;
            textarea.classList.toggle('error', !isValid);
            toggleSubmit();
        });

        function toggleSubmit() {
            const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value);
            const feedbackValid = textarea.value.trim().length >= 5;
            submitBtn.disabled = !(emailValid && feedbackValid);
        }
    }

    if(submitBtn && popUp){
        submitBtn.addEventListener('click', () => popUp.classList.add('visible'));
    }
    if(closeBtn && popUp){
        closeBtn.addEventListener('click', () => popUp.classList.remove('visible'));
    }
    if(popUpAllow && popUp){
        popUpAllow.addEventListener('click', () => {
            popUpAllow.textContent = "Thanks!";
            setTimeout(() => {
                popUp.classList.remove('visible');
                popUpAllow.textContent = "OK";
            }, 2000);
        });
    }
    if(popUpDeny && popUp){
        popUpDeny.addEventListener('click', () => {
            popUpDeny.textContent = "Sorry!";
            setTimeout(() => {
                popUp.classList.remove('visible');
                popUpDeny.textContent = "No, thanks";
            }, 2000);
        });
    }

    // Accordion
    const accordionTitles = document.querySelectorAll('.accordion-title');
    if(accordionTitles.length){
        accordionTitles.forEach(title => {
            title.addEventListener('click', () => {
                title.parentElement.classList.toggle('active');
            });
        });
    }

    // Popup subscription
    const openPopupBtn = document.querySelector('.open-popup-btn');
    const popupForm = document.querySelector('.popup-form');
    const popupClose = document.querySelector('.popup-close');
    const popupInnerForm = document.querySelector('.popup-inner-form');

    if(openPopupBtn && popupForm){
        openPopupBtn.addEventListener('click', () => popupForm.classList.add('active'));
    }
    if(popupClose && popupForm){
        popupClose.addEventListener('click', () => popupForm.classList.remove('active'));
    }
    if(popupForm){
        window.addEventListener('click', (e) => {
            if(e.target === popupForm){
                popupForm.classList.remove('active');
            }
        });
    }
    if(popupInnerForm && popupForm){
        popupInnerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Thank you for subscribing!');
            popupForm.classList.remove('active');
        });
    }

    // Change background color
    const bgBtn = document.querySelector('.change-bg-btn');
    const bodyEl = document.body;
    const colors = ['#add8e6', '#90ee90', '#ffb6c1', '#f0e68c', '#ffa07a', '#e6e6fa'];
    let currentIndex = 0;
    if(bgBtn){
        bgBtn.addEventListener('click', () => {
            bodyEl.style.backgroundColor = colors[currentIndex];
            currentIndex = (currentIndex + 1) % colors.length;
        });
    }
});


  // ===== Rating stars =====
  const stars = document.querySelectorAll('.stars .star');
  const ratingOut = document.querySelector('.rating-output');
  let currentRating = 0;

  function paint(rating) {
    stars.forEach(star => {
      const val = Number(star.dataset.value);
      // закрашиваем, если значение звезды <= выбранного рейтинга
      star.classList.toggle('filled', val <= rating);
    });
  }

  stars.forEach(star => {
    // при наведении подсвечиваем временно
    star.addEventListener('mouseenter', () => {
      const hoverVal = Number(star.dataset.value);
      paint(hoverVal);
    });

    // при уходе мыши возвращаем к текущей выборке
    star.addEventListener('mouseleave', () => {
      paint(currentRating);
    });

    // при клике сохраняем рейтинг
    star.addEventListener('click', () => {
      currentRating = Number(star.dataset.value);
      paint(currentRating);
      if (ratingOut) {
        ratingOut.textContent = `Your rating: ${currentRating}/5`;
      }
    });
  });

  // ===== Dynamic text change demo (textContent / innerHTML) =====
  const changeBtn = document.getElementById('change-msg-btn');
  const dynMsg = document.getElementById('dynamic-msg');

  if (changeBtn && dynMsg) {
    changeBtn.addEventListener('click', () => {
      // пример textContent
      dynMsg.textContent = 'Message changed with textContent!';

      // если хочешь показать innerHTML, раскомментируй:
      // dynMsg.innerHTML = 'Now with <strong>innerHTML</strong> 🎉';
    });
  }


  // ===== 1) Button: показать текущее время =====
const showTimeBtn = document.getElementById('showTimeBtn');
const timeOut = document.getElementById('timeOut');

if (showTimeBtn && timeOut) {
  showTimeBtn.addEventListener('click', () => {
    timeOut.textContent = new Date().toLocaleTimeString();
  });
}

// ===== 2) Switch: приветствие по времени =====
const greetBtn = document.getElementById('greetBtn');
const greetOut = document.getElementById('greetOut');

function greetingByHour(h) {
  // morning 5-11, afternoon 12-17, evening 18-22, night 23-4
  let part = '';
  switch (true) {
    case (h >= 5 && h <= 11): part = 'Good morning'; break;
    case (h >= 12 && h <= 17): part = 'Good afternoon'; break;
    case (h >= 18 && h <= 22): part = 'Good evening'; break;
    default: part = 'Good night';
  }
  return `${part}!`;
}

if (greetBtn && greetOut) {
  greetBtn.addEventListener('click', () => {
    const h = new Date().getHours();
    greetOut.textContent = greetingByHour(h);
  });
}

// ===== 3) Keyboard navigation для шапки (стрелки влево/вправо) =====
const navLinks = Array.from(document.querySelectorAll('header a'));
if (navLinks.length) {
  document.addEventListener('keydown', (e) => {
    const active = document.activeElement;
    const i = navLinks.indexOf(active);
    if (i === -1) return;

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      const next = (i + 1) % navLinks.length;
      navLinks[next].focus();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const prev = (i - 1 + navLinks.length) % navLinks.length;
      navLinks[prev].focus();
    }
  });
}

// ===== 4) Popup Subscribe (отдельно от твоего feedback popup) =====
const openPopupBtn = document.querySelector('.open-popup-btn');
const popupForm = document.querySelector('.popup-form');
const popupClose = document.querySelector('.popup-close');
const popupInnerForm = document.querySelector('.popup-inner-form');

if (openPopupBtn && popupForm) {
  openPopupBtn.addEventListener('click', () => {
    popupForm.classList.add('active');
    popupForm.setAttribute('aria-hidden', 'false');
  });
}
if (popupClose && popupForm) {
  popupClose.addEventListener('click', () => {
    popupForm.classList.remove('active');
    popupForm.setAttribute('aria-hidden', 'true');
  });
}
if (popupForm) {
  popupForm.addEventListener('click', (e) => {
    if (e.target === popupForm) {
      popupForm.classList.remove('active');
      popupForm.setAttribute('aria-hidden', 'true');
    }
  });
}

// имитация async submit + callback
if (popupInnerForm && popupForm) {
  popupInnerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const submitBtn = popupInnerForm.querySelector('button[type="submit"]');
    const email = popupInnerForm.querySelector('input[name="email"]').value.trim();

    // простая валидация
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      submitBtn.textContent = 'Invalid email';
      setTimeout(() => (submitBtn.textContent = 'Send'), 1200);
      return;
    }

    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';

    // фейковый async запрос (вместо fetch к серверу)
    setTimeout(() => {
      // callback успеха
      submitBtn.textContent = 'Subscribed!';
      setTimeout(() => {
        popupForm.classList.remove('active');
        popupForm.setAttribute('aria-hidden', 'true');
        submitBtn.disabled = false;
        submitBtn.textContent = 'Send';
        popupInnerForm.reset();
      }, 900);
    }, 900);
  });
}

// ===== 5) (опционально) Reset для формы фидбэка, если добавил кнопку =====
const resetBtn = document.getElementById('resetFeedback');
const resetStatus = document.getElementById('resetStatus');
if (resetBtn) {
  resetBtn.addEventListener('click', () => {
    document.querySelectorAll('.email-form input, .feedback-form textarea')
      .forEach(el => { el.value = ''; el.classList.remove('error'); });
    const sendBtn = document.querySelector('.submit-btn');
    if (sendBtn) sendBtn.disabled = true;
    if (resetStatus) {
      resetStatus.textContent = 'Cleared';
      setTimeout(() => resetStatus.textContent = '', 1200);
    }
  });
}


// ====== Advanced JS: Objects, Arrays, HOF, Sound, Animations ======

/**
 * 1) Data + Objects & Methods
 * products: массив объектов; у каждого — метод finalPrice()
 */
const products = [
  { id: 1, title: 'Sponge Tee',    price: 49,  discount: 0.10, img: 'Spongemerch.jpg',
    finalPrice(){ return +(this.price * (1 - this.discount)).toFixed(2); } },
  { id: 2, title: 'Phone Case',    price: 25,  discount: 0.00, img: 'spongenaush.jpg',
    finalPrice(){ return +(this.price * (1 - this.discount)).toFixed(2); } },
  { id: 3, title: 'Hoodie',        price: 89,  discount: 0.15, img: 'SpongeHudi.jpg',
    finalPrice(){ return +(this.price * (1 - this.discount)).toFixed(2); } },
  { id: 4, title: 'Knee Socks',    price: 19,  discount: 0.05, img: 'https://now.estarland.com/images/products/54/61354/MERCH-Spongebob-Squarepants-Over-the-Knee-Socks-large-image.jpg',
    finalPrice(){ return +(this.price * (1 - this.discount)).toFixed(2); } },
  { id: 5, title: 'Mustard Tee',   price: 59,  discount: 0.20, img: 'https://www.paramountshop.com/cdn/shop/files/spongebob-squarepants-mustard-unisex-t-shirt-267940.jpg?v=1733833684&width=450',
    finalPrice(){ return +(this.price * (1 - this.discount)).toFixed(2); } },
];

/**
 * 2) Rendering (Arrays & Loops + Higher-Order Functions)
 * renderCards: принимает массив и рисует карточки
 */
function renderCards(list){
  const mount = document.getElementById('dynamicList');
  if(!mount) return;

  mount.innerHTML = '';
  // forEach = HOF; map/filter — см. в applyFilter ниже
  list.forEach(item => {
    const card = document.createElement('article');
    card.className = 'dyn-card';
    card.innerHTML = `
      <img class="dyn-thumb" src="${item.img}" alt="${item.title}">
      <div style="font-weight:700;">${item.title}</div>
      <div>Price: $${item.price} ${item.discount ? `<span style="color:#719870;">(–${Math.round(item.discount*100)}%)</span>` : ''}</div>
      <div style="font-weight:700;">Final: $${item.finalPrice()}</div>
      <button class="btn-like dyn-buy">Add to cart</button>
    `;
    // Animation on click
    card.addEventListener('click', (e)=>{
      // чтобы кнопка работала отдельно, анимацию вешаем на саму карточку
      card.classList.remove('pop');
      // пересчёт кадра для перезапуска анимации
      void card.offsetWidth;
      card.classList.add('pop');
    });

    mount.appendChild(card);
  });
}

/**
 * 3) Controls: Load, Filter (map/filter demo)
 */
const loadBtn   = document.getElementById('loadProductsBtn');
const filterBtn = document.getElementById('applyFilter');
const maxPrice  = document.getElementById('maxPrice');

if(loadBtn){
  loadBtn.addEventListener('click', () => {
    renderCards(products);
  });
}

if(filterBtn && maxPrice){
  filterBtn.addEventListener('click', () => {
    const limit = Number(maxPrice.value) || Infinity;
    // filter — HOF; map для копии/обогащения, если нужно
    const filtered = products
      .filter(p => p.finalPrice() <= limit)
      .map(p => ({ ...p })); // пример использования map
    renderCards(filtered);
  });
}

/**
 * 4) Sound: Web Audio API (без внешних файлов)
 */
function playPing(duration = 180, frequency = 660, type = 'sine'){
  const AudioCtx = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();

  osc.type = type;
  osc.frequency.value = frequency;
  osc.connect(gain);
  gain.connect(ctx.destination);

  // маленький fade-out, чтобы не щёлкало
  gain.gain.setValueAtTime(0.2, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration/1000);

  osc.start();
  osc.stop(ctx.currentTime + duration/1000);
}
const soundBtn = document.getElementById('playSoundBtn');
if (soundBtn) {
  const clickSound = new Audio('Sound.mp3'); // путь к твоему звуку
  soundBtn.addEventListener('click', () => {
    clickSound.currentTime = 0; // перезапускает с начала при повторных кликах
    clickSound.play();
  });
}

function avgFinalPrice(list){
  if(!list.length) return 0;
  const sum = list.reduce((acc, p) => acc + p.finalPrice(), 0);
  return +(sum / list.length).toFixed(2);
}


$(document).ready(function() {
    console.log("jQuery is ready!");

    const products = [
        { name: "Footbolka", img: "Spongemerch.jpg" },
        { name: "Cheholchiki", img: "spongenaush.jpg" },
        { name: "Hoodie", img: "SpongeHudi.jpg" },
        { name: "Footbolka 2", img: "https://www.paramountshop.com/cdn/shop/files/spongebob-squarepants-mustard-unisex-t-shirt-267940.jpg?v=1733833684&width=450" },
        { name: "Fkusnie SOCKS", img: "https://now.estarland.com/images/products/54/61354/MERCH-Spongebob-Squarepants-Over-the-Knee-Socks-large-image.jpg" },
        { name: "Burger 2", img: "https://images-eu.ssl-images-amazon.com/images/I/71GEMGWKOpL._AC_UL600_SR600,600_.jpg" },
        { name: "Chernaia footbolka", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY6YIO6g0CFxaparY2WZkxALr8eUSfGSEJ9Q&s" },
        { name: "Seraya Footbolochka", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnqk2uzBZBjZj6AA7RvwOAkKI8YChxFAoxL9Frs9uyJRw3t_vQFY7ZiONbEoupcmltRHM&usqp=CAU" },
        { name: "Chernaya Futbolnaya", img: "https://images.zentail.com/544/3ef0f3246fcb85e0bb065f137020bdb1de34a4da8aa2d1dd69f9daaff2b4de07.jpg" }
    ];

    const $input = $('#search-input');
    const $auto = $('#autocomplete-list');

    $input.on('keyup', function() {
        const value = $(this).val().toLowerCase();
        $auto.empty();

        const filtered = products.filter(p => p.name.toLowerCase().includes(value));

        filtered.forEach(p => {
            const $li = $(`
                <li class="auto-item" style="display:flex; align-items:center; cursor:pointer; margin-bottom:5px;">
                    <img src="${p.img}" alt="${p.name}" style="width:50px; height:50px; object-fit:cover; margin-right:10px;">
                    <span>${p.name}</span>
                </li>
            `);
            $auto.append($li);

            $li.on('click', function() {
                $input.val(p.name);
                $auto.empty();
            });
        });
    });
});




$(document).ready(function() {
    console.log("jQuery is ready!");
});


// ===== Individual star ratings for each product =====
document.querySelectorAll('.gallery .tile').forEach(tile => {
  const stars = tile.querySelectorAll('.star');
  const output = tile.querySelector('.rating-output');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      const rating = star.dataset.value;

      // Удаляем выделение у всех звёзд
      stars.forEach(s => s.classList.remove('active'));

      // Добавляем выделение до выбранной звезды
      for (let i = 0; i < rating; i++) {
        stars[i].classList.add('active');
      }

      // Выводим результат
      output.textContent = `Rated: ${rating} ★`;
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const galleries = document.querySelectorAll(".gallery .tile");

  galleries.forEach(tile => {
    const stars = tile.querySelectorAll(".star");
    const output = tile.querySelector(".rating-output");

    stars.forEach(star => {
      star.addEventListener("click", () => {
        const rating = parseInt(star.getAttribute("data-value"));

        stars.forEach(s => s.classList.remove("active"));
        stars.forEach(s => {
          if (parseInt(s.getAttribute("data-value")) <= rating) {
            s.classList.add("active");
          }
        });

        output.textContent = `You rated this ${rating} ★`;
      });

      star.addEventListener("mouseover", () => {
        const hoverValue = parseInt(star.getAttribute("data-value"));
        stars.forEach(s => {
          s.classList.toggle("hover", parseInt(s.getAttribute("data-value")) <= hoverValue);
        });
      });

      star.addEventListener("mouseleave", () => {
        stars.forEach(s => s.classList.remove("hover"));
      });
    });
  });
});
