import DisplayElement from "./DisplayElement.js";

const defaultOptions = {

}

class InteractableElement extends DisplayElement{

    #onRightClick
    #onLeftClick
    #onMMBClick

    constructor(type = "div", options = defaultOptions){
        super(type, options)
        this.addEventToElement("mousedown", this.handleMouseDown.bind(this))
        this.disableContextMenu()
    }

    set onLeftClick(func){ this.#onLeftClick=func }
    set onRightClick(func){ this.#onRightClick=func }
    set onMMBClick(func){ this.#onMMBClick=func }
    
    disableContextMenu(){
        this.element.addEventListener( "contextmenu", event => event.preventDefault() )
    }

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
    
}

export default InteractableElement