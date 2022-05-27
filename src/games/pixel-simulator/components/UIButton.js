import DisplayElement from "./DisplayElement.js"

class UIButton extends DisplayElement{
    
    constructor(name, func = () => console.log("No function assigned")){
        super("Button")
        
    }

}

export default UIButton