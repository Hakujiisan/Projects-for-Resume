// Helper: expand panel smoothly
function openPanel(trigger, panel) {
  trigger.setAttribute('aria-expanded', 'true');
  panel.hidden = false;
  panel.classList.add('open');
  // сначала сброс, затем выставляем актуальную высоту
  panel.style.maxHeight = '0px';
  // принудительный reflow, чтобы анимация сработала
  panel.offsetHeight; // eslint-disable-line no-unused-expressions
  panel.style.maxHeight = panel.scrollHeight + 'px';
}

// Helper: collapse panel smoothly
function closePanel(trigger, panel) {
  trigger.setAttribute('aria-expanded', 'false');
  // Анимируем до 0, и только после окончания — hidden=true
  panel.style.maxHeight = panel.scrollHeight + 'px';
  panel.offsetHeight; // reflow
  panel.style.maxHeight = '0px';
  panel.classList.remove('open');
  panel.addEventListener('transitionend', function onEnd(e){
    if (e.propertyName === 'max-height') {
      panel.hidden = true;
      panel.removeEventListener('transitionend', onEnd);
    }
  });
}

function setupAccordion(root){
  const single = root.dataset.accordion === 'single';
  const triggers = root.querySelectorAll('.acc-trigger');

  // Клик мышью
  triggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const panelId = btn.getAttribute('aria-controls');
      const panel = document.getElementById(panelId);
      const expanded = btn.getAttribute('aria-expanded') === 'true';

      if (single) {
        // Закрываем все, кроме текущего
        root.querySelectorAll('.acc-trigger[aria-expanded="true"]').forEach(openBtn => {
          if (openBtn !== btn) {
            const pid = openBtn.getAttribute('aria-controls');
            closePanel(openBtn, document.getElementById(pid));
          }
        });
      }

      if (expanded) closePanel(btn, panel);
      else openPanel(btn, panel);
    });
  });

  // Актуализируем высоты при ресайзе (чтобы не обрезало контент)
  window.addEventListener('resize', () => {
    root.querySelectorAll('.acc-trigger[aria-expanded="true"]').forEach(btn => {
      const pid = btn.getAttribute('aria-controls');
      const panel = document.getElementById(pid);
      panel.style.maxHeight = panel.scrollHeight + 'px';
    });
  });
}

// Инициализация
document.querySelectorAll('.accordion').forEach(setupAccordion);

/*
//current date
const date = document.querySelector('.date');
function updateTime() {
    const currentDate = new Date();
    const options = {
        weekday: 'long', year: 'numeric', month: 'long',
        day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'
    };
    date.textContent = currentDate.toLocaleDateString('en-US', options);
}

updateTime();
setInterval(updateTime, 1000);
*/




 /* 4) Sound: Web Audio API (без внешних файлов)
 
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
*/

$(document).ready(function() {
  $(".copy-btn").on("click", function() {
    const targetSelector = $(this).data("target");
    const textToCopy = $(targetSelector).text();

    // Copy text to clipboard
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Change button icon/text
      const $btn = $(this);
      const originalText = $btn.html();
      $btn.html("✅ Copied");

      // Trigger a custom "copy" event (optional, for extra logic)
      $btn.trigger("copy");

      // Show tooltip
      $("#tooltip").text("Copied to clipboard!").fadeIn(300);
      setTimeout(() => {
        $("#tooltip").fadeOut(300);
        $btn.html(originalText); // restore button
      }, 2000);
    });
  });

  // Example of reacting to the 'copy' event
  $(".copy-btn").on("copy", function() {
    console.log("Text copied successfully!");
  });
});



$(document).ready(function() {
  function lazyLoad() {
    $(".lazy").each(function() {
      const $img = $(this);
      const imgTop = $img.offset().top;        // distance from top of page
      const scrollTop = $(window).scrollTop(); // how far user scrolled
      const windowHeight = $(window).height();

      // If image is in or near the viewport
      if (imgTop < scrollTop + windowHeight + 100) {
        const src = $img.attr("data-src");
        if (src && !$img.attr("src")) {
          $img.attr("src", src).on("load", function() {
            $(this).addClass("loaded");
          });
        }
      }
    });
  }

  // Run on scroll and on page load
  $(window).on("scroll", lazyLoad);
  lazyLoad(); // trigger on initial load too
});


(function () {
  const btn = document.getElementById('themeToggle');
  if (!btn) return; 

  const apply = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    // Обновим текст и ARIA
    const isDark = theme === 'dark';
    btn.textContent = isDark ? 'Night' : 'Day';
    btn.setAttribute('aria-pressed', String(isDark));
  };

  // Инициализация (с учётом раннего прелоада)
  const cur = document.documentElement.getAttribute('data-theme') || 'light';
  apply(cur);

  // Переключение
  btn.addEventListener('click', () => {
    const next = (document.documentElement.getAttribute('data-theme') === 'dark') ? 'light' : 'dark';
    apply(next);
  });
})();



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
