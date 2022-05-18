import "./style.css" assert { type: 'css'}
import PixelSimulatorComponent from './components/PixelSimulatorComponent.js'
import PixelSimulatorEngine from "./components/PixelSimulatorEngine.js"
import PixelSimulatorDisplay from "./containers/PixelSimulatorDisplay.js"

export default class PixelSimulator extends PixelSimulatorComponent{

    #engine     //Game Engine
    #display
    #pendingAppends //
    #container
    #parentElement 

    
    
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

    initialize(){
        this.#container.className = this.defaultClassName
        this.#pendingAppends = [
            this.#container
        ]
        this.#pendingAppends.forEach( x => this.#parentElement.appendChild(x) )
    }
}
