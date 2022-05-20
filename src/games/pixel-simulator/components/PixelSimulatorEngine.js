import PixelSimulatorDisplay from "../containers/PixelSimulatorDisplay.js"
import DebugDisplay from "../containers/DebugDisplay.js";
import Grid from "./Grid.js"


const CELL_PIXEL_SIZE = 16;
const CELL_HEIGHT_COUNT = 42;     
const CELL_WIDTH_COUNT = 56;  

class PixelSimulatorEngine{

    #gridDisplay
    #grid
    #elements
    #debugDisplay
    
    constructor(){
        this.#gridDisplay = new PixelSimulatorDisplay()                                         //Create the view for the grid used in the game
        this.#debugDisplay = new DebugDisplay()                                                 //Create a debug display element
        this.#grid = new Grid(CELL_WIDTH_COUNT, CELL_HEIGHT_COUNT, CELL_PIXEL_SIZE)
        this.#elements = [
            this.#gridDisplay.element, 
            this.#debugDisplay.element
        ]
        this.draw()
        this.addEventListeners()
    }
    
    get canvasContext(){ return this.#gridDisplay.context }
    get allElements(){ return this.#elements }

    getCoordsFromEvent(event){                                                              //Returns the coordinates of the cell that was clicked on
        const convert = coord => (Math.floor(Math.round(coord) / CELL_PIXEL_SIZE))
        return {
            x: convert(event.offsetX),
            y: convert(event.offsetY)
        }
    }

    handleMouseOverGrid = event => {
        const coords = this.getCoordsFromEvent(event)
        const cell = this.#grid.getGridCell(coords)
    }

    draw = () => this.#grid.drawToCanvas(this.canvasContext)                                //Draws the current grid onto the canvas

    addEventListeners(){
        this.#gridDisplay.addEventToElement("mousedown", this.handleClick.bind(this))
        this.#gridDisplay.addEventToElement("mousemove", this.handleMouseOverGrid.bind(this))
    }

    handleClick = event => {
        const coords = this.getCoordsFromEvent(event)
        this.#grid.getCircle(coords, 5).forEach(cell =>{
            cell.lowerBy(10)
        })
        this.draw()
    }


    
}

export default PixelSimulatorEngine