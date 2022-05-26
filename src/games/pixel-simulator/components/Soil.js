import { SOIL_CONFIG } from "../config.js";
import GridCell from "./GridCell.js";

class Soil extends GridCell{

    #altitude
    
    constructor(x, y, size){
        super(x, y, size, SOIL_CONFIG.HUE_MIN, 50, 60)
        this.hydration = 0;
        this.#altitude = SOIL_CONFIG.DEFAULT_ALTITUDE;  
    }

    beforeDraw(){
        const lightPercent = (this.#altitude/SOIL_CONFIG.DEFAULT_ALTITUDE)
        const lightRange = (SOIL_CONFIG.MAX_LIGHT - SOIL_CONFIG.MIN_LIGHT)

        this.lightness = ( SOIL_CONFIG.MIN_LIGHT + (lightPercent * lightRange) )
    }

    lowerBy(value){
        const newAltitude = this.#altitude - value
        newAltitude < SOIL_CONFIG.MIN_ALTITUDE ? this.#altitude = SOIL_CONFIG.MIN_ALTITUDE : this.#altitude = newAltitude 
    }

    getCellDataAsDiv(){
        const addDivs = `
            altitude: ${this.#altitude} <br>
            hydration: ${this.hydration}
        `
        return super.getCellDataAsDiv(addDivs)
    }

}

export default Soil