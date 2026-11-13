let matriz = [
    ['img/1.png', 'img/2.png', 'img/3.png'],
    ['img/4.png', 'img/5.png', 'img/6.png'],
    ['img/7.png', 'img/8.png', ''],
];


let board = document.querySelector('.board');
let startButton = document.getElementById('start');
let timerDisplay = document.getElementById('timer');

let seconds = 0;
let timerInterval = null;
let gameStarted = false;

startButton.addEventListener('click', startGame);

function startGame(){
    gameStarted = true;
    seconds = 0;
    timerDisplay.textContent = `Tiempo: ${seconds}s`;

    if(timerInterval) clearInterval(timerInterval);

    //Inicia el contador
    timerInterval = setInterval(() => {
        seconds++;
        timerDisplay.textContent = `Tiempo: ${seconds}s`;
    }, 1000);

    board.classList.remove('hidden');
    startButton.textContent = 'Reiniciar';

    shuffleMatriz();
    drawTokens();
    addEventListeners();
}

//Dibuja los cuadrados con imagenes (tokens)
function drawTokens(){
    board.innerHTML = '';

    matriz.forEach(row => row.forEach(element => {

        if(element == ''){
            board.innerHTML += `<div class='empty'>${element}</div>`
        }else{
            board.innerHTML += `<div class='token' data-value='${element}'><img src='${element}' alt='imagen' id='token'></div>`
        }
    }))
}

//Les agrega la funcion de click y moverse a cada cuadrado (tokens)
function addEventListeners(){
    let tokens = document.querySelectorAll('.token');
    tokens.forEach(token => {
        token.addEventListener('click', () => {
            
            if(!gameStarted) return;

            let elementValue = searchPosition(token.dataset.value);
            let emptyValue = searchPosition('');

            let movement = nextMovement(elementValue, emptyValue);

            if (movement !== 'noMove'){
                updateMatriz(token.dataset.value, elementValue, emptyValue);
                
                drawTokens();
                addEventListeners();

                let result = compareMatriz();
                
                if(result === true){
                    
                    clearInterval(timerInterval);
                    gameStarted = false;

                    confetti({
                        particleCount: 150,
                        spread: 180
                    });
                }
            }
        });
    }); 
}

//Busca la posicion del token en el arreglo
function searchPosition(element){
    let rowIndex = 0;
    let columnIndex = 0;

    matriz.forEach((row, index) => {
        let rowElement = row.findIndex(item => item == element);
        if (rowElement !== -1){
            rowIndex = index;
            columnIndex = rowElement;
        }
    })
    return [rowIndex, columnIndex];
}

//Calcula donde sera el siguiente movimiento del token
function nextMovement(actualPosition, emptyPosition){
   let rowDiff = actualPosition[0] - emptyPosition[0];
   let colDiff = actualPosition[1] - emptyPosition[1];

   if (actualPosition[1] === emptyPosition[1]) {
        if (rowDiff === -1) return 'down';
        if (rowDiff === 1) return 'up';
    } 
    
    if (actualPosition[0] === emptyPosition[0]) {
        if (colDiff === -1) return 'right';
        if (colDiff === 1) return 'left';
    }

    return 'noMove';
}


//Actualiza el arreglo para que se mueva
function updateMatriz(element, actualPosition, emptyPosition){
    matriz[actualPosition[0]][actualPosition[1]] = ''
    matriz[emptyPosition[0]][emptyPosition[1]] = element

    console.log(matriz)
}

//Mezcla el rompecabezaz segun movimientos normales para que no sea imposible de ganar
function shuffleMatriz(){
    let movimientosTotales = 100; // Cantidad de mezclas que hará

    for (let i = 0; i < movimientosTotales; i++) {
        let emptyPos = searchPosition('');
        let vecinos = [];

        let [r, c] = emptyPos;

        // Identifica qué casillas están al lado del espacio vacío
        if (r > 0) vecinos.push([r - 1, c]); // Arriba
        if (r < matriz.length - 1) vecinos.push([r + 1, c]); // Abajo
        if (c > 0) vecinos.push([r, c - 1]); // Izquierda
        if (c < matriz[0].length - 1) vecinos.push([r, c + 1]); // Derecha

        // Elegie un vecino al azar
        let vecinoAleatorio = vecinos[Math.floor(Math.random() * vecinos.length)];
        let [vr, vc] = vecinoAleatorio;

        // Obtiene el valor de la casilla vecina y intercambia su lugar
        let valorVecino = matriz[vr][vc];
        matriz[vr][vc] = '';
        matriz[r][c] = valorVecino;
    }
}

function compareMatriz(){
    let finalMatriz = [
        ['img/1.png', 'img/2.png', 'img/3.png'],
        ['img/4.png', 'img/5.png', 'img/6.png'],
        ['img/7.png', 'img/8.png', ''],
    ]
    
    let win = matriz.every((row, indexRow) => 
        row.every((element, indexColumn) => 
            element === finalMatriz[indexRow][indexColumn]
        )
    );

    if (win){
        return true;
    }
}