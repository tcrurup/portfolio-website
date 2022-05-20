import DisplayElement from "../components/DisplayElement.js";
import Grid from "../components/Grid.js";
import { GRID_CONFIG, APP_CONFIG } from "../config.js";

const options = {
    width: GRID_CONFIG.CELL_PIXEL_SIZE * GRID_CONFIG.CELL_WIDTH_COUNT,
    height: GRID_CONFIG.CELL_PIXEL_SIZE * GRID_CONFIG.CELL_HEIGHT_COUNT,
    class: "pixel-simulator-display"
}

class PixelSimulatorGrid extends DisplayElement{

    #grid     
    #selectedCell                                                                                                              //The data 

    constructor(){
        super("canvas", options)
        this.#grid = new Grid(
            GRID_CONFIG.CELL_WIDTH_COUNT, 
            GRID_CONFIG.CELL_HEIGHT_COUNT, 
            GRID_CONFIG.CELL_PIXEL_SIZE
        )
        if(GRID_CONFIG.DEBUG){ this.drawGrid() }
        
        this.onLeftClick = this.handleLeftClick
        this.onRightClick = this.handleRightClick
    }

    get gridData(){ return this.#grid }
    get width(){ return GRID_CONFIG.CELL_PIXEL_SIZE * GRID_CONFIG.CELL_WIDTH_COUNT }
    get height(){ return GRID_CONFIG.CELL_PIXEL_SIZE * GRID_CONFIG.CELL_HEIGHT_COUNT }

    draw = () => {
        this.#grid.drawToCanvas(this.context)
        if(GRID_CONFIG.DEBUG){ this.drawGrid() }
    } 

    getCoordsFromEvent(event){                                                              //Returns the coordinates of the cell that was clicked on
        const convert = coord => (Math.floor(Math.round(coord) / GRID_CONFIG.CELL_PIXEL_SIZE))
        return {
            x: convert(event.offsetX),
            y: convert(event.offsetY)
        }
    }

    handleRightClick = event =>{
        if(GRID_CONFIG.DEBUG){console.log("PixelSimulatorGrid right click event triggered")}
        
    }

    handleLeftClick = event => {
        if(APP_CONFIG.DEBUG){console.log("PixelSimulatorGrid left click event triggered")}
        const coords = this.getCoordsFromEvent(event)
        this.gridData.getCircle(coords, 5).forEach(cell =>{
            cell.lowerBy(10)
        })
        this.draw()
    }

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