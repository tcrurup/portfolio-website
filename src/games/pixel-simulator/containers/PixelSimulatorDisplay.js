import DisplayElement from "../components/DisplayElement.js";
import { GRID_CONFIG } from "../config.js";

export default class PixelSimulatorDisplay extends DisplayElement{

    #grid

    constructor(){
        super("canvas")
        const opts = {
            width: GRID_CONFIG.CELL_PIXEL_SIZE * GRID_CONFIG.CELL_WIDTH_COUNT,
            height: GRID_CONFIG.CELL_PIXEL_SIZE * GRID_CONFIG.CELL_HEIGHT_COUNT,
            class: "pixel-simulator-display"
        }
        this.setElementAttributes(opts)
        this.initialize()
    }

    initialize(){
        if(GRID_CONFIG.DEBUG){ this.activateDebugMode() }      
    }

    activateDebugMode(){
        this.drawGrid()
        this.addEventToElement("mousemove", this.handleMouseMove)
    }

    static create(){
        return new PixelSimulatorDisplay()
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