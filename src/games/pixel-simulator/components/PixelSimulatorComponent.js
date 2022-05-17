export default class PixelSimulatorComponent{

    constructor(){

    }

    initializeElement(type="div"){
        let e = document.createElement(type)
        e.className = PixelSimulatorComponent.DEFAULT_CLASS_NAME
        return e
    }

    get defaultClassName(){ return titleToSnakeCase(this.constructor.name) }
}

const titleToSnakeCase = str => {
    console.log('testing')
    let lower = str.charAt(0).toLowerCase() + str.slice(1)
    lower = lower.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
    return lower
}