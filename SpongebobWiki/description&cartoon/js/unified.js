// ===== DESCRIPTION PAGE FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Initializing Description Page Features...');
    
    // Check if we're on the description page
    if (document.body.classList.contains('page-description')) {
        initDescriptionFeatures();
    }
});

function initDescriptionFeatures() {
    console.log('✅ Initializing Description Page specific features');
    
    // Initialize all description page features
    initReadMore();
    initGallery();
    initFacts();
    initForm();
    initSayHi();
    initAccordion();
    initStatsCounter();
    initVoiceGreeting();
    initConfetti();
    initEpisodes();
    initGifsFeatures();
    initSearchHighlighting();
    initScrollProgressBar();
    
    console.log('✅ All Description Page features initialized');
}

// ===== READ MORE FUNCTION =====
function initReadMore() {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const hiddenText = document.getElementById('hiddenText');
    
    if (!readMoreBtn || !hiddenText) {
        console.log('❌ Read More elements not found');
        return;
    }
    
    console.log('✅ Read More elements found');
    
    readMoreBtn.addEventListener('click', function() {
        console.log('📖 Read More button clicked');
        const isVisible = hiddenText.style.display === 'block';
        
        if (isVisible) {
            hiddenText.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
            readMoreBtn.classList.remove('btn-secondary');
            readMoreBtn.classList.add('btn-primary');
        } else {
            hiddenText.style.display = 'block';
            readMoreBtn.textContent = 'Read Less';
            readMoreBtn.classList.remove('btn-primary');
            readMoreBtn.classList.add('btn-secondary');
        }
    });
}

// ===== FAQ ACCORDION =====
function initAccordion() {
    const faqItems = document.querySelectorAll('.faq-item-improved');
    
    if (faqItems.length === 0) {
        console.log('❌ FAQ items not found');
        return;
    }
    
    console.log(`✅ Found ${faqItems.length} FAQ items`);
    
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question-improved');
        const answer = item.querySelector('.faq-answer-improved');
        const toggle = item.querySelector('.faq-toggle');
        
        if (!question || !answer || !toggle) {
            console.log(`❌ FAQ item ${index} missing elements`);
            return;
        }
        
        // Set initial state
        answer.style.maxHeight = '0';
        answer.style.padding = '0 20px';
        
        question.addEventListener('click', () => {
            console.log(`📋 FAQ item ${index} clicked`);
            
            const isActive = answer.style.maxHeight !== '0px';
            
            // Close all items first
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer-improved');
                    const otherToggle = otherItem.querySelector('.faq-toggle');
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = '0';
                        otherAnswer.style.padding = '0 20px';
                    }
                    if (otherToggle) otherToggle.textContent = '➕';
                }
            });
            
            // Toggle current item
            if (isActive) {
                answer.style.maxHeight = '0';
                answer.style.padding = '0 20px';
                toggle.textContent = '➕';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '0 20px 15px 20px';
                toggle.textContent = '➖';
            }
        });
    });
}

// ===== GALLERY SLIDER =====
function initGallery() {
    const gallerySlider = document.getElementById('gallerySlider');
    const galleryNav = document.getElementById('galleryNav');
    const prevBtn = document.querySelector('.gallery-btn.prev');
    const nextBtn = document.querySelector('.gallery-btn.next');
    
    if (!gallerySlider || !galleryNav) return;
    
    const slides = gallerySlider.querySelectorAll('.gallery-slide');
    const dots = galleryNav.querySelectorAll('.gallery-dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].style.display = 'block';
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        showSlide(nextIndex);
    }
    
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) prevIndex = slides.length - 1;
        sh// ===== DESCRIPTION PAGE FUNCTIONALITY =====
document.addEventListener('DOMContentLoaded', function() {
    console.log('🔄 Initializing Description Page Features...');
    
    // Check if we're on the description page
    if (document.body.classList.contains('page-description')) {
        initDescriptionFeatures();
    }
});

function initDescriptionFeatures() {
    console.log('✅ Initializing Description Page specific features');
    
    // Initialize all description page features
    initReadMore();
    initGallery();
    initFacts();
    initForm();
    initSayHi();
    initAccordion();
    initStatsCounter();
    initVoiceGreeting();
    initConfetti();
    initEpisodes();
    initGifsFeatures();
    initSearchHighlighting();
    initScrollProgressBar();
    
    console.log('✅ All Description Page features initialized');
}

