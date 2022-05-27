import Soil from './Soil.js'

class Grid{
    
    #width
    #height
    #pixelSize
    #gridCells
    #action
    
    constructor(width, height, pixelSize){
        this.#width = width
        this.#height = height 
        this.#pixelSize = pixelSize
        this.#action = null
        this.#gridCells = []
        this.initialize()
    }

    get allActions(){
        return {
            "Circle": () => this.action = this.smallCrater
        }
    }

    get action(){ return this.#action }

    set action(a){ 
        console.log('setting action')
        this.#action = a
    }

    getGridCell = coords => this.#gridCells.filter(cell => cell.x == coords.x).filter(cell => cell.y == coords.y)[0]

    getCircle = (centerCoords, radius=5) => this.#gridCells.filter(cell => cell.getDistanceFrom(centerCoords) < radius)

    smallCrater(coords){
        this.getCircle(coords, 5).forEach(cell =>{
            cell.lowerBy(10)
        })
    }
    
    setCurrentAction(key){ this.#action = this.allActions[key] }
    
    drawToCanvas = context => this.#gridCells.forEach(cell => cell.draw(context))

    initialize(){
        for(let x=0; x< this.#width; x++){
            for(let y=0; y<this.#height; y++){
                this.#gridCells.push(new Soil(x, y, this.#pixelSize))
            }
        }
    }
    
}

export default Grid