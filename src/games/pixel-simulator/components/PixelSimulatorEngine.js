import PixelSimulatorGrid from "../containers/PixelSimulatorGrid.js"
import DebugDisplay from "../containers/DebugDisplay.js";
import { APP_CONFIG } from "../config.js";

class PixelSimulatorEngine{

    #parentElement          //Element that holds all the view elements associated with this object
    #pixelSimulatorGrid     //The grid that holds all the game data along with the datas view
    #debugDisplay           //Where debug information will be sent when gathered
    
    constructor(){
        //if(APP_CONFIG.DEBUG){ this.#activateDebugMode() }                //Activate debug mode if enabled in configuration                                          
    }


}

export default PixelSimulatorEngine