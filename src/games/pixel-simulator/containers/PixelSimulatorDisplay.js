import DisplayElement from "../components/DisplayElement.js";

const CELL_PIXEL_SIZE = 16;
const CELL_HEIGHT_COUNT = 42;     //1080
const CELL_WIDTH_COUNT = 56;      //1920
const DEBUG = false;

const opt = {
    width: "80px"
}

export default class PixelSimulatorDisplay extends DisplayElement{

    #grid

    constructor(){
        super("canvas")
        const opts = {
            width: CELL_PIXEL_SIZE * CELL_WIDTH_COUNT,
            height: CELL_PIXEL_SIZE * CELL_HEIGHT_COUNT,
            className: "pixel-simulator-display"
        }
        this.setElementAttributes(opts)
        this.initialize()
    }

    get context(){ return this.element.getContext('2d')}
    get height(){ return CELL_PIXEL_SIZE * CELL_HEIGHT_COUNT }
    get width(){ return CELL_PIXEL_SIZE * CELL_WIDTH_COUNT }

    initialize(){
        if(DEBUG){ this.drawGrid() }      
    }
    
    addEventToElement(){

    }

    logMousePos(event){
        
        const convert = coord => (Math.ceil(Math.round(coord) / CELL_PIXEL_SIZE))
        const coords = {
            x: convert(event.offsetX),
            y: convert(event.offsetY)
        }
        console.log(coords)
        
    } 

    drawGrid(){
        //Draw horizontal lines
        this.context.fillStyle = "black"
        for(let i=0; i< this.height; i+=CELL_PIXEL_SIZE){
            this.context.fillRect(0, i, this.width, 1)
        }

        //Draw vertical lines
        for(let i=0; i< this.width; i+=CELL_PIXEL_SIZE){
            this.context.fillRect(i, 0, 1, this.height)
        }

    }

    update(){
        this.#grid.forEach(array => array.forEach())
    }

    mouseHoverCellData(output){
        
    }

    static create(){
        return new PixelSimulatorDisplay()
    }

}