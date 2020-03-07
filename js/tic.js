$(document).ready(function(){
	var turn = 'x';

	$('.space').click(function() {
		var space = $(this);
		if (space.hasClass('x') || space.hasClass('o'))
			return false;
		space.addClass(turn);
		if (turn == 'x')
			turn = 'o';
		else
			turn = 'x';

		checkWin();
	});

	function checkWin() {
		var s = [];
		var spaces = $('.space');
		for (var i = 0; i < spaces.length; i++) {
			var sp = $(spaces[i]);
			s.push(sp.hasClass('x') ? 'x' : sp.hasClass('o') ? 'o' : i);
		}
		if (s[0] == s[1] && s[1] == s[2])
			win(s[0]);
		if (s[3] == s[4] && s[4] == s[5])
			win(s[3]);
		if (s[6] == s[7] && s[7] == s[8])
			win(s[6]);
		if (s[0] == s[3] && s[3] == s[6])
			win(s[0]);
		if (s[0] == s[4] && s[4] == s[8])
			win(s[0]);
		if (s[2] == s[5] && s[5] == s[8])
			win(s[2]);
		if (s[1] == s[4] && s[4] == s[7])
			win(s[1]);
		if (s[2] == s[4] && s[4] == s[6])
			win(s[2]);
	}
	
	function win(winner) {
		alert( winner + " won!");
	}
});