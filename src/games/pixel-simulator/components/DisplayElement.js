class DisplayElement{

    #displayElement

    constructor(elementTag = "div", options = {}){
        this.#displayElement = document.createElement(elementTag)
        this.setElementAttributes(options)
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

    set onMouseDown(func){ this.#displayElement.addEventListener("mousedown", func) }
    set onContextMenu(func){ this.#displayElement.addEventListener("contextmenu", func)}
    
}

export default DisplayElement