document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevents page reload
        });
    }
});


//form validation
const emailInput = document.querySelector('.email-form input');
const submitBtn = document.querySelector('.submit-btn');
const textarea = document.querySelector('.feedback-form textarea');
const passWord = document.querySelector('.password');
const fullName = document.querySelector('.fullName');

emailInput.addEventListener('input', () => {
    const email = emailInput.value;
    const isValid = validateEmail(email);
    emailInput.classList.toggle('error', !isValid);
    if (submitBtn) submitBtn.disabled = !isValid;
});

textarea.addEventListener('input', () => {
    const feedback = textarea.value.trim();
    const isValid = feedback.length >= 5;
    textarea.classList.toggle('error', !isValid);
    if (submitBtn) submitBtn.disabled = !isValid;
})

passWord.addEventListener('input', () => {
    const password = passWord.value.trim();
    const isValid = password.length >= 8;
    passWord.classList.toggle('error', !isValid);
    if (submitBtn) submitBtn.disabled = !isValid;
})
fullName.addEventListener('input', () => {
    const namelength = fullName.value.trim();
    const isValid = namelength.length >= 8;
    fullName.classList.toggle('error', !isValid);
    if (submitBtn) submitBtn.disabled = !isValid;
})

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

//pop-up window
const closeBtn = document.querySelector('.pop-up-close');
const popUpAllow = document.querySelector('.pop-up-btn-allow');
const popUpDeny = document.querySelector('.pop-up-btn-deny');
const popUp = document.querySelector('.pop-up');
const popUpContent = document.querySelector('.pop-up-text');

function showPopUp() {
    popUp.classList.add('visible');
}

function hidePopUp() {
    popUp.classList.remove('visible');
}

submitBtn.addEventListener('click', showPopUp);
closeBtn.addEventListener('click', hidePopUp);

popUpAllow.addEventListener('click', () => {
    popUpAllow.textContent = "Thanks!";
    setTimeout( () => {
        hidePopUp();
        popUpAllow.textContent = "OK";
    }, 2000);
});

popUpDeny.addEventListener('click', () => {
    popUpDeny.textContent = "Sorry!";
    setTimeout( () => {
        hidePopUp();
        popUpDeny.textContent = "No, thanks";
    }, 2000);
});





// 1) Выбираем контейнер и группу звёзд
const ratingEl = document.getElementById('rating1');
const stars = ratingEl.querySelectorAll('.star'); // querySelectorAll — сразу группу
const hidden = document.getElementById('ratingValue');
const text = document.getElementById('ratingText');

let current = 0; // текущее значение рейтинга

// 2) Функция подсветки до N
function paint(n){
  stars.forEach(star => {
    const v = Number(star.dataset.value);
    star.classList.toggle('filled', v <= n);
  });
}

// 3) Наводка мышью — показываем предпросмотр
stars.forEach(star => {
  star.addEventListener('mouseenter', () => paint(Number(star.dataset.value)));
  star.addEventListener('mouseleave', () => paint(current));
});

// 4) Клик — фиксируем рейтинг
stars.forEach(star => {
  star.addEventListener('click', () => {
    current = Number(star.dataset.value);
    hidden.value = current;                 // можно отправить с формой
    text.textContent = `Your rating: ${current}`;
    paint(current);
  });
});

// Инициал
paint(current);


// 1) textContent — безопасно вставляет ТЕКСТ (HTML-тэги не работают)
document.getElementById('btnText').addEventListener('click', () => {
  const box = document.getElementById('outText');
  const userValue = '8,2/10'; // имитация «опасной строки»
  box.textContent = `Rating on IMDb: ${userValue}`;
  setMode('textContent');
});

// 2) innerHTML — вставляет РАЗМЕТКУ (используй осторожно; не подставляй сырые пользовательские данные)
document.getElementById('btnHTML').addEventListener('click', () => {
  const box = document.getElementById('outHTML');
  const safeMarkup = `
     Rating on :
    <a href="https://www.ratingraph.com/tv-shows/spongebob-squarepants-ratings-9455/">Rating Graph:</a>
    <strong>7,1/10</strong>
  `;
  box.innerHTML = safeMarkup;
  setMode('innerHTML');
});



// Получаем кнопку и блок с дополнительным текстом
const btn2 = document.getElementById('readMoreBtn');
const moreText = document.querySelector('.card-more');

// Функция для переключения текста
btn2.addEventListener('click', () => {
  // Проверяем, скрыт ли текст
  const isHidden = moreText.style.display === 'none';

  moreText.style.display = isHidden ? 'block' : 'none';

  // Меняем текст на кнопке
  btn2.textContent = isHidden ? 'Hid' : 'Read again';
});


// Функция для получения приветствия в зависимости от времени суток
function getGreeting() {
  const currentHour = new Date().getHours(); // Получаем текущий час
  let greetingMessage;

  if (currentHour >= 6 && currentHour < 12) {
    greetingMessage = "Good Morning, Bikini-Bottom!";
  } else if (currentHour >= 12 && currentHour < 18) {
    greetingMessage = "Good Afternoon , Bikini-Bottom!";
  } else {
    greetingMessage = "Good Night, Bikini-Bottom!";
  }

  return greetingMessage;
}

// Отображаем приветствие в элементе с id="greeting"
document.getElementById("greeting").textContent = getGreeting();





