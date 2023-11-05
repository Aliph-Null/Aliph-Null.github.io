//How smooth should this function run (aka FPS)
var Smoothness = 30;
//Speed of change
var change_speed = 5 / 10000;

// Define default red, green, and blue offset values
const DR = 217;
const DG = 127;
const DB = 336;

// Function to be called every 1/60s to update the CSS variables
function updateColors() {
  if(isLoaded) return;
  // Get the current time to use as the noise function input
  const time = performance.now() * change_speed;
  // Call the noise function three times to get three different offset values
  const OR = Math.floor((noise(time, 0) * 360) % 360 + DR);
  const OG = Math.floor((noise(time, 1) * 360) % 360 + DG);
  const OB = Math.floor((noise(time, 2) * 360) % 360 + DB);
  // Set the CSS variables for each color value
  document.documentElement.style.setProperty('--r1', `${OR}deg`);
  document.documentElement.style.setProperty('--r2', `${OG}deg`);
  document.documentElement.style.setProperty('--r3', `${OB}deg`);
}

function isLightMode() {
  // Use window.matchMedia to check if the preferred color scheme is light
  return window.matchMedia('(prefers-color-scheme: light)').matches;
}

//I have decided that this looks good only in dark mode
//you want a fancier site? get dark mode normie
//also this is an Easter Egg, congrats I guess, stop snooping around my code, whatever
//you have to learn from soewhere I guess, sure, just be mindfull That I Bodrug Denis wrote it.
if(!isLightMode()){
  // Call the updateColors function var(Smoothness) miliseconds
  setInterval(updateColors, 1000 / Smoothness);
}else{
  console.log("Really? Light mode? Use Dark mode to see a fancier website!");
}