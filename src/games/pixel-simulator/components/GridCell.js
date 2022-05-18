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
    }

    get xOffset(){ return this.#x * this.#size }
    get yOffset(){ return this.#y * this.#size }

    draw(context){
        context.fillStyle = `hsl(${this.#hue}, ${SATURATION}%, ${LIGHTNESS}%)`
        context.fillRect(this.xOffset, this.yOffset, this.#size, this.#size)
    }

}

