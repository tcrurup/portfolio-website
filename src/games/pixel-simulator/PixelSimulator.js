import "./style.css" assert { type: 'css'}

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
    #gridView               //The view for visualizing and interacting with the data
    #grid                   //The object that holds all of the actual grids data
    #ui                     //The user interface

    constructor(parentElement){
        super("div", options)
        parentElement.appendChild(this.element)
        this.#engine = new PixelSimulatorEngine()                    
        this.#grid = new Grid(
            GRID_CONFIG.CELL_WIDTH_COUNT, 
            GRID_CONFIG.CELL_HEIGHT_COUNT, 
            GRID_CONFIG.CELL_PIXEL_SIZE
        )
        this.#gridView = new GridView(this.#grid)             //Should handle the view and everything related to drawing it. 
        this.#ui = new UserInterface()
        this.initialize()
    }

    draw(){ this.#grid.drawToCanvas(this.#gridView.context) }//this.#grid.drawToCanvas(this.#engine.cellData)}

    initialize(){
        //Initial setup and load
        //ADD ALL THE ELEMENTS
        let appElements = [
            this.#gridView.element,
            this.#ui.element
        ]
        if(APP_CONFIG.DEBUG){ 
            this.#debugDisplay = new DebugDisplay()
            appElements.push(this.#debugDisplay.element)
            this.#gridView.debugElement = this.#debugDisplay.element 
        }
        appElements.forEach(elem => this.appendToElement(elem))
        this.draw()
        //BIND ALL THE LISTENERS
    }

    /*MAIN loop
    TICK AND UPDATE ENGINE


    */

}
