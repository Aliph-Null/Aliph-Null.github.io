window.onload = function() {
    console.log("Page loaded");

    const menu = document.getElementById("main");
    Array.from(document.getElementsByClassName("menu-item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
        }
    });
};

const clouds = [
    "Photos/Elements/Cloud 1.png",
    "Photos/Elements/Cloud 2.png"
]

function createCloud() {
    // Create an image element
    const cloudImage = document.createElement("img");

    // Set class to "cloud"
    cloudImage.classList.add("cloud");

    // Set image source randomly from the clouds array
    const randomCloud = clouds[Math.floor(Math.random() * clouds.length)];
    cloudImage.src = randomCloud;

    // Set random position within the viewport
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    const randomX = Math.random() * (viewportWidth - 300); // Adjust 100 based on the cloud image size
    const randomY = Math.random() * (viewportHeight - 300); // Adjust 100 based on the cloud image size

    cloudImage.style.left = `${randomX}px`;
    cloudImage.style.top = `${randomY}px`;

    // Set random rotation
    const randomRotation = Math.random() * 360; // Degrees
    cloudImage.style.transform = `rotate(${randomRotation}deg)`;

    // Set random size within predefined values
    const minSize = 200; // Adjust based on the minimum size you want
    const maxSize = 900; // Adjust based on the maximum size you want
    const randomSize = Math.min(minSize + Math.random() * (maxSize - minSize), viewportWidth);

    cloudImage.style.width = `${randomSize}px`;
    cloudImage.style.height = "auto"; // Set one size to "auto" to maintain aspect ratio

    // Set random blur between 3px and 12px
    const randomBlur = Math.random() * 9 + 3; // Range from 3 to 12
    cloudImage.style.filter = `blur(${randomBlur}px)`;

    // Set random brightness between 110% and 120%
    const randomBrightness = Math.random() * 10 + 110; // Range from 110% to 120%
    cloudImage.style.filter += ` brightness(${randomBrightness}%)`;

    // Set random opacity between 55% and 60%
    const randomOpacity = Math.random() * 5 + 55; // Range from 55% to 60%
    cloudImage.style.opacity = `${randomOpacity / 100}`;

    // Append the image to the body
    document.body.appendChild(cloudImage);

    const my_cloud_data = [Math.random() * 50 - 25, [Math.random() * 20 - 10]];

    // Add mousemove event listener for parallax motion
    document.addEventListener("mousemove", function (event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        // Calculate parallax effect based on mouse position
        const parallaxX = (mouseX / viewportWidth) * my_cloud_data[0]; // Adjust the factor for the parallax effect
        const parallaxY = (mouseY / viewportHeight) * my_cloud_data[1]; // Adjust the factor for the parallax effect

        // Apply parallax motion with animation delay
        cloudImage.style.transition = "transform 5s ease-in-ease-out";
        cloudImage.style.transform = `translate(${parallaxX}px, ${parallaxY}px) rotate(${randomRotation}deg)`;
    });

    // Reset the transform on mouse leave
    cloudImage.addEventListener("mouseleave", function () {
        cloudImage.style.transition = "transform 0.3s ease-out";
        cloudImage.style.transform = `rotate(${randomRotation}deg)`;
    });
}