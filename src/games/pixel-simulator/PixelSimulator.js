import "./style.css" assert { type: 'css'}
import GridController from "./controllers/GridController.js"
import PixelSimulatorEngine from "./components/PixelSimulatorEngine.js"
import DisplayElement from "./components/DisplayElement.js"
import DebugDisplay from "./containers/DebugDisplay.js"
import UserInterface from "./containers/UserInterface.js"
import Grid from "./components/Grid.js"
import GridView from "./views/GridView.js"
import { APP_CONFIG, GRID_CONFIG } from "./config.js"

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
        this.#ui = new UserInterface(this.#gridController.grid.allActions)
        this.initialize()
    }

    draw(){ this.#gridController.grid.drawToCanvas(this.#gridController.gridView.context) }//this.#gridController.grid.drawToCanvas(this.#engine.cellData)}

    initialize(){
        //Initial setup and load
        //ADD ALL THE ELEMENTS
        let appElements = [
            this.#gridController.gridView.element,
            this.#ui.element
        ]
        if(APP_CONFIG.DEBUG){ 
            this.#debugDisplay = new DebugDisplay()
            appElements.push(this.#debugDisplay.element)
            this.#gridController.gridView.debugElement = this.#debugDisplay.element 
        }
        appElements.forEach(elem => this.appendToElement(elem))
        this.draw()
        //BIND ALL THE LISTENERS
    }

    /*MAIN loop
    TICK AND UPDATE ENGINE


    */

}
