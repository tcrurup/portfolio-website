export default class GridCell{

    #x
    #y    
    #size

    constructor(x, y, size){
        this.#x = x
        this.#y = y
        this.#size = size      
        this.color = "#" + ((1<<24)*Math.random() | 0).toString(16)
    }

    get xOffset(){ return this.#x * this.#size }
    get yOffset(){ return this.#y * this.#size }

    draw(context){
        context.fillStyle = this.color
        context.fillRect(this.xOffset, this.yOffset, this.#size, this.#size)
    }

}

