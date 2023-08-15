const themes = {
//  [Name]              [background] [accent1] [accent2]
    "firewatch":        ["#0F0716", "#cb2d3e", "#ef473a"],
    "lawrencium":       ["#0F0716", "#0f0c29", "#302b63"],
    "pinot-noir":       ["#0F0716", "#182848", "#4b6cb7"],
    "playing with reds":["#0F0716", "#d31027", "#ea384d"],
    "royal":            ["#0F0716", "#141e30", "#243b55"], 
    "haikei":           ["#0F0716", "#6600ff", "#4facf7"]  
};

const theme_names = [
    "firewatch",
    "lawrencium",
    "pinot-noir",
    "playing with reds",
    "royal",
    "haikei"
];

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

function lightenRGB(rgb, factor) {
    const [r, g, b] = rgb.map(component => Math.min(Math.round(component * factor), 255));
    return [r, g, b];
  }  

function changeAccentByIndex(index) {
    const bg_color = hexToRgb(themes[theme_names[index]][0]);
    const ac1_color = hexToRgb(themes[theme_names[index]][1]);
    const ac2_color = hexToRgb(themes[theme_names[index]][2]);
    
    //console.log("Theme: " + themes[theme_names[index]]);
    
    // Generate a light variant for accent-3 based on accent-1
    const lightFactor = 1.2; // Adjust this factor to control the lightness
    const ac3_color = lightenRGB(ac2_color, lightFactor);

    // Update CSS variables
    document.documentElement.style.setProperty('--bg-accent', rgbToString(bg_color));
    document.documentElement.style.setProperty('--accent-1', `rgb(${rgbToString(ac1_color)})`);
    document.documentElement.style.setProperty('--accent-2', `rgb(${rgbToString(ac2_color)})`);
    document.documentElement.style.setProperty('--accent-3', `rgb(${rgbToString(ac3_color)})`);
}
