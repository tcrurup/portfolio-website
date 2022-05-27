import Grid from "./Grid.js"
import { GRID_CONFIG } from "../config.js"

class PixelSimulatorEngine{

    #grid
    #viewObject
    

    constructor(){                                           
        this.#grid = new Grid(
            GRID_CONFIG.CELL_WIDTH_COUNT, 
            GRID_CONFIG.CELL_HEIGHT_COUNT, 
            GRID_CONFIG.CELL_PIXEL_SIZE
        )
    }

    set viewObject(obj){ this.#viewObject = obj }

    get grid(){ return this.#grid }

    draw(){

    }
}

export default PixelSimulatorEngine