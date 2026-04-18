const emailInput = $("input[type='email']")
const submitBtn = $(".submit-btn")
const textarea = $("textarea")

$(document).ready(function() {
    //pop-up window
    const closeBtn = $(".pop-up-close")
    const popUpAllow = $(".pop-up-btn-allow")
    const popUpDeny = $(".pop-up-btn-deny")
    const popUp = $(".pop-up")
    popUp.hide()
    loadGifs();
    updateSubmitState();


    //prevent form from submitting
    $("form").submit(function(event) {
        event.preventDefault();
    })

    //form validation
    emailInput.on("input", function() {
        updateSubmitState();
    });

    textarea.on("input", function() {
        updateSubmitState();
    });

    //submit spinner
    submitBtn.click(function () {
        const $btn = $(this);
        if ($btn.prop("disabled")) return;

        const originalHtml = $btn.html();

        $btn
            .prop("disabled", true)
            .attr("aria-busy", "true")
            .html('<span class="spinner" aria-hidden="true"></span> Wait\u2026');

        setTimeout(function () {
            $btn
                .prop("disabled", false)
                .removeAttr("aria-busy")
                .html(originalHtml);

            popUp.show();
        }, 1500);
    });


    closeBtn.click(function() {
        popUp.hide()
    })

    popUpAllow.click(function() {
        popUpAllow.text("Thanks!")
        setTimeout(function() {
            popUp.hide()
            popUpAllow.text("OK")
        }, 2000)
    })

    popUpDeny.click(function() {
        popUpDeny.text("Sorry!")
        setTimeout(function() {
            popUp.hide()
            popUpDeny.text("No, thanks")
        }, 2000)
    })

    //hide text or read more
    $('span').each(function() {
        $(this).click(function() {
            $('.citation').fadeToggle(600)
        })
    })

    //scroll progress bar
    $(window).scroll(function() {
        const scroll = $(window).scrollTop()
        const maxScroll = $(document).height() - $(window).height()
        const progress = scroll / maxScroll
        $('.progress-bar').css('width', progress * 100 + '%')
    })

    //keyboard handler
}).keydown(function(e) {
    if (e.ctrlKey || e.altKey || e.metaKey || e.repeat) return;
    if (e.key === 'p') {
        e.preventDefault();
        toggleAudio();
        return;
    }

    let index = -1;
    switch (e.key) {
        case '1': index = 0; break;
        case '2': index = 1; break;
        case '3': index = 2; break;
        case '4': index = 3; break;
        case '5': index = 4; break;
        case '6': index = 5; break;
        case '7': index = 6; break;
        case '8': index = 7; break;
        case '9': index = 8; break;
        default: return;
    }
    const links = $('header a')
    if (index < 0 || index >= links.length) return;
    links.each(function(i, a) {
        a.classList.toggle('active', i === index)
    })
    const domLink = links.get(index)
    if (domLink && typeof domLink.focus === 'function') domLink.focus()
})

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

async function toggleAudio() {
    const audio = $('audio').get(0)
    try {
        if (audio.paused) {await audio.play();}
        else {
            audio.pause();
            audio.currentTime = 0;
        }
    } catch (e) {console.log('Error playing audio:', e)}
}

function updateSubmitState() {
    const emailValid = isValidOrEmpty(emailInput, validateEmail);
    const textValid = isValidOrEmpty(textarea, v => v.length >= 5);

    emailInput.toggleClass('error', !emailValid);
    textarea.toggleClass('error', !textValid);

    if (submitBtn) submitBtn.prop('disabled', !(emailValid && textValid));
}

function isValidOrEmpty($el, validator) {
    const val = ($el.val() || '').trim();
    const required = $el.prop('required') || $el.attr('data-required') === 'true';
    if (!val) return !required;
    return validator ? validator(val) : true;
}

async function loadGifs() {
    // Prefer key from env.js: window.__ENV__.TENOR_API_KEY
    const API_KEY = (window.__ENV__ && window.__ENV__.TENOR_API_KEY);
    const tag = 'spongebob';

    async function fetchGif() {
        try {
            const url = `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(tag)}&key=${API_KEY}&client_key=my_test_app&limit=8`;
            const r = await fetch(url);
            if (!r.ok) return null;
            const j = await r.json();

            const results = j.results || j || [];
            if (!Array.isArray(results) || results.length === 0) return null;

            const item = results[Math.floor(Math.random() * results.length)];
            if (!item) return null;

            const media = item.media_formats || item.media;
            let gifUrl = null;
            if (media) {
                if (media.gif && media.gif.url) gifUrl = media.gif.url;
                else if (media.tinygif && media.tinygif.url) gifUrl = media.tinygif.url;
                else if (Array.isArray(media) && media[0]) {
                    const m0 = media[0];
                    if (m0.gif && m0.gif.url) gifUrl = m0.gif.url;
                    else if (m0.tinygif && m0.tinygif.url) gifUrl = m0.tinygif.url;
                }
            }

            if (!gifUrl && item.url) gifUrl = item.url;
            if (!gifUrl && item.image) gifUrl = item.image;

            return gifUrl || null;
        } catch (e) {
            return null;
        }
    }

    const $cards = $('.card');
    if (!$cards.length) return;

    for (let i = 0; i < $cards.length; i++) {
        const $card = $($cards[i]);
        let gifUrl = await fetchGif();
        if (!gifUrl) {
            continue;
        }

        const $primary = $card.find('.card-img').first();
        if ($primary.length) {
            try {
                $primary.attr('src', gifUrl);
            } catch (e) {
                console.log(e)
            }
        } else {
        }
    }
}
