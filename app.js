
var player1 = prompt('What is your name?', 'type name'); //got working & saved to variable
var player2 = prompt('Hey, how bout you?', 'type name'); //got working & saved to variable

var settingUpNames = function() {
	playerOneBox.innerHTML= 'Player Two : ' + player1;
	playerTwoBox.innerHTML= 'Player One : ' + player2;
	//Tested & works: Also not the ideal way to do this, I wanted again to get element by id and append child, but couldn't figure it out. I'm rolling with this and will return to it time permitting
}

var start = function () {
	tile1a.innerHTML='';	
	tile1b.innerHTML='';
	tile1c.innerHTML='';
	tile2a.innerHTML='';
	tile2b.innerHTML='';
	tile2c.innerHTML='';
	tile3a.innerHTML='';
	tile3b.innerHTML='';
	tile3c.innerHTML='';
	playerOneBox.innerHTML='';
	playerTwoBox.innerHTML='';
	//Good catch: set it up to clear names right before invoking settingUpNames, allowing them to re-create id's for player 1 & 2
	settingUpNames();
	//Tested, and I did try to accomplish this more DRYly using a getElementById and change a whole class at once but couldnt get it working
	//I have decided to get everything functioning then retool if time allows
	//now need to get var player1 and player2 and append child of the player console
	}

start();

var addingClickListener = function (){
	document.querySelectorAll('.tiles');
	this.addEventListener('click', function(){
		evenAndOddTurns();
		console.log('Fn addingClickListener ran')
	})
}

var evenAndOddTurns = function() {
    if (innerHTML == '') {
      //Oh shit, just realized my logic is close but not
      //all the way there
      //I need to add an event listener to the squares
      //and then route them this way
      //and give them a whole other class to route them

      for (var i = 0; i < 9; i++) { //trying to set up a counter, but the FOR loop looks sort of wrong, somehow? Not sure about that one...
        if (i % 2 === 0) {
          onclick.innerHTML = X; // I feel like maybe I can't use onclick this way...need to look up
          i = i + 1;
        } else if (i % 2 !== 0) {
          onclick.innerHTML = O;
          i = i + 1;
        }
      }
    } else if (innerHTML != '') {
      alert('Sorry,too slow!');

    }

	//First crack at this: I bet it breaks
	//BUT: KEY FEATURES I AM DRIVING AT HERE: 
	//   - Scenario One is that if you click and inner HTML is not blank, nothing will happen; it won't write anything OR increase the turn counter
	//   - Second, is if you click and there is NO inner HTML. It uses modulus to measure whether it is an even or odd turn; depending on the results it lets you mark an X or an O
	//   - For each, it reassigns the value of i so that it will route to the correct alternate path next time, giving the other person a turn
	//   - I made i<10 since there are 9 squares
	
	//say for clicks on a square, the first time it will be an x, second time it will be an o
	//need to dig into the logic here, I'm not sure how I would do this
}

// var checkingTheScore = function(){
// 	// checks if there is  a win
// 	//if else statement, if win = set up win sequence of events, else {nuttin}
// 	// if win is selected, trigger win function

// var winnerWinner = function() {
// 	//change color of winners name console box
// 	//generates some type of alert
// 	//Should ideally make any other tiles on the board unclickable, but I'm not sure how to do that 
// }

//LOG OF PROGRESS FROM PSUEDO CODE TO WORKING: 

// 	//onload prompts for names
// 	//runs setnames function which prompts for names, then displays them
// 	//makes sure innerHTML for the squares is set to ''

// var settingUpTileClasses = function ()
// 	//after start button is hit, will grab them by row or column
// 	//then need a way to set different ids


// var setNames = function () {
// 	//prompt: gets names
// 	//gets element by id, name blurbs or whatever I end up calling them
// 	//sets blurb inner html to be what the prompt returned
// }

//COMPLETED THE ABOVE STEPS ^^^