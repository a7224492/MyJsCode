(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
class GameNode {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
}

module.exports = GameNode;
},{}],2:[function(require,module,exports){
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
},{"./gameNode":1,"./util":3}],3:[function(require,module,exports){
class Util {
    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms))
    }
}

module.exports = new Util();
},{}]},{},[2]);