// ===== READ MORE FUNCTION =====
function initReadMore() {
    const readMoreBtn = document.getElementById('readMoreBtn');
    const hiddenText = document.getElementById('hiddenText');
    
    if (!readMoreBtn || !hiddenText) {
        console.log('❌ Read More elements not found');
        return;
    }
    
    console.log('✅ Read More elements found');
    
    readMoreBtn.addEventListener('click', function() {
        console.log('📖 Read More button clicked');
        const isVisible = hiddenText.style.display === 'block';
        
        if (isVisible) {
            hiddenText.style.display = 'none';
            readMoreBtn.textContent = 'Read More';
            readMoreBtn.classList.remove('btn-secondary');
            readMoreBtn.classList.add('btn-primary');
        } else {
            hiddenText.style.display = 'block';
            readMoreBtn.textContent = 'Read Less';
            readMoreBtn.classList.remove('btn-primary');
            readMoreBtn.classList.add('btn-secondary');
        }
    });
}

// ===== FAQ ACCORDION =====
function initAccordion() {
    const faqItems = document.querySelectorAll('.faq-item-improved');
    
    if (faqItems.length === 0) {
        console.log('❌ FAQ items not found');
        return;
    }
    
    console.log(`✅ Found ${faqItems.length} FAQ items`);
    
    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question-improved');
        const answer = item.querySelector('.faq-answer-improved');
        const toggle = item.querySelector('.faq-toggle');
        
        if (!question || !answer || !toggle) {
            console.log(`❌ FAQ item ${index} missing elements`);
            return;
        }
        
        // Set initial state
        answer.style.maxHeight = '0';
        answer.style.padding = '0 20px';
        
        question.addEventListener('click', () => {
            console.log(`📋 FAQ item ${index} clicked`);
            
            const isActive = answer.style.maxHeight !== '0px';
            
            // Close all items first
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    const otherAnswer = otherItem.querySelector('.faq-answer-improved');
                    const otherToggle = otherItem.querySelector('.faq-toggle');
                    if (otherAnswer) {
                        otherAnswer.style.maxHeight = '0';
                        otherAnswer.style.padding = '0 20px';
                    }
                    if (otherToggle) otherToggle.textContent = '➕';
                }
            });
            
            // Toggle current item
            if (isActive) {
                answer.style.maxHeight = '0';
                answer.style.padding = '0 20px';
                toggle.textContent = '➕';
            } else {
                answer.style.maxHeight = answer.scrollHeight + 'px';
                answer.style.padding = '0 20px 15px 20px';
                toggle.textContent = '➖';
            }
        });
    });
}

// ===== GALLERY SLIDER =====
function initGallery() {
    const gallerySlider = document.getElementById('gallerySlider');
    const galleryNav = document.getElementById('galleryNav');
    const prevBtn = document.querySelector('.gallery-btn.prev');
    const nextBtn = document.querySelector('.gallery-btn.next');
    
    if (!gallerySlider || !galleryNav) return;
    
    const slides = gallerySlider.querySelectorAll('.gallery-slide');
    const dots = galleryNav.querySelectorAll('.gallery-dot');
    let currentSlide = 0;
    
    function showSlide(index) {
        slides.forEach(slide => slide.style.display = 'none');
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].style.display = 'block';
        dots[index].classList.add('active');
        currentSlide = index;
    }
    
    function nextSlide() {
        let nextIndex = currentSlide + 1;
        if (nextIndex >= slides.length) nextIndex = 0;
        showSlide(nextIndex);
    }
    
    function prevSlide() {
        let prevIndex = currentSlide - 1;
        if (prevIndex < 0) prevIndex = slides.length - 1;
        showSlide(prevIndex);
    }
    
    showSlide(0);
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    setInterval(nextSlide, 5000);
}

