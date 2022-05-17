import PixelSimulatorDisplay from "../containers/PixelSimulatorDisplay"

export default class PixelSimulatorEngine{

    
    #display                //The display element that will be inserted into the parent element
    #toAppendArray          //Array of elements that will be appended to the parent element
    #parentElement          //Element of the DOM that will hold all the display information for this game

    constructor(parentElement){
        this.#parentElement = parentElement
        this.#display = PixelSimulatorDisplay.create()  
        this.#toAppendArray = [
            this.#display.element
        ]
        this.initialize()
    }

    get displayElement(){ return this.#display.element}
    get parentElement(){ return this.#parentElement}

    initialize(){
        console.log("Initializing Pixel Simulator Engine")
        this.#appendElements()
        this.#addEventListeners()
    }
    
    #appendElements(){
        for (const elem of this.#toAppendArray){ this.#parentElement.appendChild(elem) }
    }

    #addEventListeners(){
    }
    
}