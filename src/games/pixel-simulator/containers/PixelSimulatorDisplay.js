import GridCell from "../components/GridCell.js";

const CELL_HEIGHT_PIXELS = 16;
const CELL_WIDTH_PIXELS = 16;
const CELL_HEIGHT_COUNT = 50;
const CELL_WIDTH_COUNT = 50;
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
    get height(){ return CELL_HEIGHT_PIXELS * CELL_HEIGHT_COUNT }
    get width(){ return CELL_WIDTH_PIXELS * CELL_WIDTH_COUNT }

    initialize(){
        this.#grid = new Array(CELL_WIDTH_COUNT).fill(new Array(CELL_HEIGHT_COUNT).fill(new GridCell()))
        if(DEBUG){ this.drawGrid() }
    }
    
    updateDisplay(){

    }

    drawGrid(){
        //Draw horizontal lines
        for(let i=0; i< this.height; i+=CELL_HEIGHT_PIXELS){
            this.context.fillRect(0, i, this.width, 1)
        }

        //Draw vertical lines
        for(let i=0; i< this.height; i+=CELL_HEIGHT_PIXELS){
            this.context.fillRect(i, 0, 1, this.height)
        }

    }

    static create(){
        return new PixelSimulatorDisplay()
    }

}