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
        this.#displayElement.addEventListener(eventType, eventFunc)
    }

    appendToElement(elem){
        this.element.appendChild(elem)
    }

    get element(){ return this.#displayElement }
    get context(){ return this.#displayElement.getContext('2d')}

    
    set innerHTML(html){ this.element.innerHTML = html }
    
    

    


}

export default DisplayElement