import "./style.css" assert { type: 'css'}

import PixelSimulatorComponent from './components/PixelSimulatorComponent.js'
import PixelSimulatorEngine from "./components/PixelSimulatorEngine.js"
import PixelSimulatorDisplay from "./containers/PixelSimulatorDisplay.js"
import DebugDisplay from "./containers/DebugDisplay"

export default class PixelSimulator extends PixelSimulatorComponent{

    #engine                     //Game engine
    #parentElement              //The element that contains this application

    constructor(parentElement){
        super()
        this.#engine = new PixelSimulatorEngine()
        this.#debugger = new DebugDisplay()
        this.#parentElement = parentElement
        this.initialize()
    }

    initialize(){
        this.#parentElement.appendChild(this.#engine.displayElement)      //Add the viewfrom the game engine to the dom
        this.#parentElement.appendChild(this.#debugger.displayElement)
    }
}
