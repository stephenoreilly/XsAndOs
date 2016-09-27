var grid = [[0, 0, " "], [0, 1, " "], [0, 2, " "], [1, 0, " "], [1, 1, " "], [1, 2, " "], [2, 0, " "], [2, 1, " "], [2, 2, " "]];

function placeValue(value){
	if(checkForChanceOfWin()){

	} else if(checkForChanceOfLoss()) {

	} else {
		placeInDiagonal(value);
	}
}

function placeInDiagonal(value){
	if(grid[0][2] == " "){
		grid[0][2] = value;
	} else if(grid[2][2] == " "){
		grid[2][2] = value;
	} else if(grid[6][2] == " "){
		grid[6][2] = value;
	} else if(grid[8][2] == " "){
		grid[8][2] = value;
	}
}

function checkForChanceOfLoss(){
	return false;
}
function checkForChanceOfWin(){
	return false;
}
function checkColumns(){
	var counter = 0;
	var reset = 1;
	var column = 0;

	for(var y = 0; y < 3; y++){

	}


}
function checkRows(value){
	var counter = 0;
	var reset = 1;
	var row = 0;

	for(var y = 0; y < 9; y++){
		if(grid[y][2] == value){
			counter++;
		}
		reset++;
		if(reset%3 == 0){
			if(counter == 2){
				return row
			}
			row++;
			counter = 0;
		}
	}

}
function checkDiagonals(){
	var x = 0;
	var y = 0;
}

function displayGrid(){
	console.log(grid[0][2] + ", " +  grid[1][2] + ", " + grid[2][2]);
	console.log(grid[3][2] + ", " +  grid[4][2] + ", " + grid[5][2]);
	console.log(grid[6][2] + ", " +  grid[7][2] + ", " + grid[8][2]);
	console.log("**********************************")
}

displayGrid();

placeValue("x");
displayGrid();
placeValue("o");
displayGrid();
placeValue("x");
displayGrid();
placeValue("o");
displayGrid();

