const DEFAULT_SATURATION = 0
const DEFAULT_LIGHTNESS = 100
const DEFAULT_HUE = 0

export default class GridCell{

    #x
    #y    
    #size
    #hue
    #saturation
    #lightness

    constructor(x, y, size, hue = DEFAULT_HUE, lightness = DEFAULT_LIGHTNESS, saturation = DEFAULT_SATURATION){
        this.#x = x
        this.#y = y
        this.#size = size 
        this.#hue = hue
        this.#lightness = lightness
        this.#saturation = saturation  
    }

    get xOffset(){ return this.#x * this.#size }
    get yOffset(){ return this.#y * this.#size }
    get x(){ return this.#x }
    get y(){ return this.#y}
    get hue(){ return this.#hue }
    get saturation(){ return this.#saturation }
    get lightness(){ return this.#lightness }

    set hue(value){ this.#hue = value }
    set lightness(value){ this.#lightness = value }
    
    beforeDraw(){ return null }

    getDistanceFrom(coords){
        let deltaX = Math.abs(this.x - coords.x)
        let deltaY = Math.abs(this.y - coords.y)
        return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2))
    }
    
    getCellDataAsDiv(additionalDivs = ""){
        return `
            <div>
                x:${this.x}   y:${this.y} <br>
                hsl: (${this.hue}, ${this.saturation}%, ${this.lightness}%) <br>
                ${additionalDivs}
            </div>        
        `
    }

    draw(context){
        this.beforeDraw()
        context.fillStyle = `hsl(${this.#hue}, ${this.#saturation}%, ${this.#lightness}%)`
        context.fillRect(this.xOffset, this.yOffset, this.#size, this.#size)
    }

    clickOn(context){
        this.draw(context)
    }

}

