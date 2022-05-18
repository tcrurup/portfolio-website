import PixelSimulator from "./games/pixel-simulator/PixelSimulator.js"

function main(){
    new PixelSimulator(document.body)
}

document.addEventListener("DOMContentLoaded", main)