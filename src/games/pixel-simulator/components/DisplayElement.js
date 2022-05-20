class DisplayElement{

    #displayElement
    #log
    #onRightClick
    #onLeftClick
    #onMMBClick

    constructor(elementTag = "div", options = {}){
        this.#displayElement = document.createElement(elementTag)
        this.#displayElement.addEventListener("mousedown", this.handleMouseDown.bind(this))
        this.setElementAttributes(options)
        this.disableContextMenu()
    }

    log = text => console.log(text)

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


    set onLeftClick(func){ 
        this.#onLeftClick=func
    }
    set onRightClick(func){ this.#onRightClick=func }
    set onMMBClick(func){ this.#onMMBClick=func }

    set innerHTML(html){ this.element.innerHTML = html }
    
    handleMouseDown = event => {
        switch(event.button){
            case 0:       //Left click
                if(this.#onLeftClick){ this.#onLeftClick(event) }                
                break;
            case 1:       //Middle mouse button click
                if(this.#onMMBClick){ this.#onMMBClick(event) }
                break;
            case 2:       //Right click
                if(this.#onRightClick){ this.#onRightClick(event)} 
                break;
        }
    }

    disableContextMenu(){
        this.element.addEventListener( "contextmenu", event => event.preventDefault() )
    }


}

export default DisplayElement