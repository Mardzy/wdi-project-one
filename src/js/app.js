// *************update the data model and render**************


$(() => {

  //variables

  //buttons
  const $startGame = $('#start-game');
  const $reset = $('#reset');
  const $rules = $('#rules');
  const $newRound = $('#new-round');
  const $rollDice = $('#roll-dice');
  const $hold = $('#hold');

  //display elements
  const $result = $('#result');
  const $gameContainer = $('#game-container');
  const $hiddenWrapper = $('#hidden-wrapper');
  const $playerContainer = $('#player-container');
  const $computerContainer = $('#cpu-container');
  const $wins = $('span#win');
  const $losses = $('span#loss');
  const $draws = $('span#draw');
  let wins = 0;
  let losses = 0;
  let draws = 0;
  let cpuSum = 0;
  let pSum = 0;
  let gamePlaying = true;

  var model = {
    playerHand: createRandomNumbers(5,1,6),
    computerHand: createRandomNumbers(5,1,6),
    highlightedIndices: [],
    roundsLeft: 0
  };

  function startGame(){
    wins = 0;
    losses = 0;
    draws = 0;
    model.roundsLeft = 3;
    render(model);
    newRound();
  }

  function newRound(){
    removeHighlighted();
    $wins.text(wins);
    $losses.text(losses);
    $draws.text(draws);
    $playerContainer.html('');
    $computerContainer.html('');
    gamePlaying = true;
    model = {
      playerHand: createRandomNumbers(5,1,6),
      computerHand: createRandomNumbers(5,1,6),
      highlightedIndices: [],
      roundsLeft: 3
    };
    rollPlayerDice();
    rollComputerDice();
    loopHighlighted();
    countRounds();
  }

  function render(){
    reset();
    rollPlayerDice();
    rollComputerDice();
    loopHighlighted();
    countRounds();
  }

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

  function rollPlayerDice(){
    model.playerHand.forEach((value, idx) => {
      const elem = $('<div class="square"></div>');
      elem.addClass('die-' + value);
      $playerContainer.append(elem);
      elem.on('click', () => {
        pushToIndex(idx);
        render();
      });
    });
    //console.log('player===>',model.playerHand);
  }

  function rollComputerDice(){
    model.computerHand.forEach(value => {
      const elem = $('<div id="hidden-dice" class="square"></div>');
      elem.addClass('die-' + value);
      $computerContainer.append(elem);
    });
    //console.log('computer===>',model.computerHand);
  }

  function pushToIndex(idx) {
    if (model.highlightedIndices.length < 3 && !model.highlightedIndices.includes(idx))
      model.highlightedIndices.push(idx);
  }

  function createHighlights(){
    if(!gamePlaying) return false;
    if(model.roundsLeft > 0) {
      model.highlightedIndices.forEach(i => {
        model.playerHand[i] = randomNumber(1,6);
      });
      model.highlightedIndices = [];
      model.roundsLeft = model.roundsLeft - 1;
    }
    render();
  }

  function countRounds(){
    if(model.roundsLeft === 3)
      $result.html('Three Rounds Remain');
    if(model.roundsLeft === 2)
      $result.html('Two Rounds Remain');
    if(model.roundsLeft === 1)
      $result.html('Last Round');
    if (model.roundsLeft === 0)
      endGame();
  }

  function loopHighlighted(){
    if(model.roundsLeft > 0)
      for(let i =0; i < model.highlightedIndices.length; i++){
        const highlightedIndex = model.highlightedIndices[i];
        const elem = $playerContainer.find('.square')[highlightedIndex];
        $(elem).addClass('highlighted');
      }
  }

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

  function winCondition(){
    if(!gamePlaying)return false; {
      if(pSum > cpuSum){
        wins++;
        $result.html('You Win');
        $wins.text(wins);
      } if (pSum < cpuSum){
        losses++;
        $result.html('You Lose');
        $losses.text(losses);
      } if(!gamePlaying && pSum === cpuSum){
        draws++;
        $result.html('Draw');
        $draws.text(draws);
      }
    }
  }

  function endGame() {
    model.highlightedIndices = [];
    model.roundsLeft = 0;
    revealComputerHand();
    playerSum();
    computerSum();
    winCondition();
    gamePlaying = false;
  }

  function removeHighlighted(){
    $('.highlighted').removeClass('highlighted');
  }



  function revealComputerHand(){
    $('div#hidden-dice').removeAttr('id');
  }

  function reset(){
    $playerContainer.html('');
    $computerContainer.html('');
    removeHighlighted();
    cpuSum = 0;
    pSum = 0;
    gamePlaying = true;
  }

  function showRules(){
    if($gameContainer.css('display')!=='none'){
      $gameContainer.css({'display': 'none'});
      $hiddenWrapper.css({'display': 'flex'});
    } else {
      $hiddenWrapper.css({'display': 'none'});
      $gameContainer.css({'display': 'flex'});
    }
  }

  // jquery listeners
  $startGame.on('click',startGame);
  $reset.on('click', reset);
  $newRound.on('click', newRound);
  $rules.on('click',showRules);
  $rollDice.on('click', createHighlights);
  $hold.on('click', endGame);

  $('<div class="square"></div>').change(function(){
    $('<div class="square"></div>').removeClass('highlighted');
    $('<div class="square"></div>').addClass('highlighted');
  });
});// last line inside dom
