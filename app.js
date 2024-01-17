function Calculadora(){
this.display = document.querySelector('.display');

this.capturaCliques = () => {
    document.addEventListener('click', evento => {
    const el = evento.target;
    if (el.classList.contains('btn-num')) this.addNumDisplay(el);
    if (el.classList.contains('btn-clear')) this.delNumDisplay();
    if (el.classList.contains('btn-eq')) this.resNumDisplay(el);
    if (el.classList.contains('btn-del')) this.delOneNumDisplay(el);
   
    });
};

this.inicia = () => { 
     this.capturaCliques();
    this.precionarEnter();
    this.display.focus();
    
    
    

};

this.addNumDisplay = el => {
    this.display.value += el.innerText; 
    this.display.focus();
}


this.delNumDisplay = el => this.display.value = ' ';

this.delOneNumDisplay = () =>this.display.value = this.display.value.slice(0, -1); //slice = fatiar

this.precionarEnter = () => {
    document.addEventListener('keyup', (e) => {
        if(e.keyCode !== 13) return;
        this.resNumDisplay();
    })
}

this.resNumDisplay = () => {
    conta = this.display.value;
    try {
        conta = eval(conta);
        if(!conta){
            alert('Conta inválida');
            return;
        }
        this.display.value = conta;
    } catch (e) {
        alert('Conta inválida');
        return;
    }
};



}

const calculadora = new Calculadora();
calculadora.inicia();
