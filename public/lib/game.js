PICKS = {
rock: ['scissors','lizard'],
scissors: ['paper','lizard'],
paper: ['rock','spock'],
lizard: ['paper','spock'],
spock: ['scissors','rock']
}


function Game(player1,player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.winner = function() {
	// console.log(this.player1.pick);
	if ( (PICKS[this.player1.pick][0] === this.player2.pick) || (PICKS[this.player1.pick][1] === this.player2.pick) ) {
		return this.player1;
	}
	else {
		return this.player2;
	}
};






