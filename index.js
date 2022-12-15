var tile_size = 50, //Tile size is 50 px
    clicks = 0,
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
    tile_colums = 1,
    tile_rows = 1,
    def_displacement = 25; //in % logo size is displaced
const clicks_to_proceed = 5;
const time_to_procceed_load_page_miliseconds = 10000; // 10 seconds until the website decides to load cuz no loading actually occurs

window.onload = function onload() {
    console.log("Hello World!");
    createGrid();
    DisplayStartLogo();
    disableScroll();
    loading_screen_terminate(time_to_procceed_load_page_miliseconds);
    setTimeout(function() {
        enableScroll();
      }, time_to_procceed_load_page_miliseconds);
}

window.onresize = function onResize(){
    vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    createGrid();
    DisplayStartLogo();
}

let wrapper = document.querySelector('#tiles');

let seed = Math.random();
perlin.seed(seed);

var pure_random_generation = false;
    opacity_addition = 0.001;
    opacity_burn = 1.5;

const createTile = index => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
    
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

    tile.style.opacity = opacity;

    tile.onclick = e => handleOnClick(index);
    return tile;
}

const createTiles = quantity =>{
    Array.from(Array(quantity)).map((tile, index) => {
        wrapper.appendChild(createTile(index));
    })
}

const createGrid = () =>{
    wrapper.innerHTML = "";

    tile_colums = Math.floor(vw / tile_size);
    tile_rows = Math.floor(vh / tile_size);

    wrapper.style.setProperty("--columns", tile_colums);
    wrapper.style.setProperty("--rows", tile_rows);
    
    createTiles(tile_colums * tile_rows);
}

let toggled = true;

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

function loading_screen_terminate(delay){
    anime({
        targets: ".loading_watermark",
        opacity: 0,
        duration: 3000,
        delay: delay
    })
}

function disableScroll() {
    document.body.style.height = "100%";
    document.body.style.overflow = "hidden";
}
  
function enableScroll() {
    window.onscroll = function() {};
    document.body.style.height = "auto";
    document.body.style.overflow = "visible";
}

function OnToggleOffTiles(){
    
}

function OnToggleOnTiles(){

}

const logo_image = document.querySelector('#logo_image');
const white_circle = document.querySelector('#white_circle');
const black_circle = document.querySelector('#black_circle');
//console.log(logo_image);
//console.log(white_circle);
//console.log(black_circle);

addEventListener('mousemove', (event) => {});

onmousemove = (event) => { 
    var x = Math.floor(event.clientX / vw * 100);
    var y = Math.floor(event.clientY / vh * 100);

    logo_image.style.backgroundPosition = x + "% " + y + "%"; 
    // console.log("Left? : " + x + " ; Top? : " + y + ".");
}

logo_image.style.backgroundPosition = "0% 0%"; 

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

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
