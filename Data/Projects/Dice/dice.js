window.addEventListener('scroll', function() {
  const headerImg = document.getElementById('headerImg');
  const scrollY = window.scrollY;
  const newBackgroundPosition = `0% ${5 + scrollY * 0.25}%`; // Modify the multiplier (0.1) as needed

  headerImg.style.backgroundPosition = newBackgroundPosition;
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

document.querySelector("#dice_text").onmouseover = event => {
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