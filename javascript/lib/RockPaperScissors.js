var PAIRS = { 

rock: {
	scissors: 'smashes',
	lizard: 'pounds'},

paper: {
	rock: 'covers',
	spock: 'disproves'},

scissors: {
	paper: 'slices',
	lizard: 'decapitates'},

lizard: {
	paper: 'munches',
	spock: 'poisons'},

spock: {
	scissors: 'crushes',
	rock: 'crushes'}};

	// ######

function Player(name) {
	this.name = name;
}

Player.prototype.picks = function(pick) {
	this.pick = pick;
};


function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.winner = function() {
	if (this.same_pick()){
		return null;
	}
	else if	(PAIRS[this.player1.pick][this.player2.pick])  {	
		// winner = this.player1;
		// loser = this.player2;
		return this.player1 }
	else {
		// winner = this.player2;
		// loser = this.player1;
	 	return this.player2;
	 } 
};

Game.prototype.loser = function() {
  return (this.winner() === this.player1 ? this.player2 : this.player1);
}

Game.prototype.same_pick = function() {
	return this.player1.pick === this.player2.pick;
};

Game.prototype.result = function() {
	// console.log(this.player1)
	var message;

	if (this.winner()) {
		message = [this.winner().name,"playing",this.winner().pick,PAIRS[this.winner().pick][this.loser().pick],this.loser().name,"playing",this.loser().pick].join(' ');
	} else {
		message = 'Draw';
	}
	console.log(message);
	return message;	

	// console.log(winner.name+" playing "+winner.pick+" "+PAIRS[winner.pick][loser.pick]+" "+loser.name+" playing "+loser.pick);
	// return winner.name+" playing "+winner.pick+" "+PAIRS[winner.pick][loser.pick]+" "+loser.name+" playing "+loser.pick;

};












