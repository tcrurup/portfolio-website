export default class PixelSimulatorDisplay{

    #displayElement

    constructor(){
        console.log("initializing display")
        let elem = document.createElement("canvas")
        elem.width=800
        elem.height=800
        elem.className = "pixel-simulator-display"
        elem.addEventListener("mousemove", this.mouseMove)
        this.#displayElement = elem
        console.log(this.context)
    }

    get element(){ return this.#displayElement }
    get context(){ return this.element.getContext('2d')}

    mouseMove = event =>{
        const coords = {
            x: event.offsetX,
            y: event.offsetY
        }
        this.colorPixel(coords)
    }
    
    colorPixel(coords){
        console.log(coords)
        this.context.fillRect(coords.x, coords.y, 1, 1)
    }

    static create(){
        return new PixelSimulatorDisplay()
    }

}