export default class PixelSimulatorDisplay{

    #displayElement

    constructor(){
        this.#displayElement = document.createElement("div")
    }

    get element(){ return this.#displayElement }

    static create(){
        return new PixelSimulatorDisplay()
    }

}