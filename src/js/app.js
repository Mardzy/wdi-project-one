$(() => {

//variables
  const $square = $('.square');
  const $rules = $('#rules');
  const $play = $('#play');
  const $playerScore = $('#player-score');
  const $computerScore = $('#computer-score');
  const $rollDice = $('#roll-dice');
  const $hold = $('#hold');
  let playingGame = false;
  let playText = $($play).text('Start Game');

  // functions
  function playGame (){
    if(!playingGame){
      console.log('click');
      return playText;
    } else {
      playingGame = true;
      playText = $($play).text('Start Game');
      return playText;
    }
  }

  function clickSquare() {
    console.log('clicked square');
  }

  // jquery listeners
  $play.on('click',playGame);

  $square.on('click', clickSquare);
  console.log(playGame);



});// last line inside dom


// const dice ={
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6
//
// };
