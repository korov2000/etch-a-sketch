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
}

function removeGrid() {
	const container = document.querySelector(".container");
	const squares = document.querySelectorAll(".square");

	squares.forEach((square) => {
		container.removeChild(square);
	})
}

function drawLine () {
	const squares = document.querySelectorAll(".square");

	squares.forEach((square) => {
			square.addEventListener("mouseenter", () => {
				square.style.backgroundColor = "red";
			});
	})

}

const numOfSquares = document.querySelector(".num-of-squares");

numOfSquares.addEventListener("click", () => {
	let num = prompt("Enter number of squares per line\nbetween 2 and 100:");

	let keepGoing = true;
	while(keepGoing) {
		if (num >= 2 && num <= 100) {
			removeGrid();
			createGrid(num);
			drawLine();
			keepGoing = false;
		} else {
			num = prompt("Enter number of squares per line\n between 2 and 100:"); 
		}
	}
});

createGrid();
drawLine();