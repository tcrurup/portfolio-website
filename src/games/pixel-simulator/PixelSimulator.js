import './style.css'
import PixelSimulatorEngine from "./components/PixelSimulatorEngine"

export default class PixelSimulator{

    #engine     //Game Engine
    
    constructor(parentElement){
        this.#engine = new PixelSimulatorEngine(parentElement)
    }
}