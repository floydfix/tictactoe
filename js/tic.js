$(document).ready(function(){
	// whose turn it is
	var turn = 'x';
	// possible winning combos
	var wins = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
	
	// what happens when you click a space
	$('.space').click(function() {
		var space = $(this);
		// if it already has an x or o, bail!
		if (space.hasClass('x') || space.hasClass('o'))
			return false;
		// otherwise, set the character
		space.addClass(turn);

		// check to see if game over
		checkOver();

		// change turns
		if (turn == 'x')
			turn = 'o';
		else
			turn = 'x';		
	});

	// function to check if game over
	function checkOver() {
		var s = [];
		var filled = true;
		// go over all of the spaces and push them into an array like
		// ['x', 'o', 'x', 3, 4, 5, 6, 7, 8] (numbers are 'empty' squares)
		var spaces = $('.space');
		for (var i = 0; i < spaces.length; i++) {
			var sp = $(spaces[i]);
			var whatsHere = sp.hasClass('x') ? 'x' : sp.hasClass('o') ? 'o' : i;
			s.push(whatsHere);
			if (whatsHere != 'x' && whatsHere != 'o')
				filled = false;
		}

		// loop over all of the possible winning rows and if one matches goto win function
		for (var t = 0; t < wins.length; t++) {
			if(s[wins[t][0]] == s[wins[t][1]] && s[wins[t][1]] == s[wins[t][2]]) {
				win(s[wins[t][0]]);
				return false;
			}
		}

		// if the board is filled with letters and you got here, it is a tie
		if (filled)
			win(0);
	}
	
	// simply console.log at this point
	// TODO: add points! Scoreboard
	function win(winner) {
		console.log(winner != 0 ? (winner + " won!") : "tie");
	}
});