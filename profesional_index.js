window.scrollTo({top: 0});

document.addEventListener('DOMContentLoaded', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    function updateScrollbarColor() {
        const scrollY = window.scrollY;// || window.pageYOffset;
        const maxScroll = document.body.scrollHeight - window.innerHeight;
        const scrollPercentage = (scrollY / maxScroll) * 100;

        // Adjust the hue value based on the scroll percentage
        const hue = Math.round(scrollPercentage * 2.55); // 2.55 = 255 / 100

        document.documentElement.style.setProperty('--scrollbar-color', `hsl(${hue}, 75%, 60%)`);
    }

    // Update scrollbar color on scroll
    window.addEventListener('scroll', updateScrollbarColor);

    // Array of quotes
    const quotes = [
        "The only limit to our realization of tomorrow will be our doubts of today.",
        "Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "The only way to do great work is to love what you do.",
        "Create from nothingness"
    ];

    // Get a random quote from the array
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    // Display the random quote in the HTML
    document.getElementById('random-quote').textContent = randomQuote;

    // Set a timeout to fade out the intro after 1 second
    setTimeout(function () {
        document.getElementById('intro').style.opacity = 0;
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        setTimeout(function (){
            var introElement = document.getElementById('intro');

            if (introElement) {
                introElement.remove();
            }
        }, 1000);
    }, 2000);
});

