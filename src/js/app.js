$(() => {

//variables
  const $square = $('.square');
  const $play = $('.play');
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
});// last line


// const dice ={
//   one: 1,
//   two: 2,
//   three: 3,
//   four: 4,
//   five: 5,
//   six: 6
//
// };
