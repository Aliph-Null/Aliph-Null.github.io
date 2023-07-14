//======================= variables ====================//



const bg_pics = [  
    "Photos/Bgs/layered-waves-haikei-firewatch.svg",
    "Photos/Bgs/layered-waves-haikei-lawrencium.svg",
    "Photos/Bgs/layered-waves-haikei-pinot-noir.svg",
    "Photos/Bgs/layered-waves-haikei-playing with reds.svg", 
    "Photos/Bgs/layered-waves-haikei-royal.svg",
    "Photos/Bgs/layered-waves-haikei.svg"];

//Chanches for each to appear, doesn't need to add up to 1 nor 100, but it's easier to see the proportions this way, they are relative to one another
const bg_chances = [
    1,
    1,
    1,
    1,
    1,
    1];

//All starting and ending points for each pic/chanche
let bg_points = [];
//All chanches added up (in case >100% or > 1)
let bg_t = 0;

//======================================================//


//accent colors used om profile picture to match upper header 
const accent_colors = [
    ["#cb2d3e", "#ef473a"], //firewatch
    ["#0f0c29", "#302b63"], //lawrencium
    ["#182848", "#4b6cb7"], //pinot-noir
    ["#d31027", "#ea384d"], //playing with reds
    ["#141e30", "#243b55"], //royal
    ["#6600ff", "#4facf7"]  //haikei
];


//======================================================//



const phi = 1.61803398875;
const pi = 3.1415029;

//No need to change author's pp, pp very big
//Changing author's page profile picture though
const pics = [  "/Photos/Profile/Bodrug Denis Profile.webp",
                "/Photos/Profile/BD profile photo.webp"];
//Chanches for each to appear, doesn't need to add up to 1 nor 100, but it's easier to see the proportions this way, they are relative to one another
const chances = [
    0.3,
    0.7];

//All starting and ending points for each pic/chanche
let points = [];
//All chanches added up (in case >100% or > 1)
let t = 0;

//======================= variables ====================//
const headerBackground = document.getElementById("headerBackground");
const profilePhoto = document.querySelector('#profile_photo');


//######################################################################################################################################





function setAccentColors(index){
    profilePhoto.style.boxShadow = `0 0 var(--aura-radius) ${accent_colors[index][0]}`;
    profilePhoto.style.filter = `drop-shadow(0 0 0.75rem ${accent_colors[index][1]})`;
}

function prepare_bg_Points(){
    //Start from 0
    bg_points[0] = 0;

    //After that each point (aka the end point) will be the sum between the last (aka the start point) and the chanche[i]
    for(let i = 1; i <= bg_chances.length; i++){
        bg_points[i] = bg_points[i-1] + bg_chances[i-1];
    }

    //Of course, then t will be the last, which includes all sums
    bg_t = bg_points[bg_points.length - 1];
}

//Change header picture
function setHeaderBg() {
    prepare_bg_Points();
    
    let random = Math.random() * bg_t; // generate a random number between 0 and t

    for (let i = 0; i < bg_chances.length; i++) {
        if(random >= bg_points[i] && random < bg_points[i+1]){
            setHeaderBgIndex(i);
            break;
        }
    }
}

function setHeaderBgIndex(index){
    // Set the 'src' attribute of the selected element to the image source variable
    headerBackground.src = bg_pics[index];
    setAccentColors(index);
}



//##########################################################################################################################

function preparePoints(){
    //Start from 0
    points[0] = 0;

    //After that each point (aka the end point) will be the sum between the last (aka the start point) and the chanche[i]
    for(let i = 1; i <= chances.length; i++){
        points[i] = points[i-1] + chances[i-1];
    }

    //Of course, then t will be the last, which includes all sums
    t = points[points.length - 1];
}

function setProfilePhoto() {
    preparePoints();
    let selectedPic = pics[0];
    
    let random = Math.random() * t; // generate a random number between 0 and t

    for (let i = 0; i < chances.length; i++) {
        if(random >= points[i] && random < points[i+1]){
            SetProfilePhotoIndex(i);
            break;
        }
    }
}

function SetProfilePhotoIndex(index){
    //let selectedPic = pics[index];
    //profilePhoto.style.backgroundImage = `url(\'${selectedPic}\')`;
    profilePhoto.src = pics[index];
}

setProfilePhoto();
setHeaderBg();