import InteractableElement from "./InteractableElement.js"

class UIButton extends InteractableElement{
    
    #button
    
    constructor(name, func = () => console.log("No function assigned")){
        super("Button")
        this.innerHTML = name
        this.onLeftClick = func
    }

}
export default UIButton