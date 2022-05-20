class DisplayElement{

    #displayElement

    constructor(elementTag = "div"){
        this.#displayElement = document.createElement(elementTag)
    }

    setElementAttributes(attrHash){
        Object.keys(attrHash).forEach( key => this.#displayElement.setAttribute(key, attrHash[key]))
    }

    addEventToElement(eventType, eventFunc){
        console.log("adding event listener")
        this.#displayElement.addEventListener(eventType, eventFunc)
    }

    appendToElement(elem){
        this.element.appendChild(elem)
    }

    get element(){ return this.#displayElement }
    get context(){ return this.#displayElement.getContext('2d')}
}

export default DisplayElement