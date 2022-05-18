import Grid from "../components/Grid.js";
import GridCell from "../components/GridCell.js";

const CELL_PIXEL_SIZE = 16;
const CELL_HEIGHT_COUNT = 42;     //1080
const CELL_WIDTH_COUNT = 56;      //1920
const DEBUG = true;

export default class PixelSimulatorDisplay{

    #displayElement
    #grid

    constructor(){
        let elem = document.createElement("canvas")
        elem.width= this.width
        elem.height=this.height
        elem.className = "pixel-simulator-display"
        this.#displayElement = elem
        this.initialize()
    }

    get element(){ return this.#displayElement }
    get context(){ return this.element.getContext('2d')}
    get height(){ return CELL_PIXEL_SIZE * CELL_HEIGHT_COUNT }
    get width(){ return CELL_PIXEL_SIZE * CELL_WIDTH_COUNT }

    initialize(){
        this.#grid = new Grid(CELL_WIDTH_COUNT, CELL_HEIGHT_COUNT, CELL_PIXEL_SIZE)
        if(DEBUG){ this.drawGrid() }
        this.draw()        
    }
    
    draw = () => this.#grid.drawToCanvas(this.context)

    drawGrid(){
        //Draw horizontal lines
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

    static create(){
        return new PixelSimulatorDisplay()
    }

}