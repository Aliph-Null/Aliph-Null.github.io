var tile_size = 50,         //Tile size is 50 px
    clicks = 0,         //click counter
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),           //page width
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),         //page height
    tile_colums = 1,            //colums to be generated for loading screen
    tile_rows = 1,              //rows to be generated for loading screen
    def_displacement = 25;      //in % logo size is displaced 
const clicks_to_proceed = 5;    //number of clicks when loading screen goes away
let toggled = true;             //boolean whever or not the loading screen is toggled
const time_to_procceed_load_page_miliseconds = 10000; // 10 seconds until the website decides to load cuz no loading actually occurs

//Function run after the page loads
window.onload = function onload() {
    console.log("Hello World!");
    createGrid();
    DisplayStartLogo();
    //disableScroll();
    loading_screen_terminate(time_to_procceed_load_page_miliseconds);

    // setTimeout(function() {
    //     enableScroll();
    //   }, time_to_procceed_load_page_miliseconds);
    
      //Remove the cover as not to overlap anything
      setTimeout(function() {
        document.getElementById('load_cover').remove();}, time_to_procceed_load_page_miliseconds + 1000);
}

//Function run when the page is resized
window.onresize = function onResize(){
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    createGrid();
    DisplayStartLogo();
}

//Ellement where the tiles will be generated
let wrapper = document.querySelector('#tiles');

//vars for perlin noise
let seed = Math.random();
perlin.seed(seed);
//varss for changing noise application
var pure_random_generation = false;
    opacity_addition = 0.001;
    opacity_burn = 1.5;

//create a tile with an index
const createTile = index => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    
    //use perlin noise to generate opacity and apply it
    seed = Math.random();

    let x, y;
    x = index % tile_colums;
    y = (index - x + 1) % tile_rows;
    
    x = x / seed;
    y = y / seed;
    
    let opacity;

    opacity = (perlin.get(x, y) / 2 + opacity_addition) * opacity_burn;

    if(pure_random_generation) {
        opacity = Math.random();
    }

    opacity = perlin.get(x / tile_colums, y/tile_rows);

    tile.style.opacity = opacity;

    //add each tile to hndleOnClick event when clicked with it's index
    tile.onclick = e => handleOnClick(index);
    return tile;
}

//function to create all tiles
const createTiles = quantity =>{
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}

//functions defining the grid and creating tiles
const createGrid = () =>{
    wrapper.innerHTML = "";

    tile_colums = Math.floor(vw / tile_size);
    tile_rows = Math.floor(vh / tile_size);

    wrapper.style.setProperty("--columns", tile_colums);
    wrapper.style.setProperty("--rows", tile_rows);
    
    createTiles(tile_colums * tile_rows);
}


//handle onClick for each tile with it's index to do animation
const handleOnClick = index =>{
    toggled = !toggled;
    clicks -= -1;

    if(toggled){
        OnToggleOnTiles();
    }else{
        OnToggleOffTiles();
    }

    if(clicks >= clicks_to_proceed){
        loading_screen_terminate(1500);
    }

    anime({
        targets: ".tile",

        opacity: toggled ? 0 : 1,

        delay: anime.stagger(50, {
            grid: [tile_colums, tile_rows],
            from: index
        })
    })
}

//turn off loading screen
function loading_screen_terminate(delay){
    anime({
        targets: ".loading_watermark",
        opacity: 0,
        duration: 3000,
        delay: delay
    })
}

//disable scroll
function disableScroll() {
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
}
 
//enable scroll
function enableScroll() {
    window.onscroll = function() {};
    document.body.style.height = "auto";
    document.body.style.overflow = "visible";
}


//function called when tiles are off
function OnToggleOffTiles(){
    
}
//function called when tiles are on
function OnToggleOnTiles(){

}

//Get elements for logo display
const logo_image = document.querySelector('#logo_image');
const white_circle = document.querySelector('#white_circle');
const black_circle = document.querySelector('#black_circle');

//Reset logo image
logo_image.style.backgroundPosition = "0% 0%"; 

//Event listener for mouse movement
addEventListener('mousemove', (event) => {});

//change logo position based on mouse position
let lastX, lastY;
let lerp_factor = 0.3;

onmousemove = (event) => { 
    var x = Math.floor(event.clientX / vw * 100);
    var y = Math.floor(event.clientY / vh * 100);

    const lerpedX = lastX ? lastX + (x - lastX) * lerpFactor : x;
    const lerpedY = lastY ? lastY + (y - lastY) * lerpFactor : y;

    logo_image.style.backgroundPosition = lerpedX + "% " + lerpedY + "%"; 
    //logo_image.style.backgroundPosition = x + "% " + y + "%"; 

    lastX = x;
    lastY = y;
}

//Display the logo correctly for any display
function DisplayStartLogo(){
    
    let displacement_img = 7,
        displacement_b_c = 6,
        displacement_w_c = 5;

    let size = "";
    
    if(vh < vw) {
        size = vh;
    }

    if(vw < vh){
        size = vw;
    }

    logo_image.style.height = (size - (size/100 * (def_displacement + displacement_img))) + "px";
    logo_image.style.width =  (size - (size/100 * (def_displacement + displacement_img))) + "px";
    
    white_circle.style.height = (size - (size/100 * (def_displacement + displacement_w_c))) + "px";
    white_circle.style.width = (size - (size/100 * (def_displacement + displacement_w_c))) + "px";
    
    black_circle.style.height = (size - (size/100 * (def_displacement + displacement_b_c))) + "px";
    black_circle.style.width = (size - (size/100 * (def_displacement + displacement_b_c))) + "px";

    console.log("Set display logo correctly");

    logo_image.onclick = e => handleOnClick((tile_colums * tile_rows) / 2);
    black_circle.onclick = e => handleOnClick((tile_colums * tile_rows) / 2);
    white_circle.onclick = e => handleOnClick((tile_colums * tile_rows) / 2);
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