// ===== RANDOM FACTS =====
function initFacts() {
    const factBtn = document.getElementById('factBtn');
    const factArea = document.getElementById('factArea');
    
    if (!factBtn || !factArea) return;
    
    const facts = [
        "SpongeBob's original name was 'SpongeBoy' but it was already trademarked!",
        "The character of SpongeBob was created by marine biologist Stephen Hillenburg.",
        "SpongeBob's laugh is actually a dolphin sound played backwards.",
        "The Krusty Krab is modeled after a lobster trap.",
        "SpongeBob has won multiple Emmy Awards for Outstanding Children's Animated Program.",
        "Tom Kenny, the voice of SpongeBob, also voices Gary the Snail.",
        "The show first aired on Nickelodeon on May 1, 1999.",
        "SpongeBob's address is 124 Conch Street, Bikini Bottom.",
        "Mr. Krabs' first name is Eugene.",
        "Sandy Cheeks is from Texas and is a squirrel scientist."
    ];
    
    factBtn.addEventListener('click', function() {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factArea.textContent = randomFact;
        
        factArea.style.opacity = '0';
        setTimeout(() => {
            factArea.style.opacity = '1';
            factArea.style.transition = 'opacity 0.5s ease';
        }, 100);
    });
}

// ===== SUGGESTION FORM =====
function initForm() {
    const suggestForm = document.getElementById('suggestForm');
    const resetBtn = document.getElementById('resetBtn');
    const formMessage = document.getElementById('formMessage');
    
    if (!suggestForm || !resetBtn || !formMessage) return;
    
    suggestForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const episode = document.getElementById('episode').value;
        const reason = document.getElementById('reason').value;
        
        if (name && episode) {
            formMessage.textContent = `Thanks ${name}! We'll check out "${episode}"!`;
            formMessage.style.color = 'green';
            showToast(`Suggestion submitted for "${episode}"!`, 'success');
        } else {
            formMessage.textContent = 'Please fill in all required fields!';
            formMessage.style.color = 'red';
        }
    });
    
    resetBtn.addEventListener('click', function() {
        suggestForm.reset();
        formMessage.textContent = '';
    });
}

// ===== SAY HI FUNCTION =====
function initSayHi() {
    const sayHiBtn = document.getElementById('sayHiBtn');
    const nameInput = document.getElementById('nameInput');
    const greeting = document.getElementById('greeting');
    
    if (!sayHiBtn || !nameInput || !greeting) return;
    
    sayHiBtn.addEventListener('click', function() {
        const name = nameInput.value || 'Friend';
        greeting.textContent = `Ahoy, ${name}! Welcome to Bikini Bottom! 🏖️`;
        
        greeting.classList.add('floating');
        setTimeout(() => {
            greeting.classList.remove('floating');
        }, 3000);
    });
}

// ===== STATS COUNTER =====
function initStatsCounter() {
    const statSeasons = document.getElementById('statSeasons');
    const statEpisodes = document.getElementById('statEpisodes');
    const statYears = document.getElementById('statYears');
    const statLanguages = document.getElementById('statLanguages');
    
    if (!statSeasons) return;
    
    const stats = {
        seasons: 13,
        episodes: 280,
        years: 25,
        languages: 60
    };
    
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(statSeasons, 0, stats.seasons, 2000);
                animateValue(statEpisodes, 0, stats.episodes, 2000);
                animateValue(statYears, 0, stats.years, 2000);
                animateValue(statLanguages, 0, stats.languages, 2000);
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(statSeasons.parentElement);
}

// ===== VOICE GREETING =====
function initVoiceGreeting() {
    const voiceBtn = document.getElementById('voiceGreeting');
    const nameInput = document.getElementById('nameInput');
    
    if (!voiceBtn) return;
    
    voiceBtn.addEventListener('click', function() {
        const name = nameInput.value || 'Friend';
        const message = `Ahoy, ${name}! Welcome to Bikini Bottom!`;
        
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(message);
            speech.rate = 0.9;
            speech.pitch = 1.2;
            window.speechSynthesis.speak(speech);
        } else {
            showToast('Voice synthesis not supported in your browser', 'warning');
        }
    });
}

// ===== CONFETTI EFFECT =====
function initConfetti() {
    const confettiBtn = document.getElementById('confettiBtn');
    
    if (!confettiBtn) return;
    
    confettiBtn.addEventListener('click', function() {
        showToast('Celebration time! 🎉', 'success');
        
        for (let i = 0; i < 50; i++) {
            createConfetti();
        }
    });
    
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.innerHTML = '🎉';
        confetti.style.position = 'fixed';
        confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-50px';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);
        
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
        });
        
        animation.onfinish = () => confetti.remove();
    }
}

