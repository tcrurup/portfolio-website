class DebugDisplay{

    #element
    
    constructor(){
        this.#element = document.createElement("div")
        this.#element.className = "debug-display"
    }

    get displayElement(){
        return this.#element
    }

}

export default DebugDisplay