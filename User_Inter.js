export function displayCharacterInfo(characters) {
  const infoDiv = document.getElementById("info");
  infoDiv.innerHTML = ""; // clear previous

  if (characters.length === 0) {
    infoDiv.innerText = "No characters found.";
    return;
  }

  const first = characters[0];
  const infoHTML = `
    <p><strong>Name:</strong> ${first.character}</p>
    <p><strong>Game Series:</strong> ${first.gameSeries}</p>
    <img src="${first.image}" alt="${first.character}" width="100" />
  `;
  infoDiv.innerHTML = infoHTML;
}
