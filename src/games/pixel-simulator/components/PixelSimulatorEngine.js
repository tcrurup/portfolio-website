import PixelSimulatorGrid from "../containers/PixelSimulatorGrid.js"
import DebugDisplay from "../containers/DebugDisplay.js";
import Grid from "./Grid.js"


const CELL_PIXEL_SIZE = 16;

class PixelSimulatorEngine{

    #pixelSimulatorGrid
    #elements
    #debugDisplay
    
    constructor(){
        this.#pixelSimulatorGrid = new PixelSimulatorGrid()                                         //Create the view for the grid used in the game
        this.#debugDisplay = new DebugDisplay()                                                     //Create a debug display element
        this.#elements = [
            this.#pixelSimulatorGrid.element, 
            this.#debugDisplay.element
        ]
        this.draw()
    }

    get elementsToAppend(){ return this.#elements }

    draw = () => this.#pixelSimulatorGrid.draw()                             //Draws the current grid onto the canvas

}

export default PixelSimulatorEngine