// Calculates the Perlin noise value at the given (x, y) coordinates
function noise(x, y) {
    // Constants for square root of 2 and other values used in the algorithm
    const unit = 1 / Math.sqrt(2);
    const X = Math.floor(x);
    const Y = Math.floor(y);
    const xf = x - X;
    const yf = y - Y;
    // Call the fade function on the x and y values
    const u = fade(xf);
    const v = fade(yf);
    // Calculate dot products of the grid vectors and the distance vectors
    const a = dot(grid(X, Y), xf, yf);
    const b = dot(grid(X + 1, Y), xf - 1, yf);
    const c = dot(grid(X, Y + 1), xf, yf - 1);
    const d = dot(grid(X + 1, Y + 1), xf - 1, yf - 1);
    // Linearly interpolate the dot products
    return lerp(lerp(a, b, u), lerp(c, d, u), v);
  }
  
  // Calculates the dot product of the given grid vector and the given x and y values
  function dot(gx, x, y) {
    return gx[0] * x + gx[1] * y;
  }
  
  // Smoothes the transition between grid points
  function fade(t) {
    return t * t * t * (t * (t * 6 - 15) + 10);
  }
  
  // Linearly interpolates between two values based on a given t value
  function lerp(a, b, t) {
    return (1 - t) * a + t * b;
  }
  
  // Returns a random vector from the grid based on the given x and y values
  function grid(x, y) {
    // Array of pre-defined random vectors for the grid
    const randoms = [
      [0.36, 0.48],
      [-0.8, -0.6],
      [0.96, -0.8],
      [0.84, 0.2],
      [-0.72, 0.68],
      [-0.32, 0.96],
      [0.2, -0.84],
      [0.68, -0.72]
    ];
    // Hash the x and y values to get a random index for the random vector
    const hash = (x * 31 + y) * 17 % 8;
    return randoms[hash];
  }
  