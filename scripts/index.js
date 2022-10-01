// // console.log('Hola Rolling');

// // 1- Inicializar todo lo que necesite en un primer punto de la aplicacion
// let player = `X`;

// // let boardMatrix = [
// //   [1, 2, 3],
// //   [4, 5, 6],
// //   [7, 8, 9],
// // ];

// let board = [];

// // 2- Seleccionar los elementos HTML que necesite
// const squares =
//   document.querySelectorAll('.squares');
// const resetButton = document.getElementById(
//   'resetButton'
// );
// // .addEventListener('click', () =>
// //   console.log('Reset')
// // );

// resetButton.addEventListener('click', () =>
//   reset()
// );

// {
//   /* <i class="fa-solid fa-x"></i>; */
//   // <i class="fa-solid fa-o"></i>;
// }

// squares.forEach((square, i) =>
//   square.addEventListener('click', () =>
//     play(square, i)
//   )
// );

// const play = (s, i) => {
//   // Chequeo que el square este vacio, sino, no hace nada
//   if (s.innerHTML === '') {
//     // Ahora que ya chequee que esta vacio, cambio el contenido por el que tenga asignado player
//     s.innerHTML = player;
//     // Guardo la jugada en el array board aprovechando el i
//     board[i] = player;
//     console.log(board);
//     // Armo la logica para saber si alguno gano
//     // WINNING_COMBOS
//     // 0, 1, 2
//     // 3, 4, 5
//     // 6, 7, 8
//     // 0, 3, 6
//     // 1, 4, 7
//     // 2, 5, 8
//     // 0, 4, 8
//     // 2, 4, 6

//     // if (board[] === board [] && board[] === board[] && board[]) {console.log("gano "+player)}
//     if (
//       board[0] === board[1] &&
//       board[1] === board[2] &&
//       board[0]
//     ) {
//       console.log('gano ' + player);
//     }
//     if (
//       board[3] === board[4] &&
//       board[4] === board[5] &&
//       board[3]
//     ) {
//       console.log('gano ' + player);
//     }

//     // Intercambio el jugador, si era x, lo cambio por o, y sino, lo cambio por x
//     if (player === `X`) {
//       player = `O`;
//     } else {
//       player = `X`;
//     }
//   }
// };

// const reset = () => {
//   squares.forEach(
//     square => (square.innerHTML = '')
//   );
//   player = 'X';
//   board = [];
// };

//HECHO POR MAXI

//ICONOS DE X E O
{
  /* <i class="fa-solid fa-o"></i>;
<i class="fa-solid fa-x"></i>; */
}

//INICIALIZO EL JUEGO

const encabezado = document.getElementById("coloHeader");
encabezado.style.backgroundColor = "lightblue";

const titulo = document.getElementById("colorH1");
titulo.style.color = "black";

//inicializar acciones

let player = "X";
let tabla = [];
let estadoJuego = "jugando";

// selecciono los elementos
const squares = document.querySelectorAll(".squares");

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => reset());

const resultado = document.getElementById("result");

// const resetButton = document
//   .getElementById("resetButton")
//   .addEventListener("click", () => console.log("funca")); //de esta forma puedo seleccionar al elemento y a la vez llamarlo con un evento (en este caso un addEventListener) y lo hago a todo en una sola linea!

squares.forEach((square, i) =>
  square.addEventListener("click", () => play(square, i))
);

//FUNCIONES

const play = (s, i) => {
  if (s.innerHTML === "" && estadoJuego === "jugando") {
    s.innerHTML = player;

    tabla[i] = player;

    if (tabla[0] === tabla[1] && tabla[1] === tabla[2] && tabla[0]) {
      resultado.innerText = `El ganador es + ${player}`;
      estadoJuego = "ganador";
    }

    if (tabla[3] === tabla[4] && tabla[4] === tabla[5] && tabla[3]) {
      resultado.innerText = `El ganador es + ${player}`;
      estadoJuego = "ganador";
    }

    if (tabla[6] === tabla[7] && tabla[7] === tabla[8] && tabla[6]) {
      resultado.innerText = `El ganador es + ${player}`;
      estadoJuego = "ganador";
    }

    if (tabla[0] === tabla[3] && tabla[3] === tabla[6] && tabla[0]) {
      resultado.innerText = `El ganador es + ${player}`;
      estadoJuego = "ganador";
    }

    if (tabla[1] === tabla[4] && tabla[4] === tabla[7] && tabla[1]) {
      resultado.innerText = `El ganador es + ${player}`;
      estadoJuego = "ganador";
    }

    if (tabla[2] === tabla[5] && tabla[5] === tabla[8] && tabla[2]) {
      resultado.innerText = `El ganador es + ${player}`;
      estadoJuego = "ganador";
    }

    if (tabla[0] === tabla[4] && tabla[4] === tabla[8] && tabla[0]) {
      resultado.innerText = `El ganador es + ${player}`;
      estadoJuego = "ganador";
    }
    if (tabla[2] === tabla[4] && tabla[4] === tabla[6] && tabla[2]) {
      resultado.innerText = `El ganador es + ${player}`;
      estadoJuego = "ganador";
    }

    let emptySquare = 0;
    for (let i = 0; i < squares.length; i++) {
      const square = squares[i];
      if (square.innerText === "") {
        emptySquare++;
      }
    }
    if (emptySquare === 0 && estadoJuego === "jugando") {
      estadoJuego = "EMPATE";
      resultado.innerHTML = `<h1> Hay un empate!</h1>`;
    }

    if (player === "X") {
      player = "O";
    } else {
      player = "X";
    }
  }
};

const reset = () => {
  squares.forEach((square) => (square.innerHTML = ""));
  player = "X";
  tabla = [];
  resultado.innerText = "";
  estadoJuego = "jugando";
};

//REINICIO

//COMBOS GANADORES
// 0, 1, 2
// 3, 4, 5
// 6, 7, 8
// 0, 3, 6
// 1, 4, 7
// 2, 5, 8
// 0, 4, 8
// 2, 4, 6

// LOGICA PARA DAR GANADORES