// ===== EPISODES LIST =====
function initEpisodes() {
    const episodesList = document.getElementById('episodesList');
    
    if (!episodesList) return;
    
    const episodes = [
        {
            title: "Band Geeks",
            season: "Season 2",
            description: "Squidward tries to form a band for the Bubble Bowl."
        },
        {
            title: "Chocolate with Nuts",
            season: "Season 3", 
            description: "SpongeBob and Patrick become chocolate bar salesmen."
        },
        {
            title: "Pizza Delivery",
            season: "Season 1",
            description: "SpongeBob and Squidward deliver a pizza to a remote location."
        },
        {
            title: "Graveyard Shift",
            season: "Season 2",
            description: "SpongeBob and Squidward work the night shift at the Krusty Krab."
        }
    ];
    
    episodes.forEach(episode => {
        const episodeHTML = `
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${episode.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${episode.season}</h6>
                        <p class="card-text">${episode.description}</p>
                    </div>
                </div>
            </div>
        `;
        episodesList.innerHTML += episodeHTML;
    });
}

// ===== GIFS FEATURES =====
function initGifsFeatures() {
    const loadGifsBtn = document.getElementById('loadGifsBtn');
    const toggleGifsBtn = document.getElementById('toggleGifsBtn');
    
    if (loadGifsBtn) {
        loadGifsBtn.addEventListener('click', loadGifs);
    }
    
    if (toggleGifsBtn) {
        toggleGifsBtn.addEventListener('click', toggleGifs);
    }
    
    setTimeout(loadGifs, 2000);
}

async function loadGifs() {
    const API_KEY = 'AIzaSyCQaEFcAOchzzxGrgsLhXl1ruFGVpbWCAo';
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

    const characterCards = document.querySelectorAll('.character-card');
    if (!characterCards.length) return;

    // Update indicators
    const indicators = document.querySelectorAll('.gif-indicator');
    indicators.forEach(indicator => {
        indicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    });

    for (let i = 0; i < characterCards.length; i++) {
        const card = characterCards[i];
        let gifUrl = await fetchGif();
        if (!gifUrl) {
            continue;
        }

        const img = card.querySelector('.character-img');
        const indicator = card.querySelector('.gif-indicator');
        
        if (img) {
            // Store original image if not already stored
            if (!img.dataset.original) {
                img.dataset.original = img.src;
            }
            
            try {
                img.src = gifUrl;
                img.dataset.currentType = 'gif';
                
                if (indicator) {
                    indicator.innerHTML = '<i class="fas fa-film text-success"></i> GIF Loaded';
                }
            } catch (e) {
                console.log(e);
                if (indicator) {
                    indicator.innerHTML = '<i class="fas fa-exclamation-triangle text-warning"></i> Error';
                }
            }
        }
    }

    console.log("✅ GIFs loaded successfully");
}

function toggleGifs() {
    console.log("🔄 Toggling between GIFs and images");
    
    const characterCards = document.querySelectorAll('.character-card');
    let hasGifs = false;
    
    characterCards.forEach(card => {
        const img = card.querySelector('.character-img');
        const indicator = card.querySelector('.gif-indicator');
        
        if (img && img.dataset.original) {
            if (img.dataset.currentType === 'gif') {
                // Switch back to original image
                img.src = img.dataset.original;
                img.dataset.currentType = 'image';
                if (indicator) {
                    indicator.innerHTML = '<i class="fas fa-image"></i> Static Image';
                }
            } else {
                // Try to reload GIF
                hasGifs = true;
                loadGifs();
            }
        }
    });
    
    if (!hasGifs) {
        loadGifs();
    }
}

