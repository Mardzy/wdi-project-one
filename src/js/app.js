// *************update the data model and render**************


$(() => {

  //variables

  //buttons
  const $rules = $('#rules');
  const $reset = $('#reset');
  const $startGame = $('#start-game');
  // const $newRound = $('#new-round');
  const $rollDice = $('#roll-dice');
  // const $hold = $('#hold');


  //display elements
  const $result = $('#result');
  const $gameContainer = $('#game-container');
  const $hiddenWrapper = $('#hidden-wrapper');
  const $playerContainer = $('#player-container');
  const $computerContainer = $('#cpu-container');
  const $wins= $('#wins span');
  const $losses= $('#losses span');
  const wins= 0;
  const losses= 0;

  //game logic
  // const playerDice =[];
  // const computerDice =[];

  //let playingGame = false;

  function createRandomNumbers(length,min,max){
    const randomNumbers =[];
    for (let i = 0; i<length;i++){
      min = Math.ceil(min);
      max = Math.floor(max);
      const random= Math.floor(Math.random() * (max - min + 1)) + min;
      randomNumbers.push(random);
    }
    return randomNumbers;
  }

  var model = {
    playerHand: createRandomNumbers(5,1,6),
    computerHand: createRandomNumbers(5,1,6),
    highlightedIndices: [],
    winningHands: []
  };

  function startGame(){
    render(model);
  }

  function loopHighlighted(){
    for(let i =0; i < model.highlightedIndices.length; i++){
      const highlightedIndex = model.highlightedIndices[i];
      const elem = $playerContainer.find('.square')[highlightedIndex];
      $(elem).addClass('highlighted');
    }

  }

  function clickSquare(idx) {
    if (model.highlightedIndices.length <3)
      model.highlightedIndices.push(idx);
    render();
  }
  function reset(){
    $playerContainer.html('');
    $computerContainer.html('');
    $wins.text(wins);
    $losses.text(losses);
    $result.html('Welcome to Poker Dice!!!</br>Click Start Game');
  }

  function rollPlayerDice(){
    model.playerHand.forEach((value, idx) => {
      const elem = $('<div class="square"></div>');
      elem.addClass('die-' + value);
      $playerContainer.append(elem);
      elem.on('click', () => clickSquare(idx));
    });
  }

  // removeHighlightedElement(){
  //   model.highlightedIndices.forEach((value, idx) => {
  //     const removeElem
  //   })
  // }

  // rollHighlighted(){
  //   model.playerHand.forEach((value, idx) => {
  //     const elem
  //     const elem = $('<div class="square"></div>');
  //     elem.addClass('die-' + value);
  //     $playerContainer.append(elem);
  //     elem.on('click', () => clickSquare(idx));
  //   });
  // }

  function rollComputerDice(){
    model.computerHand.forEach(value => {
      const elem = $('<div id="hidden-dice" class="square "></div>');
      elem.addClass('die-' + value);
      $computerContainer.append(elem);
    });
  }

  // function rollHighlighted(){
  //
  // }

  function render(){
    reset();
    rollPlayerDice();
    rollComputerDice();
    loopHighlighted();
  }


  console.log(createRandomNumbers(5,1,6));



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
  //$rolldice.on('click',)
  $rules.on('click',showRules);
  $reset.on('click',reset);
  $startGame.on('click',startGame);
  $rollDice.on('click',rollPlayerDice);

});// last line inside dom
// *************update the data model and render**************


// $(() => {
//
//   //variables
//
//   //buttons
//   const $rules = $('#rules');
//   const $reset = $('#reset');
//   const $startGame = $('#start-game');
//   // const $newRound = $('#new-round');
//   // const $rollDice = $('#roll-dice');
//   // const $hold = $('#hold');
//
//
//   //display elements
//   //const $square = $('.square');
//   const $gameContainer = $('#game-container');
//   const $hiddenWrapper = $('#hidden-wrapper');
//
//   const $playerContainer = $('#player-container');
//   const $computerContainer = $('#cpu-container');
//   const $wins= $('#wins span');
//   const $losses= $('#losses span');
//   const wins= 0;
//   const losses= 0;
//
//   // const playerDice =[];
//   // const computerDice =[];
//
//   //let playingGame = false;
//
//   function createRandomNumbers(length,min,max){
//     const randomNumbers =[];
//     for (let i = 0; i<length;i){
//       min = Math.ceil(min);
//       max = Math.floor(max);
//       const random= Math.floor(Math.random() * (max - min + 1)) + min;
//       randomNumbers.push(random);
//     }
//     return randomNumbers;
//   }
//
//   var model = {
//     playerHand: createRandomNumbers(5,1,6),
//     computerHand: createRandomNumbers(5,1,6),
//
//     highlightedIndices: [],
//     winningHands: []
//   };
//
//   function startGame(){
//     render(model);
//   }
//
//   function loopHighlighted(){
//     for(let i =0; i < model.highlightedIndices.length; i){
//       const highlightedIndex = model.highlightedIndices[i];
//       const elem = $playerContainer.find('.square')[highlightedIndex];
//       $(elem).addClass('highlighted');
//     }
//
//   }
//
//   function clickSquare(idx) {
//     if (model.highlightedIndices.length <3)
//       model.highlightedIndices.push(idx);
//     render();
//   }
//   function reset(){
//     $playerContainer.html('');
//     $computerContainer.html('');
//     $wins.text(wins);
//     $losses.text(losses);
//   }
//   function render(){
//     reset();
//     model.playerHand.forEach((value, idx) => {
//       const elem = $('<div class="square"></div>');
//       elem.addClass('die-' + value);
//       $playerContainer.append(elem);
//       elem.on('click', () => clickSquare(idx));
//     });
//     model.computerHand.forEach(value => {
//       const elem = $('<div class="square"></div>');
//       elem.addClass('die-' + value);
//       $computerContainer.append(elem);
//     });
//
//     loopHighlighted();
//   }
//
//
//   console.log(createRandomNumbers(5,1,6));
//
//
//
//   // let playText = $($result).text('Start Game');
//   // functions
//   // function playGame (){
//   //   }
//   // }
//
//
//
//   // jquery listeners
//   function showRules(){
//     if($gameContainer.css('display')!=='none'){
//       $gameContainer.css({'display': 'none'});
//       $hiddenWrapper.css({'display': 'flex'});
//     } else {
//       $hiddenWrapper.css({'display': 'none'});
//       $gameContainer.css({'display': 'flex'});
//     }
//
//   }
//
//   $rules.on('click',showRules);
//   $reset.on('click',reset);
//   $startGame.on('click',startGame);
//
// });// last
