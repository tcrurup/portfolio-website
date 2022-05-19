const HUE_MIN = 15
const HUE_MAX = 120

import GridCell from "./GridCell.js";

class Soil extends GridCell{

    constructor(x, y, size){
        super(x, y, size, HUE_MIN, 50, 60)
        this.hydration = 100       
    }


}

export default Soil