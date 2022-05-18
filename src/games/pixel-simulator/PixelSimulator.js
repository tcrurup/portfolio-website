import "./style.css" assert { type: 'css'}

import PixelSimulatorComponent from './components/PixelSimulatorComponent.js'
import PixelSimulatorEngine from "./components/PixelSimulatorEngine.js"
import PixelSimulatorDisplay from "./containers/PixelSimulatorDisplay.js"

export default class PixelSimulator extends PixelSimulatorComponent{

    #engine                     //Game engine
    #display                    //View of the game board
    #container                  //The div element that 
    #parentElement              //The element that conatins this objects container

    constructor(parentElement){
        super()
        this.#engine = new PixelSimulatorEngine(parentElement)
        this.#display = new PixelSimulatorDisplay()
        this.#container = this.initializeElement()
        this.#parentElement = parentElement
        this.initialize()
    }

    addToContainer(element){
        this.#container.appendChild(element)
    }

    initializeElement(){
        super()
        
    }

    initialize(){
        this.#container.className = this.defaultClassName
        const pendingAppends = [
            this.#container
        ]
        pendingAppends.forEach( x => this.#parentElement.appendChild(x) )
    }
}
