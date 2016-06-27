
var player1 = prompt('What is your name?', 'type name'); //got working & saved to variable
var player2 = prompt('Hey, how bout you?', 'type name'); //got working & saved to variable

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
	//Tested, and I did try to accomplish this more DRYly using a getElementById and change a whole class at once but couldnt get it working
	//I have decided to get everything functioning then retool if time allows
	//now need to get var player1 and player2 and append child of the player console
	}

start();
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

// var evenAndOddTurns = function () {
// 	//say for clicks on a square, the first time it will be an x, second time it will be an o
// 	//need to dig into the logic here, I'm not sure how I would do this
// }

// var checkingTheScore = function(){
// 	// checks if there is  a win
// 	//if else statement, if win = set up win sequence of events, else {nuttin}
// 	// if win is selected, trigger win function

// var winnerWinner = function() {
// 	//change color of winners name console box
// 	//generates some type of alert
// 	//Should ideally make any other tiles on the board unclickable, but I'm not sure how to do that 
// }