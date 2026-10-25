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

function drawLine () {
	const squares = document.querySelectorAll(".square");

	squares.forEach((square) => {
			square.addEventListener("mouseenter", () => {
				square.style.backgroundColor = "red";
			});
	})

}

createGrid();
drawLine();