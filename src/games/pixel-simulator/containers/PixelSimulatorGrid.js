import DisplayElement from "../components/DisplayElement.js";
import Grid from "../components/Grid.js";
import { GRID_CONFIG } from "../config.js";

const options = {
    width: GRID_CONFIG.CELL_PIXEL_SIZE * GRID_CONFIG.CELL_WIDTH_COUNT,
    height: GRID_CONFIG.CELL_PIXEL_SIZE * GRID_CONFIG.CELL_HEIGHT_COUNT,
    class: "pixel-simulator-display"
}

class PixelSimulatorGrid extends DisplayElement{

    #grid

    constructor(){
        super("canvas", options)
        this.#grid = new Grid(GRID_CONFIG.CELL_WIDTH_COUNT, GRID_CONFIG.CELL_HEIGHT_COUNT, GRID_CONFIG.CELL_PIXEL_SIZE)
        if(GRID_CONFIG.DEBUG){ this.drawGrid() }
    }

    get gridData(){ return this.#grid }

    draw = () => this.#grid.drawToCanvas(this.context) 

    //DEBUG FUNCTIONS
    drawGrid(){
        //Draw horizontal lines
        this.context.fillStyle = "black"
        for(let i=0; i< this.height; i+=GRID_CONFIG.CELL_PIXEL_SIZE){
            this.context.fillRect(0, i, this.width, 1)
        }

        //Draw vertical lines
        for(let i=0; i< this.width; i+=GRID_CONFIG.CELL_PIXEL_SIZE){
            this.context.fillRect(i, 0, 1, this.height)
        }

    }

    handleMouseMove = event => {
        const convert = coord => (Math.ceil(Math.round(coord) / GRID_CONFIG.CELL_PIXEL_SIZE))
        const coords = {
            x: convert(event.offsetX),
            y: convert(event.offsetY)
        }
        return coords
    }

}

export default PixelSimulatorGrid