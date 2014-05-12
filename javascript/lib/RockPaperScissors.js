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
	this.pick = pick
};


function Game(player1, player2) {
	this.player1 = player1;
	this.player2 = player2;
}

Game.prototype.winner = function() {
// console.log(PAIRS[this.player1.pick][this.player2.pick])
	if (this.same_pick()){
		return null
	}
	// else if	((PAIRS[this.player1.pick]['beats'][0] === this.player2.pick) || (PAIRS[this.player1.pick]['beats'][1] === this.player2.pick)) {
	else if	(PAIRS[this.player1.pick][this.player2.pick])  {
		return this.player1}
	else {
	 	return this.player2
	 }; 
};

Game.prototype.same_pick = function() {
	return this.player1.pick === this.player2.pick
};


