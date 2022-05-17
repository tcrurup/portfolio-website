import PixelSimulatorEngine from "./games/pixel-simulator/PixelSimulatorEngine"

function main(){
    console.log("loading main")
    new PixelSimulatorEngine(document.body)
}

document.addEventListener("DOMContentLoaded", main)