// javascript
(function($) {
    if (!$) return;

    const assets = [
        '../assets/bubble.png',
        '../assets/jellyfish.png'
    ];
    const ITEM_COUNT = 10;
    let running = false;
    let $layer = null;

    function ensureLayer() {
        if ($layer && $layer.length) return;
        $layer = $('#floating-layer');
        if (!$layer.length) {
            $layer = $('<div id="floating-layer"></div>').prependTo('body').css({
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                pointerEvents: 'none',
                zIndex: 0
            });

            // keep other content above the layer
            $('body > *').not($layer).each(function() {
                const $el = $(this);
                if ($el.css('position') === 'static') $el.css('position', 'relative');
                $el.css('z-index', 1);
            });
        }
    }

    function cleanupLayer() {
        if ($layer && $layer.length) {
            $layer.remove();
            $layer = null;
        }
        // restore styles
        $('body > *').css('z-index', '').css('position', '');
    }

    function randomProps(vw, vh) {
        const leftPct = 5 + Math.random() * 90; // 5%..95%
        const startTop = vh + 30 + Math.random() * 150; // below viewport
        const endTop = -150 - Math.random() * 200; // above viewport
        const widthPx = Math.round(30 + Math.random() * 120);
        const scale = 0.6 + Math.random() * 0.9;
        const duration = Math.round(6000 + Math.random() * 12000); // ms
        const delay = Math.round(Math.random() * 2000); // ms
        return { leftPct, startTop, endTop, widthPx, scale, duration, delay };
    }

    function createItem() {
        if (!running) return;
        const src = assets[Math.floor(Math.random() * assets.length)];
        const $img = $('<img>').attr('src', src).attr('alt', '').css({
            position: 'absolute',
            pointerEvents: 'none',
            userSelect: 'none',
            transformOrigin: 'center',
            display: 'block'
        });
        if (!$layer || !$layer.length) return;
        $layer.append($img);
        loopAnimate($img);
    }

    function loopAnimate($img) {
        if (!running || !$img.parent().length) {
            if ($img.parent().length) $img.remove();
            return;
        }

        const vw = $(window).width();
        const vh = $(window).height();
        const p = randomProps(vw, vh);

        // set start state
        $img.stop(true, true).css({
            left: p.leftPct + '%',
            top: p.startTop + 'px',
            width: p.widthPx + 'px',
            transform: 'translateZ(0) scale(' + p.scale + ')',
            opacity: 0
        });

        // start after random delay
        setTimeout(function() {
            if (!running || !$img.parent().length) {
                if ($img.parent().length) $img.remove();
                return;
            }

            // fade in quickly
            $img.animate({ opacity: 1 }, 300);

            // move vertically to above viewport
            $img.animate({ top: p.endTop + 'px', opacity: 0.9 }, {
                duration: p.duration,
                easing: 'linear',
                complete: function() {
                    if (!running || !$img.parent().length) {
                        if ($img.parent().length) $img.remove();
                        return;
                    }
                    // fade out then restart
                    $img.animate({ opacity: 0 }, 400, function() {
                        setTimeout(function() {
                            if (!running || !$img.parent().length) {
                                if ($img.parent().length) $img.remove();
                                return;
                            }
                            loopAnimate($img);
                        }, 300 + Math.random() * 1200);
                    });
                }
            });
        }, p.delay);
    }

    function startFloating() {
        if (running) return;
        running = true;
        ensureLayer();
        // create initial items
        for (let i = 0; i < ITEM_COUNT; i++) createItem();
    }

    function stopFloating() {
        if (!running) return;
        running = false;
        cleanupLayer();
    }

    // toggle on 'p' key (case-insensitive)
    $(document).on('keydown.floating', function(e) {
        try {
            if (!e.key) return;
            if (e.key.toLowerCase() === 'p') {
                if (running) stopFloating();
                else startFloating();
            }
        } catch (err) { /* ignore */ }
    });

    // expose stop handle
    window._floatingLayerStop = function() {
        stopFloating();
        $(document).off('keydown.floating');
    };
})(window.jQuery);
