winningCombinations = [[1,2,3], [4,5,6], [7,8,9], [1,4,7], [2,5,8], [3,6,9], [1,5,9], [3,5,7]];

var p1 = true;
var p2 = false;

var p1Score = 0;
var p2Score = 0;

var p1Combinations = [];
var p2Combinations = [];

flipTile = function(arg) {
	// console.log($("#"+arg).data("val"));
	if(!$("#"+arg).hasClass("flipped")){
		$("#"+arg).addClass("flipped");
		if (p1 === true) {
			$("#"+arg + " .back").text("O");
			tileValue = $("#"+arg).data("val");
			addToArray(p1Combinations, tileValue);
			checkArray("p1");
			p1 = false;
			p2 = true;
		} else {
			$("#"+arg + " .back").text("X");
			tileValue = $("#"+arg).data("val");
			addToArray(p2Combinations, tileValue);
			checkArray("p2");
			p1 = true;
			p2 = false;
		}
	}
}

addToArray = function(player, value){
	player.push(value);
}

checkArray = function(player){
	var arrayLength = winningCombinations.length;
	for (var i = 0; i < arrayLength; i++) {
		isWinner = winningCombinations[i].every(function(val) { return eval(player + "Combinations").indexOf(val) >= 0; });
		if (isWinner == true) {
			p1Combinations = [];
			p2Combinations = [];
			if (player == "p1") {
				p1Score += 1;
				$("#one-score").text(eval(player + "Score"));
				alert("Player 1 wins!");
			} else {
				p2Score += 1;
				$("#two-score").text(eval(player + "Score"));
				alert("Player 2 wins!");
			}
			resetGame();
		} else if(isWinner == false && (p1Combinations.length + p2Combinations.length == 9)) {
			alert("Game tied!")
			resetGame();
		}
	}
}

resetGame = function() {
	$("div").each(function(index) {
	  if($(this).hasClass("flipped")){
	  	$(this).removeClass("flipped");
	  }
	});
}