export function displayCharacterInfo(characters) {
  let infoDiv = document.getElementById("info");
  infoDiv.innerHTML = ""; // clear previous
  let info = ''
  for (let i = 0; i<characters.length;i++){
  let character = characters[i];
   info += `<div class = 'amiibo'>
    <p><strong>Name:</strong> ${character.character}</p>
    <p><strong>Game Series:</strong> ${character.gameSeries}</p>
    <img src="${character.image}" alt="${character.character}" width="100" />
    </div>
    `;
  infoDiv.innerHTML = info;
  }
}
