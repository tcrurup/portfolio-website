import "./style.css" assert { type: 'css'}

import PixelSimulatorComponent from './components/PixelSimulatorComponent.js'
import PixelSimulatorEngine from "./components/PixelSimulatorEngine.js"
import PixelSimulatorDisplay from "./containers/PixelSimulatorDisplay.js"

export default class PixelSimulator extends PixelSimulatorComponent{

    #engine                     //Game engine
    #display                    //View of the game board
    #container                  //The div element that 
    #parentElement              //The element that contains this objects container

    constructor(parentElement){
        super()
        this.#engine = new PixelSimulatorEngine(parentElement)
        this.#display = new PixelSimulatorDisplay()
        this.#parentElement = parentElement
        this.initialize()
    }

    addToParentElement(elem){
        this.#parentElement.appendChild(elem)
    }

    initialize(){
        this.addToParentElement(this.#display.element)
    }
}
