Game.prototype.PAIRS = { 
	rock: 		{ scissors: 'smashes', lizard: 'pounds'},
	paper: 		{ rock: 'covers', spock: 'disproves'},
	scissors: {	paper: 'slices', lizard: 'decapitates'},
	lizard: 	{ paper: 'munches', spock: 'poisons'},
	spock: 		{ scissors: 'crushes', rock: 'crushes'}
};


function Game(player1,player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.winner = function() {
	if (this._samePick()) {
		return null;
	}
	else if (this.PAIRS[this.player1.pick][this.player2.pick]) {
		return this.player1;
	}
	else {
		return this.player2;
	}
};

Game.prototype._samePick = function() {
	return this.player1.pick === this.player2.pick;
};

Game.prototype.loser = function(){
	return (this.winner() === this .player1 ? this.player2 : this.player1);
};

Game.prototype.winningMessage = function() {
	if (this.winner()) {
		message = [this.winner().name,"playing",this.winner().pick,this.PAIRS[this.winner().pick][this.loser().pick],this.loser().name,"playing",this.loser().pick].join(' ');
	}
	else {
		message = 'Draw';
	}
	// console.log(message);
	return message;
};

Game.prototype.compChoice = function() {
	// console.log('hello');
	var rand_index;	
	var options = ['spock','lizard','rock','paper','scissors'];
	rand_index = Math.floor((Math.random()*5));
	// console.log(options);
	// console.log(rand_index);
	// console.log(options[rand_index]);
	return options[rand_index];
};