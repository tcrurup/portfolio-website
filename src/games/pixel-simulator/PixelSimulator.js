import "./style.css" assert { type: 'css'}

import PixelSimulatorComponent from './components/PixelSimulatorComponent.js'
import PixelSimulatorEngine from "./components/PixelSimulatorEngine.js"
import DisplayElement from "./components/DisplayElement.js"


export default class PixelSimulator extends DisplayElement{

    #engine                     //Game engine

    constructor(parentElement){
        super()
        const opts = {
            class: "pixel-simulator-app"
        }
        this.setElementAttributes(opts)
        parentElement.appendChild(this.element)
        this.#engine = new PixelSimulatorEngine()
        this.initialize()
    }

    initialize(){
        this.#engine.allElements.forEach(elem => this.appendToElement(elem)) 
    }
}
