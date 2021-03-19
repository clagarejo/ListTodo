import Model from './model.js';
import View from './view.js';

// Agrego este evento para que el codigo JS se cargue despues de que todo el HTML se renderice
document.addEventListener('DOMContentLoaded', () => {
    const model = new Model
    const view = new View
    // Asignamos lo que acabamos de instanciar
    model.setView(view)
    view.setModel(model)

    view.render()

});