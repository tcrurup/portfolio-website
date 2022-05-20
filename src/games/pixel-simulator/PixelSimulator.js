import "./style.css" assert { type: 'css'}

import PixelSimulatorEngine from "./components/PixelSimulatorEngine.js"
import DisplayElement from "./components/DisplayElement.js"


export default class PixelSimulator extends DisplayElement{

    #engine                                                        //Game engine

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

    get allElements(){ return this.#engine.allElements }
    
    initialize(){
        this.allElements.forEach(elem => this.appendToElement(elem)) 
    }
}
