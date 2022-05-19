const SATURATION = 60
const LIGHTNESS = 50
const HUE_MIN = 15
const HUE_MAX = 120

export default class GridCell{

    #x
    #y    
    #size
    #hue

    constructor(x, y, size){
        this.#x = x
        this.#y = y
        this.#size = size
        this.#hue = HUE_MIN
        this.hydration = 100       
    }

    get xOffset(){ return this.#x * this.#size }
    get yOffset(){ return this.#y * this.#size }
    get x(){ return this.#x }
    get y(){ return this.#y}
    
    draw(context){
        context.fillStyle = `hsl(${this.#hue}, ${SATURATION}%, ${LIGHTNESS}%)`
        context.fillRect(this.xOffset, this.yOffset, this.#size, this.#size)
    }

    clickOn(context){
        console.log(`clicked on ${this.x}, ${this.y}`)
        this.#hue++
        this.draw(context)
    }

}

