import Ground from './gridCells/Ground.js'

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
            "Small Crater": () => this.action = coords => this.spawnCrater(coords, 5, 10),
            "Medium Crater": () => this.action = coords => this.spawnCrater(coords, 9, 12),
            "Large Crater": () => this.action = coords => this.spawnCrater(coords, 13, 14),
            "Reset": () => this.reset()
        }
    }
    get action(){ return this.#action }
    set action(a){ this.#action = a }

    getGridCell = coords => this.#gridCells.filter(cell => cell.x == coords.x).filter(cell => cell.y == coords.y)[0]
    getCircle = ( centerCoords, radius=5 ) => this.#gridCells.filter(cell => cell.getDistanceFrom(centerCoords) < radius)
    reset = () => this.#gridCells.forEach(cell => cell.reset())

    spawnCrater = ( coords, radius, depth ) => this.getCircle( coords, radius ).forEach( cell =>{ cell.lowerBy(depth) })
    
    setCurrentAction( key ){ this.#action = this.allActions[key] }
    drawToCanvas = context => this.#gridCells.forEach(cell => cell.draw(context))

    initialize(){
        for(let x=0; x< this.#width; x++){
            for(let y=0; y<this.#height; y++){
                this.#gridCells.push(new Ground(x, y, this.#pixelSize))
            }
        }
    }
    
}

export default Grid