// ===== SEARCH HIGHLIGHTING =====
function initSearchHighlighting() {
    const searchBtn = document.getElementById('searchBtn');
    const clearSearch = document.getElementById('clearSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchBtn || !searchInput) return;
    
    let currentHighlight = null;
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => { 
        if (e.key === 'Enter') performSearch(); 
    });
    
    if (clearSearch) {
        clearSearch.addEventListener('click', clearHighlight);
    }
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (!searchTerm) return;
        
        clearHighlight();
        
        const searchableElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, .card-text, .faq-item-improved');
        let matchCount = 0;
        
        searchableElements.forEach(element => {
            const originalHTML = element.getAttribute('data-original-html') || element.innerHTML;
            element.setAttribute('data-original-html', originalHTML);
            
            const regex = new RegExp(`(${escapeRegex(searchTerm)})`, 'gi');
            if (regex.test(originalHTML)) {
                const highlightedHTML = originalHTML.replace(regex, '<mark class="search-highlight">$1</mark>');
                element.innerHTML = highlightedHTML;
                matchCount++;
            }
        });
        
        if (matchCount > 0) {
            searchResults.innerHTML = `<span class="text-success">✓ Found ${matchCount} matches for "${searchTerm}"</span>`;
            const firstHighlight = document.querySelector('.search-highlight');
            if (firstHighlight) {
                firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            searchResults.innerHTML = `<span class="text-danger">✗ No matches found for "${searchTerm}"</span>`;
        }
        currentHighlight = searchTerm;
    }
    
    function clearHighlight() {
        if (currentHighlight) {
            const elements = document.querySelectorAll('[data-original-html]');
            elements.forEach(element => {
                element.innerHTML = element.getAttribute('data-original-html');
            });
            searchResults.innerHTML = '';
            searchInput.value = '';
            currentHighlight = null;
        }
    }
    
    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

// ===== SCROLL PROGRESS BAR =====
function initScrollProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    
    if (!progressBar) return;
    
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
        const roundedProgress = Math.min(100, Math.max(0, progress));
        
        progressBar.style.width = roundedProgress + '%';
        updateProgressColor(roundedProgress);
    });
    
    function updateProgressColor(progress) {
        let gradient;
        if (progress < 25) {
            gradient = 'linear-gradient(90deg, #ff6b6b, #ffd93d)';
        } else if (progress < 50) {
            gradient = 'linear-gradient(90deg, #ffd93d, #6bcf7f)';
        } else if (progress < 75) {
            gradient = 'linear-gradient(90deg, #6bcf7f, #4d96ff)';
        } else {
            gradient = 'linear-gradient(90deg, #4d96ff, #9d4edd)';
        }
        progressBar.style.background = gradient;
    }
}

// ===== TOAST FUNCTION =====
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast show ${type}`;
    toast.innerHTML = `
        <div class="toast-body">
            <strong>${message}</strong>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    container.id = 'toastContainer';
    document.body.appendChild(container);
    return container;
}owSlide(prevIndex);
    }
    
    showSlide(0);
    
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => showSlide(index));
    });
    
    setInterval(nextSlide, 5000);
}

// ===== RANDOM FACTS =====
function initFacts() {
    const factBtn = document.getElementById('factBtn');
    const factArea = document.getElementById('factArea');
    
    if (!factBtn || !factArea) return;
    
    const facts = [
        "SpongeBob's original name was 'SpongeBoy' but it was already trademarked!",
        "The character of SpongeBob was created by marine biologist Stephen Hillenburg.",
        "SpongeBob's laugh is actually a dolphin sound played backwards.",
        "The Krusty Krab is modeled after a lobster trap.",
        "SpongeBob has won multiple Emmy Awards for Outstanding Children's Animated Program.",
        "Tom Kenny, the voice of SpongeBob, also voices Gary the Snail.",
        "The show first aired on Nickelodeon on May 1, 1999.",
        "SpongeBob's address is 124 Conch Street, Bikini Bottom.",
        "Mr. Krabs' first name is Eugene.",
        "Sandy Cheeks is from Texas and is a squirrel scientist."
    ];
    
    factBtn.addEventListener('click', function() {
        const randomFact = facts[Math.floor(Math.random() * facts.length)];
        factArea.textContent = randomFact;
        
        factArea.style.opacity = '0';
        setTimeout(() => {
            factArea.style.opacity = '1';
            factArea.style.transition = 'opacity 0.5s ease';
        }, 100);
    });
}

