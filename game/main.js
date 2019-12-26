let GameNode = require('./gameNode');
let util = require('./util');

function initWebGl() {
    const canvas = document.querySelector("#glcanvas");
    // Initialize the GL context
    const gl = canvas.getContext("webgl");

    // Only continue if WebGL is available and working
    if (!gl) {
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    // Set clear color to black, fully opaque
    gl.clearColor(0.0, 0.0, 0.0, 1.0);
    // Clear the color buffer with specified clear color
    gl.clear(gl.COLOR_BUFFER_BIT);
}

//
// start here
//
async function main() {
    initWebGl();
    let isFinish = false;
    while (!isFinish) {
        await util.sleep(1000);
        console.log('sleep');
    }
}

main();