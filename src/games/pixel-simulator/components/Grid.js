import GridCell from "./GridCell.js"

class Grid{
    
    #width
    #height
    #pixelSize
    #gridCells
    #sprites
    
    constructor(width, height, pixelSize){
        this.#width = width
        this.#height = height 
        this.#pixelSize = pixelSize
        this.#gridCells = []
        this.initialize()
    }

    drawToCanvas(context){
        this.#gridCells.forEach(cell => cell.draw(context))
    }

    initialize(){
        for(let x=0; x< this.#width; x++){
            for(let y=0; y<this.#height; y++){
                this.#gridCells.push(new GridCell(x, y, this.#pixelSize))
            }
        }
    }


}

export default Grid