// ===== SUGGESTION FORM =====
function initForm() {
    const suggestForm = document.getElementById('suggestForm');
    const resetBtn = document.getElementById('resetBtn');
    const formMessage = document.getElementById('formMessage');
    
    if (!suggestForm || !resetBtn || !formMessage) return;
    
    suggestForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const episode = document.getElementById('episode').value;
        const reason = document.getElementById('reason').value;
        
        if (name && episode) {
            formMessage.textContent = `Thanks ${name}! We'll check out "${episode}"!`;
            formMessage.style.color = 'green';
            showToast(`Suggestion submitted for "${episode}"!`, 'success');
        } else {
            formMessage.textContent = 'Please fill in all required fields!';
            formMessage.style.color = 'red';
        }
    });
    
    resetBtn.addEventListener('click', function() {
        suggestForm.reset();
        formMessage.textContent = '';
    });
}

// ===== SAY HI FUNCTION =====
function initSayHi() {
    const sayHiBtn = document.getElementById('sayHiBtn');
    const nameInput = document.getElementById('nameInput');
    const greeting = document.getElementById('greeting');
    
    if (!sayHiBtn || !nameInput || !greeting) return;
    
    sayHiBtn.addEventListener('click', function() {
        const name = nameInput.value || 'Friend';
        greeting.textContent = `Ahoy, ${name}! Welcome to Bikini Bottom! 🏖️`;
        
        greeting.classList.add('floating');
        setTimeout(() => {
            greeting.classList.remove('floating');
        }, 3000);
    });
}

// ===== STATS COUNTER =====
function initStatsCounter() {
    const statSeasons = document.getElementById('statSeasons');
    const statEpisodes = document.getElementById('statEpisodes');
    const statYears = document.getElementById('statYears');
    const statLanguages = document.getElementById('statLanguages');
    
    if (!statSeasons) return;
    
    const stats = {
        seasons: 13,
        episodes: 280,
        years: 25,
        languages: 60
    };
    
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const value = Math.floor(progress * (end - start) + start);
            element.textContent = value;
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateValue(statSeasons, 0, stats.seasons, 2000);
                animateValue(statEpisodes, 0, stats.episodes, 2000);
                animateValue(statYears, 0, stats.years, 2000);
                animateValue(statLanguages, 0, stats.languages, 2000);
                observer.unobserve(entry.target);
            }
        });
    });
    
    observer.observe(statSeasons.parentElement);
}

// ===== VOICE GREETING =====
function initVoiceGreeting() {
    const voiceBtn = document.getElementById('voiceGreeting');
    const nameInput = document.getElementById('nameInput');
    
    if (!voiceBtn) return;
    
    voiceBtn.addEventListener('click', function() {
        const name = nameInput.value || 'Friend';
        const message = `Ahoy, ${name}! Welcome to Bikini Bottom!`;
        
        if ('speechSynthesis' in window) {
            const speech = new SpeechSynthesisUtterance(message);
            speech.rate = 0.9;
            speech.pitch = 1.2;
            window.speechSynthesis.speak(speech);
        } else {
            showToast('Voice synthesis not supported in your browser', 'warning');
        }
    });
}

