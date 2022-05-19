import PixelSimulatorDisplay from "../containers/PixelSimulatorDisplay.js"
import Grid from "./Grid.js"

const CELL_PIXEL_SIZE = 16;
const CELL_HEIGHT_COUNT = 42;     //1080
const CELL_WIDTH_COUNT = 56;  

class PixelSimulatorEngine{

    #displayObject
    #grid
    
    constructor(){
        this.#displayObject = new PixelSimulatorDisplay()                                   //Create the view for the application
        this.#grid = new Grid(CELL_WIDTH_COUNT, CELL_HEIGHT_COUNT, CELL_PIXEL_SIZE)
        this.draw()
        this.addEventListeners()
        
    }

    getCoordsFromEvent(event){
        const convert = coord => (Math.floor(Math.round(coord) / CELL_PIXEL_SIZE))
        return {
            x: convert(event.offsetX),
            y: convert(event.offsetY)
        }
    }

    get displayElement(){ return this.#displayObject.element }
    get canvasContext(){ return this.#displayObject.context }

    draw = () => this.#grid.drawToCanvas(this.canvasContext)

    addEventListeners(){
        this.displayElement.addEventListener("mousedown", this.handleClick.bind(this))
    }

    handleClick = event => {
        const coords = this.getCoordsFromEvent(event)
        this.#grid.clickOn(coords, this.canvasContext)
    }

    sendSmallComet(targetX, targetY){
        
    }
}

export default PixelSimulatorEngine