import "./style.css" assert { type: 'css'}
import GridController from "./controllers/GridController.js"
import PixelSimulatorEngine from "./components/PixelSimulatorEngine.js"
import DisplayElement from "./components/DisplayElement.js"
import DebugDisplay from "./containers/DebugDisplay.js"
import UserInterface from "./containers/UserInterface.js"
import { APP_CONFIG } from "./config.js"

const options = {
    class: "pixel-simulator-app"
}

export default class PixelSimulator extends DisplayElement{

    #engine                 //Game engine that will manipulate game data
    #debugDisplay           //Display element that will show any debug information if enabled
    #ui                     //The user interface
    #gridController

    constructor(parentElement){
        super("div", options)
        parentElement.appendChild(this.element)
        this.#engine = new PixelSimulatorEngine()
        this.#gridController = new GridController()                           
        this.#ui = new UserInterface(this.#gridController.actions)
        this.initialize()
    }

    draw(){ this.#gridController.draw() }

    initialize(){
        //Initial setup and load
        //ADD ALL THE ELEMENTS
        let appElements = [
            this.#gridController.element,
            this.#ui.element
        ]
        if(APP_CONFIG.DEBUG){ 
            this.#debugDisplay = new DebugDisplay()
            appElements.push(this.#debugDisplay.element)
            this.#gridController.debugElement = this.#debugDisplay.element 
        }
        appElements.forEach(elem => this.appendToElement(elem))
        this.draw()
        //BIND ALL THE LISTENERS
    }

    /*MAIN loop
    TICK AND UPDATE ENGINE


    */

}