// ===== CONFETTI EFFECT =====
function initConfetti() {
    const confettiBtn = document.getElementById('confettiBtn');
    
    if (!confettiBtn) return;
    
    confettiBtn.addEventListener('click', function() {
        showToast('Celebration time! 🎉', 'success');
        
        for (let i = 0; i < 50; i++) {
            createConfetti();
        }
    });
    
    function createConfetti() {
        const confetti = document.createElement('div');
        confetti.innerHTML = '🎉';
        confetti.style.position = 'fixed';
        confetti.style.fontSize = Math.random() * 20 + 10 + 'px';
        confetti.style.left = Math.random() * 100 + 'vw';
        confetti.style.top = '-50px';
        confetti.style.zIndex = '9999';
        confetti.style.pointerEvents = 'none';
        document.body.appendChild(confetti);
        
        const animation = confetti.animate([
            { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
            { transform: `translateY(${window.innerHeight}px) rotate(${Math.random() * 360}deg)`, opacity: 0 }
        ], {
            duration: Math.random() * 3000 + 2000,
            easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
        });
        
        animation.onfinish = () => confetti.remove();
    }
}

// ===== EPISODES LIST =====
function initEpisodes() {
    const episodesList = document.getElementById('episodesList');
    
    if (!episodesList) return;
    
    const episodes = [
        {
            title: "Band Geeks",
            season: "Season 2",
            description: "Squidward tries to form a band for the Bubble Bowl."
        },
        {
            title: "Chocolate with Nuts",
            season: "Season 3", 
            description: "SpongeBob and Patrick become chocolate bar salesmen."
        },
        {
            title: "Pizza Delivery",
            season: "Season 1",
            description: "SpongeBob and Squidward deliver a pizza to a remote location."
        },
        {
            title: "Graveyard Shift",
            season: "Season 2",
            description: "SpongeBob and Squidward work the night shift at the Krusty Krab."
        }
    ];
    
    episodes.forEach(episode => {
        const episodeHTML = `
            <div class="col-md-6">
                <div class="card h-100">
                    <div class="card-body">
                        <h5 class="card-title">${episode.title}</h5>
                        <h6 class="card-subtitle mb-2 text-muted">${episode.season}</h6>
                        <p class="card-text">${episode.description}</p>
                    </div>
                </div>
            </div>
        `;
        episodesList.innerHTML += episodeHTML;
    });
}

// ===== GIFS FEATURES =====
function initGifsFeatures() {
    const loadGifsBtn = document.getElementById('loadGifsBtn');
    const toggleGifsBtn = document.getElementById('toggleGifsBtn');
    
    if (loadGifsBtn) {
        loadGifsBtn.addEventListener('click', loadGifs);
    }
    
    if (toggleGifsBtn) {
        toggleGifsBtn.addEventListener('click', toggleGifs);
    }
    
    setTimeout(loadGifs, 2000);
}

async function loadGifs() {
    console.log("🔄 Loading GIFs...");
    
    const API_KEY = 'AIzaSyCQaEFcAOchzzxGrgsLhXl1ruFGVpbWCAo';
    const characters = ['spongebob', 'patrick', 'squidward', 'mrkrabs', 'sandy', 'plankton'];
    
    const indicators = document.querySelectorAll('.gif-indicator');
    indicators.forEach(indicator => {
        indicator.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    });
    
    for (const character of characters) {
        await loadCharacterGif(character, API_KEY);
    }
    
    console.log("✅ GIFs loaded successfully");
}

async function loadCharacterGif(character, apiKey) {
    try {
        const characterCard = document.querySelector(`.character-card[data-character="${character}"]`);
        if (!characterCard) return;
        
        const img = characterCard.querySelector('.character-img');
        const indicator = characterCard.querySelector('.gif-indicator');
        
        if (!img.dataset.original) {
            img.dataset.original = img.src;
        }
        
        const searchTerms = {
            'spongebob': 'spongebob squarepants funny',
            'patrick': 'patrick star spongebob',
            'squidward': 'squidward tentacles',
            'mrkrabs': 'mr krabs money',
            'sandy': 'sandy cheeks squirrel',
            'plankton': 'plankton evil'
        };
        
        const searchTerm = searchTerms[character] || character;
        const url = `https://tenor.googleapis.com/v2/search?q=${encodeURIComponent(searchTerm)}&key=${apiKey}&client_key=spongebob_site&limit=10`;
        
        const response = await fetch(url);
        if (!response.ok) throw new Error('API request failed');
        
        const data = await response.json();
        
        if (data.results && data.results.length > 0) {
            const randomIndex = Math.floor(Math.random() * data.results.length);
            const gifUrl = data.results[randomIndex].media_formats.gif.url;
            
            img.src = gifUrl;
            img.dataset.currentType = 'gif';
            
            if (indicator) {
                indicator.innerHTML = '<i class="fas fa-film text-success"></i> GIF Loaded';
            }
            
            console.log(`✅ Loaded GIF for ${character}`);
        } else {
            throw new Error('No GIFs found');
        }
        
    } catch (error) {
        console.error(`❌ Failed to load GIF for ${character}:`, error);
        const characterCard = document.querySelector(`.character-card[data-character="${character}"]`);
        if (characterCard) {
            const indicator = characterCard.querySelector('.gif-indicator');
            if (indicator) {
                indicator.innerHTML = '<i class="fas fa-exclamation-triangle text-warning"></i> Failed to load';
            }
        }
    }
}

function toggleGifs() {
    console.log("🔄 Toggling between GIFs and images");
    
    const characterCards = document.querySelectorAll('.character-card');
    let hasGifs = false;
    
    characterCards.forEach(card => {
        const img = card.querySelector('.character-img');
        const indicator = card.querySelector('.gif-indicator');
        
        if (img && img.dataset.original) {
            if (img.dataset.currentType === 'gif') {
                img.src = img.dataset.original;
                img.dataset.currentType = 'image';
                if (indicator) {
                    indicator.innerHTML = '<i class="fas fa-image"></i> Static Image';
                }
            } else {
                const character = card.dataset.character;
                if (character) {
                    loadCharacterGif(character, 'AIzaSyCQaEFcAOchzzxGrgsLhXl1ruFGVpbWCAo');
                    hasGifs = true;
                }
            }
        }
    });
    
    if (!hasGifs) {
        loadGifs();
    }
}

// ===== SEARCH HIGHLIGHTING =====
function initSearchHighlighting() {
    const searchBtn = document.getElementById('searchBtn');
    const clearSearch = document.getElementById('clearSearch');
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');
    
    if (!searchBtn || !searchInput) return;
    
    let currentHighlight = null;
    
    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => { 
        if (e.key === 'Enter') performSearch(); 
    });
    
    if (clearSearch) {
        clearSearch.addEventListener('click', clearHighlight);
    }
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (!searchTerm) return;
        
        clearHighlight();
        
        const searchableElements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, .card-text, .faq-item-improved');
        let matchCount = 0;
        
        searchableElements.forEach(element => {
            const originalHTML = element.getAttribute('data-original-html') || element.innerHTML;
            element.setAttribute('data-original-html', originalHTML);
            
            const regex = new RegExp(`(${escapeRegex(searchTerm)})`, 'gi');
            if (regex.test(originalHTML)) {
                const highlightedHTML = originalHTML.replace(regex, '<mark class="search-highlight">$1</mark>');
                element.innerHTML = highlightedHTML;
                matchCount++;
            }
        });
        
        if (matchCount > 0) {
            searchResults.innerHTML = `<span class="text-success">✓ Found ${matchCount} matches for "${searchTerm}"</span>`;
            const firstHighlight = document.querySelector('.search-highlight');
            if (firstHighlight) {
                firstHighlight.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            searchResults.innerHTML = `<span class="text-danger">✗ No matches found for "${searchTerm}"</span>`;
        }
        currentHighlight = searchTerm;
    }
    
    function clearHighlight() {
        if (currentHighlight) {
            const elements = document.querySelectorAll('[data-original-html]');
            elements.forEach(element => {
                element.innerHTML = element.getAttribute('data-original-html');
            });
            searchResults.innerHTML = '';
            searchInput.value = '';
            currentHighlight = null;
        }
    }
    
    function escapeRegex(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }
}

