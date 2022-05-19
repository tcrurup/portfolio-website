import Grid from "../components/Grid.js";
import GridCell from "../components/GridCell.js";

const CELL_PIXEL_SIZE = 16;
const CELL_HEIGHT_COUNT = 42;     //1080
const CELL_WIDTH_COUNT = 56;      //1920
const DEBUG = false;

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
        this.element.addEventListener("mousedown", this.onMouseDown.bind(this) )
        this.draw()  
        if(DEBUG){ this.drawGrid() }      
    }
    
    draw = () => this.#grid.drawToCanvas(this.context)

    logMousePos(event){
        
        const convert = coord => (Math.ceil(Math.round(coord) / CELL_PIXEL_SIZE))
        const coords = {
            x: convert(event.offsetX),
            y: convert(event.offsetY)
        }
        console.log(coords)
        
    } 

    onMouseDown = event => {
        const coords = this.getCoordsFromEvent(event)
        console.log(coords)
        this.#grid.clickOn(coords, this.context)
    }

    getCoordsFromEvent(event){
        const convert = coord => (Math.floor(Math.round(coord) / CELL_PIXEL_SIZE))
        return {
            x: convert(event.offsetX),
            y: convert(event.offsetY)
        }
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

    static create(){
        return new PixelSimulatorDisplay()
    }

}