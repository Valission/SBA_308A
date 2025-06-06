import { getCharacters } from "./API_Data.js";
import { displayCharacterInfo } from "./User_Inter.js";

let selected = document.getElementById("characters");

async function characterDisplay() {
  let defaultValue = selected.value;
  displayCharacterInfo(await getCharacters(defaultValue));
}
async function changeCharacterDisplay() {
  let selectedValue = selected.value;
  displayCharacterInfo(await getCharacters(selectedValue));
}

window.addEventListener("DOMContentLoaded", characterDisplay);

selected.addEventListener("change", changeCharacterDisplay);