const colors = ['#f0e68c', '#add8e6', '#90ee90', '#ffb6c1', '#ffa07a', '#c8c8ff'];
const colorsNight = ['#bfb66a', '#7cadbc', '#61b861', '#c88189', '#c57757', '#8a8abf'];
let currentIndex = localStorage.getItem('colorIndex') || 0;

$(document).ready(function() {
    const savedTheme = localStorage.getItem('isNight') === 'true'
    applyTheme(savedTheme)

    //night toggler
    const logoImg = $("header img")
    const body = $("body")
    $("#theme-toggle").click(function () {
        const isNight = body.hasClass("night")
        applyTheme(!isNight)
    })

    //changing background color
    $('header').css('background-color', savedTheme ? colorsNight[currentIndex] : colors[currentIndex])
    logoImg.click(function() {
        currentIndex = (currentIndex + 1) % colors.length;
        localStorage.setItem('colorIndex', currentIndex)
        const isNight = body.hasClass("night")
        applyTheme(isNight)
    })

    //initialize auth behavior
    const $tabSignIn = $('#tab-signin')
    const $tabSignUp = $('#tab-signup')
    if($tabSignIn.length && $tabSignUp.length){
        const $formSignIn = $('#signin')
        const $formSignUp = $('#signup')
        const $signinMsg = $('#signin-msg')
        const $signupMsg = $('#signup-msg')
        const homePath = 'home&history/home.html'

        function showTab(tab){
            if(tab === 'signin'){
                $tabSignIn.addClass('active')
                $tabSignUp.removeClass('active')
                $formSignIn.addClass('active')
                $formSignUp.removeClass('active')
            } else {
                $tabSignUp.addClass('active')
                $tabSignIn.removeClass('active')
                $formSignUp.addClass('active')
                $formSignIn.removeClass('active')
            }
            $signinMsg.text('')
            $signupMsg.text('')
        }

        $tabSignIn.on('click', function(){ showTab('signin') })
        $tabSignUp.on('click', function(){ showTab('signup') })

        function loadUsers(){
            try{
                const raw = localStorage.getItem('users')
                return raw ? JSON.parse(raw) : {}
            }catch(e){ return {} }
        }
        function saveUsers(obj){
            localStorage.setItem('users', JSON.stringify(obj))
        }

        //simple signup
        $('#signup-submit').on('click', function(e){
            e.preventDefault()
            const login = $.trim($('#signup-login').val())
            const pw = $('#signup-password').val()
            const pw2 = $('#signup-password2').val()
            $signupMsg.css('color', '#b00')
            if(!login || !pw){ $signupMsg.text('Please enter username and password.'); return }
            if(pw !== pw2){ $signupMsg.text('Passwords do not match.'); return }
            if(pw.length < 4){ $signupMsg.text('Password should be at least 4 characters.'); return }

            const users = loadUsers()
            if(users[login]){ $signupMsg.text('User already exists. Please choose another username or sign in.'); return }
            users[login] = { password: pw }
            saveUsers(users)
            $signupMsg.css('color', 'green').text('Account created. Redirecting to home...')
            localStorage.setItem('loggedInUser', login)
            setTimeout(()=> window.location.href = homePath, 800)
        })

        // sign in
        $('#signin-submit').on('click', function(e){
            e.preventDefault()
            const login = $.trim($('#signin-login').val())
            const pw = $('#signin-password').val()
            $signinMsg.css('color', '#b00')
            if(!login || !pw){ $signinMsg.text('Please enter username and password.'); return }
            const users = loadUsers()
            if(!users[login] || users[login].password !== pw){ $signinMsg.text('Invalid password or login.'); return }
            localStorage.setItem('loggedInUser', login)
            $signinMsg.css('color', 'green').text('Signed in - redirecting...')
            setTimeout(()=> window.location.href = homePath, 800)
        })

        try{
            const logged = localStorage.getItem('loggedInUser')
            if(logged){ window.location.href = homePath }
        }catch(e){}
    }

    const $accountLink = $('#account-link')
    if($accountLink.length){
        $accountLink.text('User').show()
        $accountLink.attr('href', '../user.html')
    }

    const $userInfoRoot = $('#user-info')
    if($userInfoRoot.length){
        const $signout = $('#signout-btn')
        const $backHome = $('#back-home')
        const logged = localStorage.getItem('loggedInUser')
        if(!logged){
            $userInfoRoot.html('<p>You are not signed in. <a href="index.html">Sign in</a></p>')
            $signout.hide()
        } else {
            $userInfoRoot.html('<p>Signed in as <strong>' + $('<div>').text(logged).html() + '</strong></p>')
        }

        $signout.on('click', function(){
            localStorage.removeItem('loggedInUser')
            window.location.href = 'index.html'
        })

        $backHome.on('click', function(){ window.location.href = 'home&history/home.html' })
    }
})

function applyTheme(isNight) {
    localStorage.setItem('isNight', isNight)
    $('body').toggleClass('night', isNight)
    $('#theme-toggle').text(isNight ? '☀️' : '🌙')
    const basePath = window.location.hostname.includes('github.io') ? '/Assignment_Front_Group' : '..'
    $('header img').attr('src', isNight ? `${basePath}/assets/gary.png` : `${basePath}/assets/sponge_bob.png`)
    $('header').css('background-color', isNight ? colorsNight[currentIndex] : colors[currentIndex])
}
