// potrebno je napraviti grid od 16 x 16 kvadrata, to znači 156 kvadrata

function createGrid (squaresPerSide = 16) {
	const container = document.querySelector(".container");
	const flexBasis = 100 / squaresPerSide;
	const numberOfSquares = squaresPerSide * squaresPerSide;

	for (let i = 0; i < numberOfSquares; i++) {
		const square = document.createElement("div");
		square.setAttribute("class", "square");
		square.style = `flex-basis: ${flexBasis}%;`;
		container.appendChild(square);
	}
}

createGrid();