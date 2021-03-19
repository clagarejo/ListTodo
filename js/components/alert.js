export default class Alert {
    constructor(alertaId){
        this.alert = document.getElementById(alertaId);
    }

    //Mostrar la alerta
    show(message){
        this.alert.classList.remove('d-none');
        this.alert.innerText = message;
    }

    // Ocuttar la alerta
    hide(){
        this.alert.classList.add('d-none');
    }
}
