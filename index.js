var tile_size = 50, //Tile size is 50 px
    clicks = 0,
    width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0),
    height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0),
    tile_colums = 1,
    tile_rows = 1;
const clicks_to_proceed = 5;
const time_to_procceed_load_page_miliseconds = 10000; // 10 seconds until the website decides to load cuz no loading actually occurs

window.onload = function onload() {
    console.log("Hello World!");
    createGrid();
    disableScroll();
    loading_screen_terminate(time_to_procceed_load_page_miliseconds);
    setTimeout(function() {
        enableScroll();
      }, time_to_procceed_load_page_miliseconds);
}

window.onresize = function onResize(){
    width = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    height = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);

    createGrid();
}

let wrapper = document.querySelector('#tiles');

const createTile = index => {
    const tile = document.createElement("div");
    tile.classList.add("tile");
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

    tile_colums = Math.floor(width / tile_size);
    tile_rows = Math.floor(height / tile_size);

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

const logo_image = document.querySelector('.logo_image')
addEventListener('mousemove', (event) => {});

onmousemove = (event) => { 
    var x = Math.floor(event.clientX / width * 100);
    var y = Math.floor(event.clientY / width * 100);

    logo_image.style.backgroundPosition = x + "% " + y + "%"; 
    console.log("Left? : " + x + " ; Top? : " + y + ".");
}