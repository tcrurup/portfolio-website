import GridCell from "./GridCell.js";

const HUE_MIN = 240
const HUE_MAX = 240

class Water extends GridCell{

    constructor(x, y, size){
        super(x, y, size, HUE_MIN, 50, 60)      
    }

}

export default Water