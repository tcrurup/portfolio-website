import GridCell from "./GridCell.js"

class Grid{
    
    #width
    #height
    #pixelSize
    #gridCells
    
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

    clickOn(coords, context){
        let target = this.#gridCells.filter(cell => cell.x == coords.x).filter(cell => cell.y == coords.y)
        if(target.length > 0){
            target[0].clickOn(context)
        }
    }

    

}

export default Grid