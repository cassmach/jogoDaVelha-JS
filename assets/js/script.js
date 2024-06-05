// Dados Inicias

            // Iniciar com Quadro Vazio
let square = {
    a1: '', a2: '', a3: '',
    b1: '', b2: '', b3: '',
    c1: '', c2: '', c3: ''

};
   
let player = '';  // De quem ser a vez

let warning = '';
 
let playing = false;  // Se está rolando o jogo


// Eventos
document.querySelector('.reset').addEventListener('clico', reset);


//Funções
function reset () {
    warning = ''
}
    
