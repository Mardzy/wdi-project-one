$(() => {

  //variables

  //buttons
  const $rules = $('#rules');
  const $startGame = $('#start-game');
  // const $newRound = $('#new-round');
  // const $rollDice = $('#roll-dice');
  // const $hold = $('#hold');


  //display elements
  // const $square = $('.square');
  const $gameContainer = $('#game-container');
  const $hiddenWrapper = $('#hidden-wrapper');
  const $cpuOne = $('#cpu-one');
  const $cpuTwo = $('#cpu-two');
  const $cpuThree = $('#cpu-three');
  const $cpuFour = $('#cpu-four');
  const $cpuFive = $('#cpu-five');
  const $cpuSix = $('#cpu-six');
  const $one = $('#one');
  const $two = $('#two');
  const $three = $('#thre');
  const $four = $('#four');
  const $five = $('#five');
  const $six = $('#six');


  //game logic
  let playingGame = false;
  const randomNumber = Math.floor(Math.random() *(1,6) +1);
  const playerDice =[];
  const computerDice =[];

  function startGame (){
    if(playingGame)
      switch (randomNumber>=6) {
        case  randomNumber === 1:
          $one,$cpuOne.addClass('.die-one');
          playerDice.push(1);
          computerDice.push(1);
          break;
        case randomNumber === 2:
          $two,$cpuTwo.addClass('.die-two');
          playerDice.push(2);
          computerDice.push(2);
          break;
        case  randomNumber === 3:
          $three,$cpuThree.addClass('.die-three');
          playerDice.push(3);
          computerDice.push(3);
          break;
        case randomNumber === 4:
          $four,$cpuFour.addClass('.die-four');
          playerDice.push(4);
          computerDice.push(4);
          break;
        case  randomNumber === 5:
          $five,$cpuFive.addClass('.die-five');
          playerDice.push(5);
          computerDice.push(5);
          break;
        case randomNumber === 6:
          $six,$cpuSix.addClass('.die-six');
          playerDice.push(6);
          computerDice.push(6);
          break;
        default:
          console.log('no default');
      } else
      playingGame = true;
  }




  console.log(randomNumber);
  // let playText = $($result).text('Start Game');
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

  // function clickSquare() {
  //   console.log('clicked square');
  // }

  // jquery listeners
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
  $startGame.on('click',startGame);

});// last line inside dom
