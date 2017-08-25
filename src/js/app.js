$(() => {
  const $play = $('.play');
  let playingGame = false;
  let playText = $($play).text('Start Game');

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
  $($play.on('click',playGame));

  console.log(playGame);
});
