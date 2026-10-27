function createGrid (squaresPerSide = 16) {
	const container = document.querySelector(".container");
	const flexBasis = 100 / squaresPerSide;
	const numberOfSquares = squaresPerSide * squaresPerSide;

	for (let i = 0; i < numberOfSquares; i++) {
		const square = document.createElement("div");
		square.setAttribute("class", "square");
		square.style.flexBasis = `${flexBasis}%`;
		container.appendChild(square);
	}

	const message = document.querySelector(".message");
	message.textContent = `Move around a mouse on a ${squaresPerSide} x ${squaresPerSide} grid, and you will see a trail where mouse passes.`
}

function removeGrid() {
	const container = document.querySelector(".container");
	const squares = document.querySelectorAll(".square");

	squares.forEach((square) => {
		container.removeChild(square);
	});
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function drawLine () {
	const squares = document.querySelectorAll(".square");

	squares.forEach((square) => {
			square.addEventListener("mouseenter", () => {
				square.style.backgroundColor = `rgb(${getRandomInt(256)}, ${getRandomInt(256)}, ${getRandomInt(256)})`;
			});
	});
}

const numOfSquares = document.querySelector(".num-of-squares");
numOfSquares.addEventListener("click", () => {
	let num = prompt("Enter number of squares per line between 2 and 100:");

	let keepGoing = true;
	while(keepGoing) {
		if (num >= 2 && num <= 100) {
			removeGrid();
			createGrid(num);
			drawLine();
			keepGoing = false;
		} else {
			num = prompt("Wrong entry!\nEnter number of squares per line between 2 and 100:"); 
		}
	}
});

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", () => {
			removeGrid();
			createGrid();
			drawLine();
});

createGrid();
drawLine();