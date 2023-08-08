const themes = {
//  [Name]              [background] [accent1] [accent2]
    "firewatch":        ["#0F0716", "#cb2d3e", "#ef473a"],
    "lawrencium":       ["#0F0716", "#0f0c29", "#302b63"],
    "pinot-noir":       ["#0F0716", "#182848", "#4b6cb7"],
    "playing with reds":["#0F0716", "#d31027", "#ea384d"],
    "royal":            ["#0F0716", "#141e30", "#243b55"], 
    "haikei":           ["#0F0716", "#6600ff", "#4facf7"]  
};

function hexToRgb(hex) {
    // Remove the '#' symbol if present
    if (hex.startsWith('#')) {
      hex = hex.slice(1);
    }
  
    // Split the hex color code into three parts: R, G, and B
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
  
    // Return the RGB values as an array
    return [r, g, b];
}

function rgbToString(rgb) {
    return rgb.join(', ');
}

function setRootAccents(){
    
}

function changeAccentByIndex(index){
    bg_color  = rgbToString(hexToRgb(themes[index][0]));
    ac1_color = rgbToString(hexToRgb(themes[index][1]));
    ac2_color = rgbToString(hexToRgb(themes[index][2]));

    
}

function changeAccentByTheme(theme){

}