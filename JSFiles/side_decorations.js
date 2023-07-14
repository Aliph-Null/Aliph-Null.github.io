const decorations = [
    "Photos/side elements/Decorations/butterfly1.webp",
    "Photos/side elements/Decorations/butterfly2.webp",
    "Photos/side elements/Decorations/butterfly3.webp",
    "Photos/side elements/Decorations/butterfly4.webp"
];

const leaves = "Photos/side elements/Decorations/Leaves.png";

const decorationElements = document.querySelectorAll('.decoration');

const min_margin_top_px = -5;
const max_margin_top_px = 50;

function setUpDecorations(){
    // Loop through each decoration element and create an img element with a random decoration
    decorationElements.forEach((decorationElement) => {
    // Create an img element
    const img = document.createElement('img');
  
    // Set the src of the img element based on the class of the target element
    if (decorationElement.classList.contains('leaves')) {
        img.src = leaves;
    } else {
        const randomIndex = Math.floor(Math.random() * decorations.length);
        img.src = decorations[randomIndex];
    }
  
    // Append the img element to the decoration element
    decorationElement.appendChild(img);

    // Get the value of the 'scale-img' attribute as a percentage
    const scalePercentage = decorationElement.getAttribute('scale-img');

    // Convert the scale percentage to a decimal value
    const scale = parseFloat(scalePercentage) / 100;

    // Apply the transform to mirror the image vertically along the Y-axis and scale it
    if (decorationElement.classList.contains('decoration_right') || decorationElement.classList.contains('leaves_right')) {
        img.style.transform = `scaleX(-1) scale(${scale})`;
    } else {
        img.style.transform = `scale(${scale})`;
    }

    // Generate a random margin top value between min_margin_top_px and max_margin_top_px
    const randomMarginTop = Math.floor(Math.random() * (max_margin_top_px - min_margin_top_px + 1)) + min_margin_top_px;

    // Apply the random margin top value as a CSS style
    img.style.marginTop = `${randomMarginTop}px`;

    });
};
setUpDecorations();