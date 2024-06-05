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

reset();  // Já começar limpando

// Eventos
document.querySelector('.reset').addEventListener('click', reset);
// Vai percorrer cada um dos item e adiciona o evento nele
document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('click', itemClick)
});

//Funções

function itemClick (event){
let item = event.target.getAttribute('data-item');
if (square[item] === ''){
    square[item] = player;
    renderSquare();
    togglePlayer();

}
}


function reset () {  // function que limpa tudo
    warning = '';

    let random = Math.floor(Math.random() * 2);

        //simplificado
        player = (random === 0) ? 'x' : 'o';

    /*
    if (random === 0) {
        player = 'x';
    } else {
        player = 'o';
    }*/

    for(let i in square){
        square[i] = '';
    }

    playing = true; // reset

    renderSquare();
    renderInfo();
   
}



function renderSquare() {  // Renderizar a Tela
    for (let i in square){
    let item = document.querySelector(`div[data-item=${i}]`);
    item.innerHTML = square[i];
}

checkGame();

    /* Acima um modo simplificado
    if (square[i] !== ''){
        item.innerHTML = square[i];
    }else {
        item.innerHTML = '';
    }*/
    
};

function renderInfo (){// pegar as duas variavel e colocar la no html
document.querySelector('.vez').innerHTML = player;  
document.querySelector('.resultado').innerHTML = warning;
};


    // Function para alternar de player
function togglePlayer() {
player = (player === 'x') ? 'o' : 'x';
renderInfo();  // Para atualizar a info de quem é a vez

    /*  Simplificado acima
    if (player === 'x' ){
        player = 'o';
    } else {
        player = 'x'
    }*/
};
    // Verificar as etapas do jogo
function checkGame() {
    if (checkWinnerFor('x')){
        warning= '"x" venceu';
        playing = false
    }else if(checkWinnerFor('o')){
        warning = '"o" venceu';
        playing = false

    }else if (isFull()){
        warning = 'Deu empate';
        playing = false;
    }
}

function checkWinnerFor(player){
    let pos = [
        // Posibilidade na vertical
        'a1,a2,a3',
        'b1,b2,b3',
        'c1,c2,c3',

        'a1,b1,c1',
        'a2,b2,c2',
        'a3,b3,c3',

        'a1,b2,c3',
        'a3,b2,c1'

    ];
    for (let w in pos){
        let pArray = pos[w].split(',')  // loop nas posibilidades
        let hasWon = pArray.every(option => square[option] === player);
        if (hasWon){
            return  true;
        }     
        
    }
    return false;
    /* Acima simplificado
    pArray.every((option)=> {
     if(square[option] === player){
     return true;
    }else {
     return false;
    }*/
};

function isFull() {  // verificar empate
for ( let i in square) {
    if (square[i] === ''){
        return false
    }
}
return true;  // esta tudo preenchido
}