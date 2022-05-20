import PixelSimulatorGrid from "../containers/PixelSimulatorGrid.js"
import DebugDisplay from "../containers/DebugDisplay.js";
import Grid from "./Grid.js"


const CELL_PIXEL_SIZE = 16;
const CELL_HEIGHT_COUNT = 42;     
const CELL_WIDTH_COUNT = 56;  

class PixelSimulatorEngine{

    #grid
    #elements
    #debugDisplay
    
    constructor(){
        this.#grid = new PixelSimulatorGrid()                                         //Create the view for the grid used in the game
        this.#debugDisplay = new DebugDisplay()                                                 //Create a debug display element
        this.#elements = [
            this.#grid.element, 
            this.#debugDisplay.element
        ]
        this.draw()
        this.addEventListeners()
    }
    
    get canvasContext(){ return this.#grid.context }
    get allElements(){ return this.#elements }

    getCoordsFromEvent(event){                                                              //Returns the coordinates of the cell that was clicked on
        const convert = coord => (Math.floor(Math.round(coord) / CELL_PIXEL_SIZE))
        return {
            x: convert(event.offsetX),
            y: convert(event.offsetY)
        }
    }

    draw = () => this.#grid.draw()                             //Draws the current grid onto the canvas

    addEventListeners(){
        this.#grid.addEventToElement("mousedown", this.handleClick.bind(this))
    }

    handleClick = event => {
        const coords = this.getCoordsFromEvent(event)
        this.#grid.gridData.getCircle(coords, 5).forEach(cell =>{
            cell.lowerBy(10)
        })
        this.draw()
    }


    
}

export default PixelSimulatorEngine