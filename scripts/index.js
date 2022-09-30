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

let tabla = [];

const encabezado = document.getElementById("coloHeader");
encabezado.style.backgroundColor = "lightblue";

const titulo = document.getElementById("colorH1");
titulo.style.color = "black";

//inicializar acciones

let player = "X";

// selecciono los elementos
const squares = document.querySelectorAll(".squares");

const resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", () => console.log("funca"));

// const resetButton = document
//   .getElementById("resetButton")
//   .addEventListener("click", () => console.log("funca")); //de esta forma puedo seleccionar al elemento y a la vez llamarlo con un evento (en este caso un addEventListener) y lo hago a todo en una sola linea!

resetButton.addEventListener("click", () => reset());

squares.forEach((square, i) =>
  square.addEventListener("click", () => play(square, i))
);

//FUNCIONES

const play = (s, i) => {
  if (s.innerHTML === "") {
    s.innerHTML = player;
    tabla[i] = player;
    console.log(tabla);
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
};

//REINICIO
