export default class GridCell{

    #x
    #y    
    #width
    #height

    constructor(x, y, width, height){
        this.#x = x
        this.#y = y
        this.#width = width
        this.#height = height        
        this.color = "#" + ((1<<24)*Math.random() | 0).toString(16)
    }

    draw(context){
        context.fillStyle = this.color
        context.fillRect(this.#x * this.#width, this.#y * this.#height, this.#width, this.#height)
    }

}

