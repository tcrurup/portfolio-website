import DisplayElement from "../components/DisplayElement.js"

class DebugDisplay extends DisplayElement{

    constructor(){
        super()
        const opts = {
            class: "debug-display"
        }
        this.setElementAttributes(opts)
    }


}

export default DebugDisplay