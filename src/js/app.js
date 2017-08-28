$(() => {

  //variables

  //buttons
  const $rules = $('#rules');
  const $newRound = $('#new-round');
  const $rollDice = $('#roll-dice');
  const $hold = $('#hold');
  const $div = $('#' + $(this).data('href'));
  const $demo = $('.demo');

  //display elements
  const $square = $('.square');
  const $playerScore = $('#player-score');
  const $computerScore = $('#computer-score');
  const $gameContainer = $('#game-container');
  const $hiddenWrapper = $('#hidden-wrapper');
  const $pageWrapper = $('#page-wrapper');


  //game logic
  let playingGame = false;
  const randomNumber = Math.floor(Math.random() *(1,6) +1);
  const dice ={
    1: '../images/die-1-hi.png',
    2: '../images/die-2-hi.png',
    3: '../images/die-3-hi.png',
    4: '../images/die-4-hi.png',
    5: '../images/die-5-hi.png',
    6: '../images/die-6-hi.png'
  };





  console.log(randomNumber);
  // let playText = $($result).text('Start Game');
  let computerScore = '';
  let playerScore = '';
  // functions
  // function playGame (){
  //   if(!playingGame){
  //     console.log('click');
  //     return playText;
  //   } else {
  //     playingGame = true;
  //     playText = $($newRound).text('Start Game');
  //     return playText;
  //   }
  // }

  function clickSquare() {
    console.log('clicked square');
  }

  // jquery listeners

  // $square.on('click', clickSquare);
  // console.log(playGame);

  function showRules(){
    if($gameContainer.css('display')!=='none'){
      $gameContainer.css({'display': 'none'});
      $hiddenWrapper.css({'display': 'flex'});
    } else {
      $hiddenWrapper.css({'display': 'none'});
      $gameContainer.css({'display': 'flex'});

    }

  }
  $rules.on('click',showRules);

});// last line inside dom
