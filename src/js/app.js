// *************update the data model and render**************


$(() => {

  //variables

  //buttons
  const $rules = $('#rules');
  const $reset = $('#reset');
  const $startGame = $('#start-game');
  const $rollDice = $('#roll-dice');
  const $hold = $('#hold');


  //display elements
  const $result = $('#result');
  const $gameContainer = $('#game-container');
  const $hiddenWrapper = $('#hidden-wrapper');
  const $playerContainer = $('#player-container');
  const $computerContainer = $('#cpu-container');
  const $wins = $('#wins span');
  const $losses = $('#losses span');
  let wins = 0;
  let losses = 0;
  let cpuSum, pSum;
  let gameOver = false;
  // //putting the data value into an array for computer and player
  // const playerArray = $('.square').toArray().map((square)=>{
  //   return $(square).data('value');
  // });
  //
  // const cpuArray = $('.square').toArray().map((cpuSquare)=>{
  //   return $(cpuSquare).data('value');
  // });


  function randomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return  Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //game logic
  function createRandomNumbers(length,min,max){
    const randomNumbers =[];
    for (let i = 0; i<length;i++){

      const random = randomNumber(min, max);
      randomNumbers.push(random);
    }
    return randomNumbers;
  }

  var model = {
    playerHand: createRandomNumbers(5,1,6),
    computerHand: createRandomNumbers(5,1,6),
    highlightedIndices: [],
    roundsLeft: 0

  };

  function playerSum(){
    pSum = model.playerHand.reduce((a, b) => a + b, 0);
    console.log('player sum ==>',pSum);
    return pSum;
  }



  function computerSum(){
    cpuSum = model.computerHand.reduce((a, b) => a + b, 0);
    console.log('computer sum ==>',cpuSum);
    return cpuSum;
  }

  function startGame(){
    clearGameBoard();
    model.roundsLeft = 3;
    render(model);
    gameOver = false;
  }

  $rollDice.click(() => {
    if(model.roundsLeft > 0 && ! gameOver) {
      model.highlightedIndices.forEach(i => {
        model.playerHand[i] = randomNumber(1,6);
      });
      model.highlightedIndices = [];
      model.roundsLeft = model.roundsLeft - 1;
    }
    render();
  });

  function endGame() {
    gameOver = true;
    model.highlightedIndices = [];
    model.roundsLeft = 0;
    revealComputerHand();
    playerSum();
    computerSum();
    winCondition();
  }

  function winCondition(){
    if(pSum > cpuSum){
      $result.html('You Win');
      wins++;
      $wins.text(wins);
    } else if (pSum < cpuSum){
      $result.html('You Lose');
      losses++;
      $losses.text(losses);
    } else {
      $result.html('Draw');
    }

  }

  function revealComputerHand(){
    $('div#hidden-dice').removeAttr('id');
  }

  function loopHighlighted(){
    if(model.roundsLeft > 0)
      for(let i =0; i < model.highlightedIndices.length; i++){
        const highlightedIndex = model.highlightedIndices[i];
        const elem = $playerContainer.find('.square')[highlightedIndex];
        $(elem).addClass('highlighted');
      }
  }

  function pushToIndex(idx) {
    if (model.highlightedIndices.length < 3 && !model.highlightedIndices.includes(idx))
      model.highlightedIndices.push(idx);
  }
  function clearGameBoard(){
    $playerContainer.html('');
    $computerContainer.html('');
  }

  function reset(){
    gameOver = false;
    clearGameBoard();
    $wins.text('0');
    $losses.text('0');
    removeHighlighted();
    wins = 0;
    losses = 0;

  }

  function countRounds(){
    if(model.roundsLeft === 3)
      $result.html('Two Rounds Remain');
    if(model.roundsLeft === 2)
      $result.html('One Round Remains');
    if(model.roundsLeft === 1)
      $result.html('Last Round');
    if (model.roundsLeft === 0)
      endGame();

  }

  function rollPlayerDice(){
    if(!gameOver){
      countRounds();
      model.playerHand.forEach((value, idx) => {
        const elem = $('<div class="square"></div>');
        elem.addClass('die-' + value);
        $playerContainer.append(elem);
        elem.on('click', () => {
          pushToIndex(idx);
          render();
        });
      });
    }
    gameOver = false;
    console.log('player===>',model.playerHand);
  }

  function removeHighlighted(){
    $('.highlighted').removeClass('highlighted');
  }


  function rollComputerDice(){
    model.computerHand.forEach(value => {
      const elem = $('<div id="hidden-dice" class="square"></div>');
      elem.addClass('die-' + value);
      $computerContainer.append(elem);
    });
    console.log('computer===>',model.computerHand);
  }

  function render(){
    reset();
    rollPlayerDice();
    rollComputerDice();
    loopHighlighted();

  }


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
  $reset.on('click',reset);
  $startGame.on('click',startGame);

});// last line inside dom
