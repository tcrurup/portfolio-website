import PixelSimulatorDisplay from "./containers/PixelSimulatorDisplay"

export default class PixelSimulatorEngine{

    #display                //The display element that will be inserted into the parent element
    #toAppendArray  //Array of elements that will be appended to the parent element
    #parentElement          //Element of the DOM that will hold all the display information for this game

    constructor(parentElement){
        this.#parentElement = parentElement
        this.#display = PixelSimulatorDisplay.create()      //Create object that hold display information
        this.#toAppendArray = [
            this.#display.element
        ]
        this.appendElements()
    }

    get display (){ return this.#display}
    get parentElement(){ return this.#display }


    appendElements(){
        for (const elem of this.#toAppendArray){ this.#parentElement.appendChild(elem) }
    }

    
}