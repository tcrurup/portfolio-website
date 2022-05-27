import DisplayElement from "../components/DisplayElement.js";

const opts = {
    class: 'user-interface'
}

class UserInterface extends DisplayElement{
    
    constructor(){
        super("div", opts)
        this.innerHTML = `
        User Interface
        `
    }

}

export default UserInterface