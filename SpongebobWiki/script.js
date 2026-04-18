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
