import DisplayElement from "../components/DisplayElement.js";
import InteractableElement from "../components/InteractableElement.js";
import Grid from "../components/Grid.js";
import { GRID_CONFIG, APP_CONFIG } from "../config.js";

const options = {
    width: GRID_CONFIG.CELL_PIXEL_SIZE * GRID_CONFIG.CELL_WIDTH_COUNT,
    height: GRID_CONFIG.CELL_PIXEL_SIZE * GRID_CONFIG.CELL_HEIGHT_COUNT,
    style: `max-height: ${GRID_CONFIG.CELL_PIXEL_SIZE * GRID_CONFIG.CELL_HEIGHT_COUNT}px`,
    class: "pixel-simulator-display"
}

//RENAME CLASS
class GridView extends InteractableElement{

    #grid     
    #selectedCell                                                                                                              //The data 
    #debugElement

    constructor(grid){
        super("canvas", options)
        this.#grid = grid
        this.#debugElement = null
        this.onLeftClick = this.handleLeftClick
        this.onRightClick = this.handleRightClick
        this.draw()
    }

    get gridData(){ return this.#grid }
    get width(){ return GRID_CONFIG.CELL_PIXEL_SIZE * GRID_CONFIG.CELL_WIDTH_COUNT }
    get height(){ return GRID_CONFIG.CELL_PIXEL_SIZE * GRID_CONFIG.CELL_HEIGHT_COUNT }

    get selectedCell(){ return this.#selectedCell }

    set debugElement(element){ this.#debugElement = element }

    static getCoordsFromEvent(event){                                                              //Returns the coordinates of the cell that was clicked on
        const convert = coord => Math.floor((Math.round(coord) / GRID_CONFIG.CELL_PIXEL_SIZE))
        return {
            x: convert(event.offsetX),
            y: convert(event.offsetY)
        }
    }

    log = string => {
        if(this.#debugElement){
            this.#debugElement.innerHTML = string
        } else {
            console.log(string)
        }
    }

    draw = () => {
        this.#grid.drawToCanvas(this.context)
        if(GRID_CONFIG.DEBUG){ this.drawGrid() }
    } 

    handleRightClick = event =>{
        const coords = GridView.getCoordsFromEvent(event)
        this.#selectedCell = this.#grid.getGridCell(coords)
        if(GRID_CONFIG.DEBUG){this.log(this.#selectedCell.getCellDataAsDiv())}
    }

    handleLeftClick = event => {
        if(APP_CONFIG.DEBUG){console.log("GridView left click event triggered")}
        const coords = GridView.getCoordsFromEvent(event)
        this.#grid.getCircle(coords, 5).forEach(cell =>{
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

export default GridView