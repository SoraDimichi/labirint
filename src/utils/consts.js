const ROWS = 3;
const COLUMNS = 3;
const MOVES = 10;
const TIME_BREAK = 2000;


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const initalPosition = getRandomInt(1, 9);

const randomizeDirection = () => {
  const directions = ['up', 'right', 'down', 'left'];
  return directions[Math.floor(Math.random()*directions.length)]
}

const getMoveHistoryAndFinalPosition = (initalPosition, rowsNumber, columnsNumber, numberOfSteps) => {
  let currentPosition = initalPosition;
  let countLimit = numberOfSteps;
  const moveHistory = [];
  const tilesNumber = rowsNumber * columnsNumber;
  for (let i = 1; i <= countLimit; i++) {
    let move = randomizeDirection()
    switch (move) {
      case 'up':
        if (currentPosition > rowsNumber) {
          moveHistory.push(move)
          currentPosition = currentPosition - rowsNumber;
        } else {
          countLimit++
        }
        break;
      case 'down':
        if (currentPosition <=  tilesNumber - rowsNumber) {
          moveHistory.push(move)
          currentPosition = currentPosition + rowsNumber;
        } else {
          countLimit++
        }
        break;
      case 'right':
        if (currentPosition % columnsNumber !== 0) {
          moveHistory.push(move)
          currentPosition = currentPosition + 1;
        } else {
          countLimit++
        }
        break;
      case 'left':
        if (currentPosition % columnsNumber !== 1) {
          moveHistory.push(move)
          currentPosition = currentPosition - 1;
        } else {
          countLimit++
        }
        break;
    }
  }
  return {initalPosition, moveHistory, currentPosition}
}

const {moveHistory} = getMoveHistoryAndFinalPosition(initalPosition, ROWS, COLUMNS, MOVES);

const timeoutMoves = async (moveHistory, timeBreak) => {
  for (let i = 0; i < moveHistory.length; i++) {
   await setTimeout(() => {
      console.log(moveHistory[i]);
    }, timeBreak += 2000);
  }
}

timeoutMoves(moveHistory, TIME_BREAK);


// // повторить с интервалом 2 секунды
// let timerId = setInterval(() => console.log('tick'), 2000);
//
// // остановить вывод через 5 секунд
// setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 20000);

// function streetFighterSelection(fighters, position, moves) {
//   let y = position[1];
//   let x = position[0];
//   const way = [];
//   moves.forEach((move) => {
//     switch (move) {
//       case 'up':
//         if (y !== 0) {
//           y -= 1;
//         }
//         break;
//
//       case 'down':
//         if (y === 0) {
//           y += 1;
//         }
//         break;
//
//       case 'left':
//         x -= 1;
//         if (x === -1) {
//           x = 5;
//         }
//         break;
//
//       case 'right':
//         x += 1;
//         if (x === 6) {
//           x = 0;
//         }
//         break;
//     }
//     way.push(fighters[y][x]);
//   });
//   return way;
// }

// console.log(streetFighterSelection(fightersList, initalPosition, ['right', 'down', 'down', 'down', 'down']));


//  BEST SOLUTIONS =======================

// function streetFighterSelection(fighters:
// Array<string[]>,
// position: number[],
// moves: string[]):string[] {
//   const returnArr = [];
//   const pos = position;
//
//   moves.map(move => {
//     switch (move) {
//       case 'up': pos[0] = 0;
//         break;
//       case 'down': pos[0] = 1;
//         break;
//       case 'right': pos[1] = pos[1] === fighters[0].length - 1 ? 0 : ++pos[1];
//         break;
//       case 'left': pos[1] = pos[1] === 0 ? pos[1] = fighters[0].length - 1 : --pos[1];
//         break;
//     }
//     returnArr.push(fighters[pos[0]][pos[1]]);
//   })
//   return returnArr;
// }
