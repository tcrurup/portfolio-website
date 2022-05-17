import '/main.css'
import PixelSimulator from "./games/pixel-simulator/PixelSimulator"

function main(){
    console.log("loading main")
    new PixelSimulator(document.body)
}

document.addEventListener("DOMContentLoaded", main)