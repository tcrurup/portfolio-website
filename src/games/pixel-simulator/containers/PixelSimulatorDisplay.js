export default class PixelSimulatorDisplay{

    #displayElement

    constructor(){
        console.log("initializing display")
        let elem = document.createElement("div")
        elem.className = "pixel-simulator-display"
        elem.addEventListener("onmousemove", this.mouseMove)
        this.#displayElement = elem
    }

    get element(){ return this.#displayElement }

    mouseMove = event =>{
        console.log(event)
    }
    
    static create(){
        return new PixelSimulatorDisplay()
    }

}