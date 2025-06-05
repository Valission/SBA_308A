import { selected_value } from "./User_Inter.js";
export {characters}
let url = "https://www.amiiboapi.com/api/amiibo/?name=mario&showusage";

function urlChoice(name) {
  url = `https://www.amiiboapi.com/api/amiibo/?name=${name}&showusage`;
}

urlChoice(selected_value);

fetch(url)
  .then((response) => response.json())
  .then((data) => {
    let characters = data.amiibo.map((item) => item.character);
    console.log(characters);
  });
