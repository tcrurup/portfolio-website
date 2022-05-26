import "./style.css" assert { type: 'css'}

import PixelSimulatorEngine from "./components/PixelSimulatorEngine.js"
import DisplayElement from "./components/DisplayElement.js"
import DebugDisplay from "./containers/DebugDisplay.js"
import UserInterface from "./components/UserInterface.js"
import PixelSimulatorGrid from "./containers/PixelSimulatorGrid.js"
import { APP_CONFIG } from "./config.js"

export default class PixelSimulator extends DisplayElement{

    #engine                 //Game engine
    #debugDisplay           //
    #grid                   //
    #ui                     //The user interface

    constructor(parentElement){
        super()
        const opts = {
            class: "pixel-simulator-app"
        }
        this.setElementAttributes(opts)
        parentElement.appendChild(this.element)
        this.#engine = new PixelSimulatorEngine()
        this.#grid = new PixelSimulatorGrid()
        this.#ui = new UserInterface()
        this.initialize()
    }

    initialize(){
        //Initial setup and load
        //ADD ALL THE ELEMENTS
        let appElements = [
            this.#grid.element,
            this.#ui.element
        ]
        if(APP_CONFIG.DEBUG){ 
            this.#debugDisplay = new DebugDisplay()
            appElements.push(this.#debugDisplay.element)
            this.#grid.debugElement = this.#debugDisplay.element 
        }
        appElements.forEach(elem => this.appendToElement(elem))
        
        //BIND ALL THE LISTENERS
    }

    /*MAIN loop
    TICK AND UPDATE ENGINE


    */

}
