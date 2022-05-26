import DisplayElement from "./DisplayElement.js";
const opts = {
    class: 'user-interface'
}

class UserInterface extends DisplayElement{

    
    constructor(){
        super("div", opts)
    }
}

export default UserInterface