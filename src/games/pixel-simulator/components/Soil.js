const HUE_MIN = 15
const HUE_MAX = 120
const MIN_LIGHT = 40
const MAX_LIGHT = 50
const DEFAULT_ALTITUDE = 100
const MIN_ALTITUDE = 10

import GridCell from "./GridCell.js";

class Soil extends GridCell{

    #altitude
    
    constructor(x, y, size){
        super(x, y, size, HUE_MIN, 50, 60)
        this.hydration = 0;
        this.altitude = DEFAULT_ALTITUDE;  
    }

    beforeDraw(){
        const lightPercent = (this.altitude/DEFAULT_ALTITUDE)
        const lightRange = (MAX_LIGHT - MIN_LIGHT)

        this.lightness = ( MIN_LIGHT + (lightPercent * lightRange))
    }

    lowerBy(value){
        const newAltitude = this.altitude - value
        newAltitude < MIN_ALTITUDE ? this.altitude = MIN_ALTITUDE : this.altitude = newAltitude 
    }

}

export default Soil