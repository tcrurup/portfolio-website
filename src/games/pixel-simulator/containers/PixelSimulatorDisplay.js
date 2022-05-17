export default class PixelSimulatorDisplay{

    #displayElement

    constructor(){
        let elem = document.createElement("div")
        elem.className = "pixel-simulator-display"
        this.#displayElement = elem
    }

    get element(){ return this.#displayElement }

    static create(){
        return new PixelSimulatorDisplay()
    }

}