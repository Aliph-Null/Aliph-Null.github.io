var isLoaded = false;

//Function run after the page loads
window.onload = function onload() {
    //console.clear();
    // Scroll to the top of the page
    window.scrollTo(0, 0);
    console.log("Loaded site");
}

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

//Manages sections for scrolled animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting){   
            var delay = entry.target.getAttribute("data-animation-delay");
            if(delay != ""){
                entry.target.style.transitionDelay = delay;
            }

            entry.target.classList.add('show');
        }else{
            if (!entry.target.classList.contains('dontHide')){
                entry.target.classList.remove('show');
            }
        }
    });
});

//variables to manage the scroll animations
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

// Wait for the page to load
window.addEventListener('load', function() {
    // Get the loading element
    var loadingElement = document.getElementById('loading');
    
    // Delete the loading element after 5 seconds
    if (loadingElement) {
      setTimeout(function() {
        loadingElement.remove();
        isLoaded = true;
        window.scrollTo(0, 0);
      }, 5000);
    }
});