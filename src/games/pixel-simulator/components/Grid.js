import Soil from './Soil.js'

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

    getGridCell(coords){
        return this.#gridCells.filter(cell => cell.x == coords.x).filter(cell => cell.y == coords.y)[0]
    }

    getCircle(centerCoords, radius){
        return this.#gridCells.filter(cell => cell.getDistanceFrom(centerCoords) < radius)
    }

    drawToCanvas(context){
        this.#gridCells.forEach(cell => cell.draw(context))
    }

    initialize(){
        for(let x=0; x< this.#width; x++){
            for(let y=0; y<this.#height; y++){
                this.#gridCells.push(new Soil(x, y, this.#pixelSize))
            }
        }
    }
}

export default Grid