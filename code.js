const n = 3;
window.onload = init;

//var game = Array(n).fill().map(() => Array(n));
var game = [];
function mark_x(event){
	if(event.target.innerHTML == "&nbsp;"){
		event.target.innerHTML = "x";
		indices = event.target.id.split(",");
		i = parseInt(indices[0])
		j = parseInt(indices[1])
		game[i][j] = 1;
	}
}
function init(){
	var board = document.getElementById("checkerboard");

	for (let i = 0; i < n; i++) {
		game = game.concat([[null]]);
		let newLine = document.createElement('div');
		for (let j = 0; j < n; j++) {
			game[i] = game[i].concat([null]);
			var button = document.createElement('button');
			button.innerHTML = "&nbsp;"
			button.id = i + "," + j
			button.addEventListener("click", mark_x);
			newLine.appendChild(button);
			newLine.innerHTML += " | ";
		}
		newLine.innerHTML += "<br>";
		board.appendChild(newLine);
	}
	var button = document.querySelector("button");
	button.addEventListener("click", mark_x);
	//button.addEventListener("click", (event) => event.target.innerHTML = "x");
}