// ===== SCROLL PROGRESS BAR =====
function initScrollProgressBar() {
    const progressBar = document.querySelector('.progress-bar');
    
    if (!progressBar) return;
    
    window.addEventListener('scroll', function() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        const progress = (scrollTop / (documentHeight - windowHeight)) * 100;
        const roundedProgress = Math.min(100, Math.max(0, progress));
        
        progressBar.style.width = roundedProgress + '%';
        updateProgressColor(roundedProgress);
    });
    
    function updateProgressColor(progress) {
        let gradient;
        if (progress < 25) {
            gradient = 'linear-gradient(90deg, #ff6b6b, #ffd93d)';
        } else if (progress < 50) {
            gradient = 'linear-gradient(90deg, #ffd93d, #6bcf7f)';
        } else if (progress < 75) {
            gradient = 'linear-gradient(90deg, #6bcf7f, #4d96ff)';
        } else {
            gradient = 'linear-gradient(90deg, #4d96ff, #9d4edd)';
        }
        progressBar.style.background = gradient;
    }
}

// ===== TOAST FUNCTION =====
function showToast(message, type = 'info') {
    const toastContainer = document.getElementById('toastContainer') || createToastContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast show ${type}`;
    toast.innerHTML = `
        <div class="toast-body">
            <strong>${message}</strong>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

function createToastContainer() {
    const container = document.createElement('div');
    container.className = 'toast-container';
    container.id = 'toastContainer';
    document.body.appendChild(container);
    return container;
}