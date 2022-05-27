import UIButton from "../components/UIButton.js";
import DisplayElement from "../components/DisplayElement.js";
const opts = {
    class: 'user-interface'
}

//Some items from the user interface need to be exectued immediately while others change the current selection

class UserInterface extends DisplayElement{
    
    #buttons                //An array that holds all the button object associated with this interface
    #currentSelection       //Variable the holds the users current chosen option
    
    constructor(){
        super("div", opts)
        this.#buttons = []
        this.innerHTML = `
        User Interface
        `
    }

    addButton(name, func){
        const newButton = new UIButton(name, func)
        this.#buttons.push(newButton)
        this.appendToElement(newButton.element)
    }

    addActions(actionHash){
        Object.keys(actionHash).forEach( key => this.addButton(key, actionHash[key]) )
    }
}

export default UserInterface