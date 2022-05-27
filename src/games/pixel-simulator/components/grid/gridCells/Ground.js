import { GROUND_CONFIG } from "../../../config.js";
import GridCell from "./GridCell.js";

class Ground extends GridCell{

    #altitude
    
    constructor(x, y, size){
        super(x, y, size, GROUND_CONFIG.HUE_MIN, 50, 60)
        this.hydration = 0;
        this.#altitude = GROUND_CONFIG.DEFAULT_ALTITUDE;  
    }

    beforeDraw(){
        const lightPercent = (this.#altitude/GROUND_CONFIG.DEFAULT_ALTITUDE)
        const lightRange = (GROUND_CONFIG.MAX_LIGHT - GROUND_CONFIG.MIN_LIGHT)

        this.lightness = ( GROUND_CONFIG.MIN_LIGHT + (lightPercent * lightRange) )
    }

    reset(){
        this.#altitude = GROUND_CONFIG.DEFAULT_ALTITUDE
    }

    lowerBy(value){
        const newAltitude = this.#altitude - value
        newAltitude < GROUND_CONFIG.MIN_ALTITUDE ? this.#altitude = GROUND_CONFIG.MIN_ALTITUDE : this.#altitude = newAltitude 
    }

    getCellDataAsDiv(){
        const addDivs = `
            altitude: ${this.#altitude} <br>
            hydration: ${this.hydration}
        `
        return super.getCellDataAsDiv(addDivs)
    }

}

export default Ground