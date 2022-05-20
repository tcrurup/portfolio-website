import "./style.css" assert { type: 'css'}

import PixelSimulatorComponent from './components/PixelSimulatorComponent.js'
import PixelSimulatorEngine from "./components/PixelSimulatorEngine.js"
import PixelSimulatorDisplay from "./containers/PixelSimulatorDisplay.js"
import DebugDisplay from "./containers/DebugDisplay.js"

export default class PixelSimulator extends PixelSimulatorComponent{

    #engine                     //Game engine
    #parentElement              //The element that contains this application


    constructor(parentElement){
        super()
        this.#engine = new PixelSimulatorEngine()
        this.#parentElement = parentElement
        this.initialize()
    }

    initialize(){
        const elements = this.#engine.allElements
        elements.forEach(elem => this.#parentElement.appendChild(elem)) 
    }
}
