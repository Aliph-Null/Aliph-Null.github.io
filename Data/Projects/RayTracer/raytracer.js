window.addEventListener('scroll', function() {
    const headerImg = document.getElementById('headerImg');
    const scrollY = window.scrollY;
    const newBackgroundPosition = `0% ${5 + scrollY * 0.25}%`; // Modify the multiplier (0.1) as needed
  
    headerImg.style.backgroundPosition = newBackgroundPosition;
  });
  
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  
  document.querySelector("#title").onmouseover = event => {
    let iteration = 0;
    
    interval = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if(index < iteration) {
            return event.target.dataset.value[index];
          }
        
          return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
      
      if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
      }
      
      iteration += 1 / 4;
    }, 50);
  }

  function changeFavicon() {
    // Array of favicon filenames
    const faviconList = Array.from({ length: 25 }, (_, index) => `Favicon/f${index}.webp`);

    let currentIndex = 0;

    // Function to update the favicon
    function updateFavicon() {
        const favicon = document.getElementById('favicon');
        favicon.href = faviconList[currentIndex];
        currentIndex = (currentIndex + 1) % faviconList.length;
    }

    // Set interval to periodically update the favicon
    setInterval(updateFavicon, 100); // Change every 1000 milliseconds (1 second)
}

// Call the function to start changing the favicon
changeFavicon();