import Grid from "../components/Grid.js";
import GridView from "../views/GridView.js";
import { GRID_CONFIG } from "../config.js";

class GridController{

    #grid   
    #gridView

    constructor(){
        this.#grid = new Grid(
            GRID_CONFIG.CELL_WIDTH_COUNT, 
            GRID_CONFIG.CELL_HEIGHT_COUNT, 
            GRID_CONFIG.CELL_PIXEL_SIZE
        )
        this.#gridView = new GridView(this.#grid)   
    }

    get grid(){ return this.#grid }
    get gridView(){ return this.#gridView }


}

export default GridController